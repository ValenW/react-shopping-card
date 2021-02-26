import { createAction } from "redux-actions";

export const addToCart = createAction("add to cart");
export const changeCount = createAction("change count");
export const deleteProduct = createAction("delete product");
export const loadCart = createAction("load cart");

export const addToCartLocal = createAction("add to local cart");
export const changeCountLocal = createAction("change count local");
export const deleteProductLocal = createAction("delete product local");
export const saveCart = createAction("save cart");
