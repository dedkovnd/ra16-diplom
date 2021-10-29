import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeProductsField, searchProductsRequest } from "../../redux/actions/actionCreators";

export function Search({ className }) {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.products.search);

  const inputHandler = (evt) => {
    const { value } = evt.target;
    dispatch(changeProductsField(value));
    dispatch(searchProductsRequest(value))
  };

  return (
    <>
      <form className={className}>
        <input
          className="form-control"
          placeholder="Поиск"
          value={search}
          onChange={inputHandler}
        />
      </form>
    </>
  );
}
