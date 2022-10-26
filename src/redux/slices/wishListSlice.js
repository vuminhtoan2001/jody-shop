import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

const initialState = [];
const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        handleWishList(state, { payload }) {
            const { id } = payload;
            const find = state.find((item) => item.id === id);
            if (find) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Đã xóa khỏi sản phẩm yêu thích',
                    showConfirmButton: false,
                    timer: 2000,
                });
                return state.filter((cartItem) => cartItem.id !== payload.id);
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thêm vào sản phẩm yêu thích',
                    showConfirmButton: false,
                    timer: 1500,
                });
                state.push({
                    ...payload,
                });
            }
        },
        removeCart(state, { payload }) {
            return state.filter((cartItem) => cartItem.id !== payload);
        },
        clear(state) {
            return [];
        },
    },
});

export const { handleWishList, removeCart, clear } = wishListSlice.actions;
export default wishListSlice.reducer;
