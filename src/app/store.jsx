import { configureStore } from "@reduxjs/toolkit";
import phonesReducer from "./features/phones/PhoneSlice";
import tvsReducer from './features/tvs/TvSlice';

const store = configureStore({
    reducer:{
        phone: phonesReducer,
        tv: tvsReducer
    }
})

export default store;