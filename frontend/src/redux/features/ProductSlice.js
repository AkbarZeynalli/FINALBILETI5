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

export const addProduct = createAsyncThunk('add', async (product) => {
    const { data } = await axios.post("http://localhost:5000/api/Product", product)
    return product
})
export const delProduct = createAsyncThunk('delete', async (id) => {
    await axios.delete(`${baseUrl}/${id}`)
    return id
})

export const productSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action) => {
            state.products = action.payload
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products.push({ ...action.payload })
        }),
            builder.addCase(delProduct.fulfilled, (state, action) => {
                state.products = state.products.filter((product) => product._id !== action.payload)
            })
    }
})

export const { extraReducers } = productSlice.actions

export default productSlice.reducer