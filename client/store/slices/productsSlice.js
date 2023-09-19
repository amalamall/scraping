import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products : [],
    totalPrice : 0
  },
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
    addProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex >= 0) {
        const existingProduct = state.products[existingProductIndex];
        const updatedProduct = {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        };
        state.products[existingProductIndex] = updatedProduct;
        state.totalPrice += existingProduct.price;
      } else {
        const newProduct = {
          ...action.payload,
          quantity: 1,
        };
        state.products = [...state.products].concat(newProduct);
        state.totalPrice += newProduct.price;
      }
    },
    removeProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex >= 0) {
        const existingProduct = state.products[existingProductIndex];
        state.totalPrice -= existingProduct.price * existingProduct.quantity;
        state.products.splice(existingProductIndex, 1);
      }
    },
  },
});

export const { setProducts, addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;