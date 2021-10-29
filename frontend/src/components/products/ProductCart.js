import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../img/default-img.png";

export const ProductCart = ({images, title, price, id}) => {
  function errorHandler(event) {
    event.target.onerror = null;
    event.target.src = defaultImg;
  }

  return (
    <div className="col-4">
      <div className="card catalog-item-card" style={{ minHeight: "34em"}}>
        <img
          onError={(e) => {
            errorHandler(e);
          }}
          src={images}
          className="card-img-top img-fluid"
          alt={title}
          style={{ maxHeight: "26em"}}
        />
        <div className="card-body" style={{position: "absolute", marginTop: "20em"}}>
          <p className="card-text" style={{height: "4em"}}>{title}</p>
          <p className="card-text">{`${price} руб.`}</p>
          <Link to={`/catalog/${id}`} className="btn btn-outline-primary" style={{position: "absolute", marginTop: "1em"}}>
            Заказать
          </Link>
        </div>
      </div>
    </div>
  );
};
