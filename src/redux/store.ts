import { configureStore } from '@reduxjs/toolkit';
import filter from './Slices/filterSlice';
import cart from './Slices/cartSlice';
import pizzas from './Slices/pizzasSlices';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizzas,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
