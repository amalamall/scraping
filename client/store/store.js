import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;