import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice"
import {PostApi} from "../services/PostService";

const RootReducer = combineReducers({
    userReducer,
    [PostApi.reducerPath]: PostApi.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: RootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(PostApi.middleware)
    })
}

export type RootStore = ReturnType<typeof RootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']