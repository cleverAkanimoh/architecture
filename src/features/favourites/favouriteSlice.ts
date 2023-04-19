import { createSlice } from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
    name: 'favourite',

    initialState: {
        isFavourite: false
    },

    reducers: {
        toggleFavourite: (state: { isFavourite: boolean }) => { state.isFavourite = !state.isFavourite }
    }
})

export const {toggleFavourite} = favouriteSlice.actions
export default favouriteSlice.reducer