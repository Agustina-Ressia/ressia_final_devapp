import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {rpApi} from './Services/rpService'
import {authApi} from './Services/auth'
import authReducer from "../Features/Auth/authSlice"

export const store = configureStore({
    reducer:{
        auth:authReducer,        
        [rpApi.reducerPath] : rpApi.reducer,
        [authApi.reducerPath]: authApi.reducer,    
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rpApi.middleware,authApi.middleware),
})

setupListeners(store.dispatch)