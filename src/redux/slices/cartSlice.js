import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, { payload }) {
            const { id } = payload;
            const find = state.find((item) => item.id === id);
            if (find) {
                return state.map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item,
                );
            } else {
                state.push({
                    ...payload,
                });
            }
        },
        removeCart(state, { payload }) {
            return state.filter((cartItem) => cartItem.id !== payload);
        },
        increment(state, action) {
            return state.map((item) =>
                item.id === action.payload
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                      }
                    : item,
            );
        },
        decrement(state, action) {
            return state.map((item) =>
                item.id === action.payload
                    ? {
                          ...item,
                          quantity: item.quantity - 1,
                      }
                    : item,
            );
        },
        inputQty(state, action) {
            console.log(action);
            return state.map((item) =>
                item.id === action.payload.id
                    ? {
                          ...item,
                          quantity: action.payload.qty,
                      }
                    : item,
            );
        },
        clear(state) {
            return [];
        },
    },
});

export const { addToCart, removeCart, increment, decrement, inputQty, clear } = cartSlice.actions;
export default cartSlice.reducer;
