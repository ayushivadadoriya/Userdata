import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";
import userAuthSlice from "./userAuthSlice";

const store=configureStore({
    reducer:{
        users:slice,
        user:userAuthSlice.reducer
    }
})

export default store;