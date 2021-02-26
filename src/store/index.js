import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import productSaga from "./product/middleware";
import cartSaga from "./cart/middleware";
import { reducer as ProductReducer } from "./product/reducer";
import { reducer as CartReducer } from "./cart/reducer";


const saga = createSagaMiddleware();

export const store = createStore(
  combineReducers({ products: ProductReducer, cart: CartReducer }),
  applyMiddleware(saga)
);

saga.run(function* () {
  yield all([productSaga(), cartSaga()]);
});
