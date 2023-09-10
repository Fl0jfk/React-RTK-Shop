import { configureStore } from "@reduxjs/toolkit";
import phonesReducer from "./features/phones/PhoneSlice";
import tvsReducer from './features/tvs/TvSlice';
import commentsReducer from './features/comments/CommentsSlice';

const store = configureStore({
    reducer:{
        phone: phonesReducer,
        tv: tvsReducer,
        comment: commentsReducer
    }
})

export default store;