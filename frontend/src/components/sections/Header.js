import React from "react";
import logo from "../../img/header-logo.png";
import { ControlPics } from "../elements/ControlPics";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Bosa Noga" />
            </a>
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <NavLink className="nav-link" exact to="/">
                  Главная
                </NavLink>
                <NavLink className="nav-link" exact to="/catalog">
                  Каталог
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  О магазине
                </NavLink>
                <NavLink className="nav-link" to="/contacts">
                  Контакты
                </NavLink>
              </ul>
              <ControlPics />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
