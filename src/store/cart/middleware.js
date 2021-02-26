import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import {
  addToCart,
  addToCartLocal,
  deleteProduct,
  deleteProductLocal,
  loadCart,
  saveCart,
  changeCount,
  changeCountLocal,
} from "./action";

const basePath = "http://localhost:3005/cart";
const get = "/";
const add = "/add";
const deleteAPI = "/delete";
const update = "/";

const getAPI = (path) => `${basePath}${path}`;

function* addToCartSaga(action) {
  const { data } = yield axios.post(getAPI(add), { gid: action.payload.id });
  yield put(addToCartLocal(data));
}

function* loadCartSaga() {
  const { data } = yield axios.get(getAPI(get));
  yield put(saveCart(data));
}

function* deleteFromCartSaga(action) {
  yield axios.delete(getAPI(deleteAPI), {
    params: { cid: action.payload },
  });
  yield put(deleteProductLocal(action.payload));
}

function* updateCartSaga(action) {
  const { data } = yield axios.put(getAPI(update), action.payload);
  yield put(changeCountLocal(data));
}

export default function* cartSaga() {
  yield takeEvery(addToCart, addToCartSaga);
  yield takeEvery(loadCart, loadCartSaga);
  yield takeEvery(deleteProduct, deleteFromCartSaga);
  yield takeEvery(changeCount, updateCartSaga);
}
