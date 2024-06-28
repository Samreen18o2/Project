import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/features/counter/counterSlice';
import cartReducer from '../redux/features/cart/cartSlice';
import todosReducer from '../redux/features/todos/todosSlice'; // Import todos reducer
import productReducer from './features/products/productSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    todos: todosReducer, // Add todos reducer to the store
    products: productReducer,
  },
});

export default store;
