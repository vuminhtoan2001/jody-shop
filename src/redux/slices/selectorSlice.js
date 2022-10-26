const { createSelector } = require('@reduxjs/toolkit');

const cartSelector = (state) => state.cart;
const wishListSelector = (state) => state.wishList;

export const cartTotalSelector = createSelector([cartSelector], (cart) =>
    cart.reduce((total, current) => (total += current.quantity), 0),
);

export const wishListTotalSelector = createSelector([wishListSelector], (wishList) => wishList.length);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
    cart.reduce((total, current) => (total += current.price * current.quantity), 0),
);
