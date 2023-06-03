import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    cartArr: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,

    reducers: {
        setProductInCart: (state, action) => {
            const finded = state.cartArr.find(cart => cart.id === action.payload.id)
            state.totalPrice += action.payload.price;
            if (finded) {
                finded.count += 1;
            } else {
                state.cartArr.push({...action.payload, count: 1})
            }
        },

        delProductFromCart: (state, action) => {
            const finded = state.cartArr.find(cart => cart.id === action.payload.id)
            state.totalPrice -= action.payload.price;
            if (finded.count > 1) {
                finded.count -= 1;
            } else {
                state.cartArr = state.cartArr.filter(prod => prod.id !== action.payload.id)
            }
        },

        clearCart: (state, action) => {
            state.cartArr = action.payload;
        }
    },
});

const {actions: {setProductInCart, delProductFromCart, clearCart}} = cartSlice;
const cartActions = {setProductInCart, delProductFromCart, clearCart};
export {
    cartActions
}
export default cartSlice.reducer;



