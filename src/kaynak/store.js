// kaynak/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // reducer'ların olduğu yer

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store; // Sadece objeyi dışarı aktar, Hook kullanma!





// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./todoSlice";

// export const store = configureStore({
//     reducer:{
//         todos: todoReducer
//     }
// });