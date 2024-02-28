import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";


export const store = configureStore ({
    reducer:{
        counterStore:counterReducer   
    }
})

console.log(store.getState());