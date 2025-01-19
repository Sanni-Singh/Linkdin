import { configureStore } from "@reduxjs/toolkit";
import UserData from './src/slices/userSlices'
const store = configureStore({
    reducer:{
        UserData:UserData,
    }
})
export default store;