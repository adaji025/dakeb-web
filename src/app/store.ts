import { configureStore } from "@reduxjs/toolkit"
import {  persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import userReducer from "../features/userSlice"

const persistConfig = {
    key: 'root',
    storage,
}
  
const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: {
        user: persistedReducer,
    }
}) 

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;