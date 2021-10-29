import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchProducts } from "../../redux/actions/actionCreators";
import { Banner } from "../static/Banner";
import { Search } from "../elements/Search";
import { Navigation } from "../elements/Navigation";
import { ProductCart } from "../products/ProductCart";
import { UploadButton } from "../elements/UploadButton";

export function Catalog() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const pathname = useHistory().location.pathname;

  const [visible, setVisible] = useState(false);

  function checkVisible(pathname) {
    if (pathname.includes("/catalog")) {
      setVisible(true);
    }
  }

  useEffect(() => {
    dispatch(fetchProducts("items"));
    checkVisible(pathname);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            {visible && (
              <Search className={`catalog-search-form form-inline`} />
            )}
            <Navigation />
            <div className="row">
              {products.map((product) => (
                <ProductCart
                  key={product.id}
                  id={product.id}
                  images={product.images[0]}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </div>
            <UploadButton />
          </section>
        </div>
      </div>
    </div>
  );
}
