import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import doctorAppointmentsSlice from "./doctorAppointmentsSlice";
import patientAppointmentsSlice from "./patientAppointmentsSlice";
import userSlice from "./userSlice";
import createSagaMiddleware from "@redux-saga/core";
import userSagaWatcher from "./userSaga";
import loaderSlice from "./loaderSlice";

const saga = createSagaMiddleware();

const authPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token", "role_name"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  saga,
];

const rootReducer = combineReducers({
  user: persistReducer(authPersistConfig, userSlice),
  patientAppointments: patientAppointmentsSlice,
  doctorAppointments: doctorAppointmentsSlice,
  loader: loaderSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
saga.run(userSagaWatcher);

export const persistor = persistStore(store);
