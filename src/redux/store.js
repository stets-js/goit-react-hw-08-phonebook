import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactSlice';
import authReducer from './auth/authSlice';

// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage,
// };
//const persistedReducer = persistReducer(persistConfig, contactsReduser);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
    devTools: process.env.NODE_ENV !== 'production',
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

//export const persistor = persistStore(store);
