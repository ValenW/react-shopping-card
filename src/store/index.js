import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as ProductReducer } from "./product/reducer";
import createSagaMiddleware from "redux-saga";
import productSaga from "./product/middleware";
import { all } from "redux-saga/effects";

const saga = createSagaMiddleware();

export const store = createStore(
  combineReducers({ products: ProductReducer }),
  applyMiddleware(saga)
);

saga.run(function* () {
  yield all([productSaga()]);
});
