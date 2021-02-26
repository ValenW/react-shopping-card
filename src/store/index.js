import { combineReducers, createStore } from "redux";
import { reducer as ProductReducer } from "./product/reducer";

export const store = createStore(combineReducers({ products: ProductReducer }));
