import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "../../redux/actions/actionCreators";
import { CartForm } from "../elements/CartForm";

export const Cart = () => {
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const buttonHandler = (id, size) => {
    dispatch(deleteCart(id, size));
  };
  const total = carts
    .map((e) => e.price * e.quantity)
    .reduce((acc, item) => (acc += item), 0);
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название</th>
                  <th scope="col">Размер</th>
                  <th scope="col">Кол-во</th>
                  <th scope="col">Стоимость</th>
                  <th scope="col">Итого</th>
                  <th scope="col">Действия</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cart, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>
                      <a href="">{cart.title}</a>
                    </td>
                    <td>{cart.size}</td>
                    <td>{cart.quantity}</td>
                    <td>{cart.price}</td>
                    <td>{cart.price * cart.quantity}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => buttonHandler(cart.id, cart.size)}
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="5" className="text-right">
                    Общая стоимость
                  </td>
                  <td>{total} руб.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <CartForm />
        </div>
      </div>
    </main>
  );
};
