import { put, call, takeLatest } from "redux-saga/effects";
import { fetchAPI } from "../../api/api";
import {
  fetchFailure,
  fetchRequest,
  fetchSuccess,
} from "../../slice/ProductSlice";

function* fetchResults() {
  try {
    const respone: any[] = yield call(fetchAPI);
    const data = respone.products;
    yield put(fetchSuccess(data));
  } catch (error: any) {
    yield put(fetchFailure(error.message));
  }
}
export default function* ProductsSaga() {
  yield takeLatest(fetchRequest.type, fetchResults);
}
