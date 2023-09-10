import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState ={
    isLoading: false,
    comments: [],
    error: ''
}

export const fetchComments = createAsyncThunk(
    'comments/fetchComments', 
    () => axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.data)
)

const CommentsSlice =createSlice({
    name: 'comments',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchComments.pending, state => {
            state.isLoading = true;
        })
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.comments = action.payload;
            state.error = '';
        })
        builder.addCase(fetchComments.rejected, (state, action) => {
            state.isLoading = false;
            state.comments = [];
            state.error = action.error.message;
        })
    }
})

export default CommentsSlice.reducer;