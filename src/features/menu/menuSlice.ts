import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',

    initialState: {
        isMenuPressed: false,
        isPlansPressed: true,
    },

    reducers: {
        toggleMenu: (state: { isMenuPressed: boolean }) => { state.isMenuPressed = !state.isMenuPressed },

        togglePlans: (state: { isPlansPressed: boolean }) => { state.isPlansPressed = !state.isPlansPressed }
    }
})

export const { toggleMenu, togglePlans } = menuSlice.actions
export default menuSlice.reducer;