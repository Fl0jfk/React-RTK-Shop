import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tvs: 10
}

const TvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers: {
        tvs: (state, action) => {
            state.tvs -= action.payload
        }
    }
})

export default TvSlice.reducer;
export const { tvs } = TvSlice.actions;