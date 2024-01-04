import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFood = createAsyncThunk('foodSlice/fetchFood ', () => {
    const result = axios.get('/restaurant.json').then(response => response.data.restaurants)
    console.log(result);
    return result
})

const foodSlice = createSlice({
    name: "food",
    initialState: {
        loading: false, //pending
        allrestaurent: [], //resolve
        searchRestaurent: [],
        error: "" //reject 
    },
    extraReducers: (builder) => {
        //builder holds the value/response from thunk
        builder.addCase(fetchFood.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchFood.fulfilled, (state, action) => {
            state.loading = false
            state.allrestaurent = action.payload
            state.searchRestaurent = action.payload
            state.error = ""
        })
        builder.addCase(fetchFood.rejected, (state, action) => {
            state.loading = false
            state.allrestaurent = ""
            state.error = action.error.message
        })
    },
    reducers:{
        search:(state, action)=>{
            state.allrestaurent = state.searchRestaurent.filter(item=>item.neighborhood.toLowerCase().includes
            (action.payload.toLowerCase()))
        }
    }
})
export const {search} = foodSlice.actions

export default foodSlice.reducer