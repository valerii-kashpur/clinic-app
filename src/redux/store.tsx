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
import doctorAppointmentsSlice from "./slices/doctorAppointmentsSlice";
import patientAppointmentsSlice from "./slices/patientAppointmentsSlice";
import userSlice, { InitialUserState } from "./slices/userSlice";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./saga/rootSaga";
import createAppointmentSlice from "./slices/createAppointmentSlice";

const saga = createSagaMiddleware();

const authPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token", "refreshToken", "roleName"],
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
  user: persistReducer<InitialUserState>(authPersistConfig, userSlice),
  patientAppointments: patientAppointmentsSlice,
  doctorAppointments: doctorAppointmentsSlice,
  createAppointment: createAppointmentSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware,
  });
}

export const store = setupStore();
saga.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;;
