import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { addToCart, addToLocalCart } from "./action";

const cartAPI = "http://localhost:3005/cart/add";

function* addToCartSaga(action) {
  const { data } = yield axios.post(cartAPI, { gid: action.payload.id });
  yield put(addToLocalCart(data));
}

export default function* cartSaga() {
  yield takeEvery(addToCart, addToCartSaga);
}
