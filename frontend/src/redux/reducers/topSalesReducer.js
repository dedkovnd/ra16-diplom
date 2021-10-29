import { FETCH_TOPSALES_FAILURE } from "../actions/actionTypes";
import { FETCH_TOPSALES_REQUEST } from "../actions/actionTypes";
import { FETCH_TOPSALES_SUCSESS } from "../actions/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const topSalesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOPSALES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TOPSALES_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error: error };
    case FETCH_TOPSALES_SUCSESS:
      const { data } = action.payload;
      return { data: data, loading: true, error: null };
    default:
      return state;
  }
};

export default topSalesReducer;