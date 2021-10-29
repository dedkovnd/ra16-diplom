import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useJsonFetch } from "../../services/useJsonFetch";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/actions/actionCreators";
import { Error } from "../elements/Error";
import defaultImg from "../../img/default-img.png";

export const ProductTarget = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const [select, setSelect] = useState(false);
  const [size, setSize] = useState(null)

  const addHandler = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const deleteHandler = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const sizeClickHandler = (size) => {
    setSelect(!select);
    setSize(size)
  };

  function errorHandler(event) {
    event.target.onerror = null;
    event.target.src = defaultImg;
  }

  const id = useHistory().location.pathname.replace("/catalog/", "");
  const [data, isLoading, error] = useJsonFetch(
    `http://localhost:7070/api/items/${id}`
  );

  let filterSize = [];

  if (data !== null) {
    filterSize = data.sizes.filter((size) => size.avalible === true);
  }

  const buttonClickHandler = () => {
    const dataCart = {
      id: data.id,
      title: data.title,
      price: data.price,
      size: size,
      quantity: counter,
    };
    dispatch(addCart(dataCart))
  };

  return (
    <>
      {error && <Error text={error.message}/>}
      {data !== null && !error && !isLoading && (
        <main className="container">
          <section className="catalog-item">
            <h2 className="text-center">{data.title}</h2>
            <div className="row">
              <div className="col-5">
                <img
                  src={data.images[0]}
                  className="img-fluid"
                  alt={data.title}
                  onError={(e) => {
                    errorHandler(e);
                  }}
                />
              </div>
              <div className="col-7">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Артикул</td>
                      <td>{data.sku}</td>
                    </tr>
                    <tr>
                      <td>Производитель</td>
                      <td>{data.manufacturer}</td>
                    </tr>
                    <tr>
                      <td>Цвет</td>
                      <td>{data.color}</td>
                    </tr>
                    <tr>
                      <td>Материалы</td>
                      <td>{data.material}</td>
                    </tr>
                    <tr>
                      <td>Сезон</td>
                      <td>{data.season}</td>
                    </tr>
                    <tr>
                      <td>Повод</td>
                      <td>{data.reason}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center">
                  <p>
                    Размеры в наличии:
                    {filterSize.map((e, i) => (
                      <span
                        key={i}
                        className={`catalog-item-size ${select && `selected`}`}
                        onClick={() => sizeClickHandler(e.size)}
                        style={{"cursor" : "pointer"}}
                      >
                        {e.size}
                      </span>
                    ))}
                  </p>
                  <p>
                    Количество:
                    <span className="btn-group btn-group-sm pl-2">
                      <button
                        className="btn btn-secondary"
                        onClick={deleteHandler}
                      >
                        -
                      </button>
                      <span className="btn btn-outline-primary">{counter}</span>
                      <button
                        className="btn btn-secondary"
                        onClick={addHandler}
                      >
                        +
                      </button>
                    </span>
                  </p>
                </div>
                {select &&
                <Link
                  to="/cart"
                  className="btn btn-danger btn-block btn-lg"
                  onClick={buttonClickHandler}
                >
                  В корзину
                </Link>}
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};
