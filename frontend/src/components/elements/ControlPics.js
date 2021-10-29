import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Search } from "./Search";

export const ControlPics = () => {
  const carts = useSelector((state) => state.carts);
  const search = useSelector((state) => state.products.search);
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const explanderHandler = () => {
    setVisible(!visible);
    if ( search !== "" ) {
      history.push("/catalog")
    }
  };

  return (
    <div>
      <div className="header-controls-pics">
        <div
          onClick={explanderHandler}
          data-id="search-expander"
          className="header-controls-pic header-controls-search"
        ></div>
        <div className="header-controls-pic header-controls-cart">
          {carts.length !== 0 && (
            <div className="header-controls-cart-full">{carts.length}</div>
          )}
          <div className="header-controls-cart-menu"></div>
        </div>
      </div>
      {visible && (
        <Search
          dataId="search-form"
          className={`header-controls-search-form form-inline`}
        />
      )}
    </div>
  );
};
