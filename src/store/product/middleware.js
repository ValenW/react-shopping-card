import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { loadProducts, saveProducts } from "./action";

const getGoodsAPI = "http://localhost:3005/goods";

function* handleLoadProducts() {
  const { data } = yield axios.get(getGoodsAPI);
  yield put(saveProducts(data));
}

export default function* productSaga() {
  yield takeEvery(loadProducts, handleLoadProducts);
}
