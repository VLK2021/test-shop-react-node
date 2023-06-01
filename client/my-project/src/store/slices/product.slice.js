import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productService} from "../../services/productService";
import {getAllTitles} from "./title.slice";


export const getAllProducts = createAsyncThunk(
    'productSlice/getAllProducts',
    async (_, {rejectWithValue}) => {
        try {
            const products = await productService.getAll();
            return products
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    productsArr: [],
    status: null,
    error: null,
};

const productSlice = createSlice({
    name: 'productSlice',
    initialState,

    reducers: {
        productFilter: (state, action) => {
            state.productsArr = state.productsArr.filter(item => item.shop === action.payload);
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.status = 'Loading....'
                state.error = null
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.productsArr = action.payload
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
    }
});

const {actions: {productFilter}} = productSlice;
const productActions = {productFilter};

export {
    productActions
}
export default productSlice.reducer;










