import {configureStore} from "@reduxjs/toolkit";
import auth from "./slices/auth";
import post from "./slices/post";

export const store = configureStore({
    reducer: {
        auth,
        post
    }
})