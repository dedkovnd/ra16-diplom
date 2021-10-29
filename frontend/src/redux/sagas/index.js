import { takeLatest, put, all, call, debounce } from "redux-saga/effects";
import {
  searchProductsRequest,
  searchProductsFailure,
  searchProductsSuccess,
} from "../actions/actionCreators";
import {
  CHANGE_PRODUCTS_FIELD,
  SEARCH_PRODUCTS_REQUEST,
} from "../actions/actionTypes";
import { searchProducts } from "../../services/searchProducts";

function filterChangeSearch({ type, payload }) {
  return type === CHANGE_PRODUCTS_FIELD && payload.search.trim() !== "";
}

function* changeSearchSaga(action) {
  yield put(searchProductsRequest(action.payload.search));
}

function* watchChangeSearch() {
  yield debounce(100, filterChangeSearch, changeSearchSaga);
}

//////////////////////
function* searchProductsSaga(action) {
  try {
    const data = yield call(searchProducts, action.payload.search);
    yield put(searchProductsSuccess(data));
  } catch (e) {
    yield put(searchProductsFailure(e.message));
  }
}

// watcher
function* watchSearchProducts() {
  yield takeLatest(SEARCH_PRODUCTS_REQUEST, searchProductsSaga);
}

//////////////////////////

export default function* saga() {
  yield all([watchChangeSearch(), watchSearchProducts()]);
}
