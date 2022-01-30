import { configureStore } from "@reduxjs/toolkit";
// import phonebookReducer from "./phonebook/phonebook-reducers";
import { phonebookApi } from "./phonebook/phonebookSlise";
import { filter } from "./phonebook/phonebook-reducers";

// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

export const store = configureStore({
  reducer: {

    filter,
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phonebookApi.middleware
],
  devTools: process.env.NODE_ENV === "development",
});




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
