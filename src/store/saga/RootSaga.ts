import { all, fork } from "redux-saga/effects";
import ProductsSaga from "./ProductsSaga";

export default function* RootSaga() {
  console.log("root saga started");
  //if from store you are running rootSaga then fork is compulsory while combining multiple sagas
  yield all([fork(ProductsSaga)]);
  //yield all([ProductsSaga]);
}
