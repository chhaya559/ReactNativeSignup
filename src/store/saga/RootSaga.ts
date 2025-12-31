import { all, fork } from "redux-saga/effects";
import ProductsSaga from "./ProductsSaga";

export default function* RootSaga() {
  console.log("root saga started");
  yield all([fork(ProductsSaga)]);
  // yield all([ProductsSaga]);
}
