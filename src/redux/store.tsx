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
import loaderSlice from "./loaderSlice";
import { rootSaga } from "./saga/rootSaga";
import createAppointmentSlice from "./createAppointmentSlice";

const saga = createSagaMiddleware();

const authPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token", "roleName"],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  saga,
];

type InitialUserState = {
  id: string,
  firstName: string,
  lastName: string,
  photo: string,
  roleName: string,
  isAuthorized: boolean,
  token: string,
  loading: boolean,
}

const rootReducer = combineReducers({
  user: persistReducer<InitialUserState>(authPersistConfig, userSlice),
  patientAppointments: patientAppointmentsSlice,
  doctorAppointments: doctorAppointmentsSlice,
  loader: loaderSlice,
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

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware,
// });
// saga.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;;
