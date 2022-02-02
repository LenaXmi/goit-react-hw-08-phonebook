import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
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

import authReducer from './auth/auth-reducer.js'
import phonebookReducer from "./phonebook/phonebook-reducers";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    auth:authReducer,
    phonebook:phonebookReducer
   
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// export const persistor = persistStore(store);


// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import { todosReducer } from './todos';
// import { authReducer } from './auth';



// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     todos: todosReducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);




//Middleware for redux persist
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];



//Vanilla redux
// const rootReducer = combineReducers({
//   phonebook: persistReducer(contactsPersistConfig, phonebookReducer),
// });

// const store = createStore(rootReducer, composeWithDevTools());
