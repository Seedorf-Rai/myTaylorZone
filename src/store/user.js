import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slice/product'; // Import the default reducer

export const store = configureStore({
  reducer: {
    products: productReducer // Assign it to a key
  }
});
