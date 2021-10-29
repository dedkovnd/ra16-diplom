import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import productsReducer from "../reducers/productsReducer";
import topSalesReducer from "../reducers/topSalesReducer";
import { categoryReducer } from "../reducers/categoryReducer";
import { cartReducer } from "../reducers/cartReducer";
import saga from "../sagas";
import thunk from "redux-thunk";

const reducer = combineReducers({
  products: productsReducer,
  sales: topSalesReducer,
  category: categoryReducer,
  carts: cartReducer
});

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, compose(applyMiddleware(thunk,sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

sagaMiddleware.run(saga);

export default store;
