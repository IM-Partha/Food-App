import Cartslice from "../Slice/Cartslice";
import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../components/CategorySlice";
import Searchslice from "../Slice/Searchslice";
export const Store = configureStore({
    reducer: {
        cart : Cartslice,
        category: CategorySlice,
        search : Searchslice
    }
})

export default Store