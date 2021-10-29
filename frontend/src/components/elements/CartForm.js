import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { postCartFetch } from "../../services/posrCartFetch";

export const CartForm = () => {
  const carts = useSelector((state) => state.carts).map((item) => {
    return { id: item.id, price: item.price, count: item.quantity };
  });

  const [form, setForm] = useState({
    phone: "",
    address: "",
    agreement: false,
  });

  const data = {
    owner: {
      phone: form.phone,
      address: form.address,
    },
    items: carts,
  };

  const changeHandler = ({ target }) => {
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    if (form.agreement === true) {
      postCartFetch(data);
    }
  };

  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card" style={{ maxWidth: "30rem", margin: "0 auto" }}>
        <form className="card-body" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              className="form-control"
              id="phone"
              name="phone"
              type="tel"
              placeholder="Ваш телефон"
              onChange={changeHandler}
              value={form.phone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input
              className="form-control"
              id="address"
              name="address"
              placeholder="Адрес доставки"
              onChange={changeHandler}
              value={form.address}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreement"
              name="agreement"
              checked={form.agreement}
              onChange={changeHandler}
            />
            <label className="form-check-label" htmlFor="agreement">
              Согласен с правилами доставки
            </label>
          </div>
          <button type="submit" className="btn btn-outline-secondary">
            Оформить
          </button>
        </form>
      </div>
    </section>
  );
};
