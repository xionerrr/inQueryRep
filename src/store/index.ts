import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { postAPI } from 'service/PostService';

const rootReducer = combineReducers({
    [postAPI.reducerPath]: postAPI.reducer
})

export const storeSetup = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof storeSetup>
export type AppDispatch = AppStore['dispatch']
