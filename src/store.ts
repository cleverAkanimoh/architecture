import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from './features/favourites/favouriteSlice';
import menuReducer from './features/menu/menuSlice';

const store = configureStore({
    reducer: {
        menu: menuReducer,
        favourite: favouriteReducer
    }
})

export default store