import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from "./components/sections/Header";
import { Footer } from "./components/sections/Footer";
import { Main } from "./components/Main";
import { Catalog } from "./components/sections/Catalog";
import { About } from "./components/static/About";
import { Contacts } from "./components/static/Contacts";
import { ProductTarget } from "./components/products/ProductTarget";
import { Cart } from "./components/products/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/catalog/:id" component={ProductTarget} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
