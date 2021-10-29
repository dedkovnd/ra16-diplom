import { FETCH_PRODUCTS_REQUEST } from "../actions/actionTypes";
import { FETCH_PRODUCTS_SUCSESS } from "../actions/actionTypes";
import { FETCH_PRODUCTS_FAILURE } from "../actions/actionTypes";
import { FETCH_PRODUCTS_UPDATE } from "../actions/actionTypes";

import {  SEARCH_PRODUCTS_FAILURE,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  CHANGE_PRODUCTS_FIELD,} from "../actions/actionTypes";

const initialState = {
  data: [],
  search: "",
  loading: false,
  update: true,
  error: null,
  errorSearch: null
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error: error };
    case FETCH_PRODUCTS_SUCSESS:
      const { data } = action.payload;
      return { ...state, data: data, loading: true, error: null, update: true };
    case FETCH_PRODUCTS_UPDATE:
      const newData = action.payload.data;
      const oldData = state.data;
      const update = action.payload.update;
      return {
        data: oldData.concat(newData),
        loading: true,
        error: null,
        update: update,
      };
    ////search
    case SEARCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        errorSearch: null,
      };
      case SEARCH_PRODUCTS_FAILURE:
      const { errorSearch } = action.payload;
      return {
        ...state,
        loading: false,
        errorSearch,
      };
    case SEARCH_PRODUCTS_SUCCESS:
      const dataSearch  = action.payload.items;
      return { ...state, data: dataSearch, loading: true, errorSearch: null }
    case CHANGE_PRODUCTS_FIELD:
      const { search } = action.payload;
      return {
        ...state,
        search,
      };
    default:
      return state;
  }
};

export default productsReducer;
