import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdate } from "../../redux/actions/actionCreators";

export const UploadButton = () => {
  const [counter, setCounter] = useState(6);
  const dispatch = useDispatch();
  const update = useSelector((state) => state.products.update);
  const id = useSelector((state)=> state.category.category);
  const prevId = `categoryId=${id}&`

  const buttonHandler = () => {
    if (id === null) {
      dispatch(fetchUpdate(counter));
    } else {
      dispatch(fetchUpdate(counter, prevId));
    }
    setCounter(counter + 6);
  };

  return (
    <>
      {update && (
        <div className="text-center">
          <button className="btn btn-outline-primary" onClick={buttonHandler}>
            Загрузить ещё
          </button>
        </div>
      )}
    </>
  );
};
