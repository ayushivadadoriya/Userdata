import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

const store=configureStore({
    reducer:{
        users:slice
    }
})

export default store;