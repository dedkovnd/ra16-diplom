import { FETCH_PRODUCTS_REQUEST } from "./actionTypes";
import { FETCH_PRODUCTS_SUCSESS } from "./actionTypes";
import { FETCH_PRODUCTS_FAILURE } from "./actionTypes";
import { FETCH_PRODUCTS_UPDATE } from "./actionTypes";

import { FETCH_TOPSALES_REQUEST } from "./actionTypes";
import { FETCH_TOPSALES_SUCSESS } from "./actionTypes";
import { FETCH_TOPSALES_FAILURE } from "./actionTypes";

import { CHECK_CATEGORY } from "./actionTypes";

import { ADD_CART, DELETE_CART } from "./actionTypes";

import {
  SEARCH_PRODUCTS_FAILURE,
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  CHANGE_PRODUCTS_FIELD,
} from "./actionTypes";

////products types

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProductsSucsess = (data) => ({
  type: FETCH_PRODUCTS_SUCSESS,
  payload: { data },
});

export const fetchProductsUpdate = (data, update) => ({
  type: FETCH_PRODUCTS_UPDATE,
  payload: { data, update },
});

//////sales types

export const fetchSalesRequest = () => ({
  type: FETCH_TOPSALES_REQUEST,
});

export const fetchSalesFailure = (error) => ({
  type: FETCH_TOPSALES_FAILURE,
  payload: error,
});

export const fetchSalesSucsess = (data) => ({
  type: FETCH_TOPSALES_SUCSESS,
  payload: { data },
});

////category types

export const checkCategory = (num) => ({
  type: CHECK_CATEGORY,
  payload: num,
});

////Cart item
export const addCart = (cart) => ({
  type: ADD_CART,
  payload: cart,
});

export const deleteCart = (id,size) => ({
  type: DELETE_CART,
  payload: {id: id, size: size}
});

////search types

export const searchProductsRequest = (search) => ({
  type: SEARCH_PRODUCTS_REQUEST,
  payload: { search },
});

export const searchProductsFailure = (error) => ({
  type: SEARCH_PRODUCTS_FAILURE,
  payload: { error },
});

export const searchProductsSuccess = (items) => ({
  type: SEARCH_PRODUCTS_SUCCESS,
  payload: { items },
});

export const changeProductsField = (search) => ({
  type: CHANGE_PRODUCTS_FIELD,
  payload: { search },
});

////actions

export function fetchProducts(url) {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    const response = await fetch(`http://localhost:7070/api/${url}`);
    const json = await response.json();
    dispatch(fetchProductsSucsess(json));
  };
}

export function fetchUpdate(num, id = "") {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    const response = await fetch(
      `http://localhost:7070/api/items?${id}offset=${num}`
    );
    const json = await response.json();
    let update = true;
    if (json.length < 6) {
      update = false;
    }
    dispatch(fetchProductsUpdate(json, update));
  };
}

export function fetchSales() {
  return async (dispatch) => {
    dispatch(fetchSalesRequest());
    const response = await fetch(`http://localhost:7070/api/top-sales`);
    const json = await response.json();
    dispatch(fetchSalesSucsess(json));
  };
}
