import { CHECK_CATEGORY } from "../actions/actionTypes";

const initialState = {
  category: null
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_CATEGORY:
      return {category: action.payload}
  }
  return state;
};
