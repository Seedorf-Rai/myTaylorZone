

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchAllProducts = createAsyncThunk('fetchAllProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products')
  return response.data
})

export const fetchThreeProducts = createAsyncThunk('fetchThreeProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products?limit=3')
    return response.data
})
export const fetchFourProducts = createAsyncThunk('fetchFourProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products?limit=4')
    return response.data
})
export const fetchById = createAsyncThunk('fetchById', async ({id}) => {
   return id
})





export const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    threeProducts : [],
    fourProducts : [],
    loading: false,
    product : {},
    isError: false,
    errorMessage : ''
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state, action) => {
      state.loading = true
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false
      state.allProducts = action.payload
    })
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      console.log("Error: ", action.payload);
      state.isError = true
    })
    builder.addCase(fetchThreeProducts.pending, (state, action) => {
        state.loading = true
      });
      builder.addCase(fetchThreeProducts.fulfilled, (state, action) => {
        state.loading = false
        state.threeProducts = action.payload
      })
      builder.addCase(fetchThreeProducts.rejected, (state, action) => {
        console.log("Error: ", action.payload);
        state.isError = true
      })
      builder.addCase(fetchFourProducts.pending, (state, action) => {
        state.loading = true
      });
      builder.addCase(fetchFourProducts.fulfilled, (state, action) => {
        state.loading = false
        state.fourProducts = action.payload
      })
      builder.addCase(fetchFourProducts.rejected, (state, action) => {
        console.log("Error: ", action.payload);
        state.isError = true
      })
      builder.addCase(fetchById.pending, (state, action) => {
        state.loading = true
      });
      builder.addCase(fetchById.fulfilled, (state, action) => {
        state.loading = false
        state.product = state.allProducts.filter((prod)=>prod.id === action.payload)
      })
      builder.addCase(fetchById.rejected, (state, action) => {
        console.log("Error: ", action.payload);
        state.isError = true
      })

  }
})

export default productSlice.reducer