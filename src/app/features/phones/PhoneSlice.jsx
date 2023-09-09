import { createSlice } from '@reduxjs/toolkit';
import { tvs as tvsAction } from '../tvs/TvSlice';

const initialState = {
    phones: 5,
    tablets:10
}

const PhoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        phones: (state, action) => {
            state.phones -= action.payload
        },
        tablets: (state, action) => {
            state.tablets -= action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(tvsAction, (state, action) => {
            state.phones -= action.payload
        })
    }
})

export default PhoneSlice.reducer;
export const { phones, tablets } = PhoneSlice.actions;