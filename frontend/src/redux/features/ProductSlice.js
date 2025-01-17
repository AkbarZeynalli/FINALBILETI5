import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
}
const baseUrl = "http://localhost:5000/api/Product"

export const getData = createAsyncThunk("getproduct", async () => {
    const { data } = await axios.get("http://localhost:5000/api/Product")

    return data.products
})

export const productSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})

// Action creators are generated for each case reducer function
export const { extraReducers } = productSlice.actions

export default productSlice.reducer