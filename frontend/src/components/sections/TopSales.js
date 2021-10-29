import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSales } from "../../redux/actions/actionCreators";
import { ProductCart } from "../products/ProductCart";
import { Preloader} from "../elements/Preloader";

export function TopSales() {
  const dispatch = useDispatch();
  const topSales = useSelector((state) => state.sales.data);
  const loading = useSelector((state) => state.sales.loading);
  const error = useSelector((state) => state.sales.error)

  useEffect(() => {
    dispatch(fetchSales());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            {!loading && <Preloader />}
            {loading && (
              <div className="row">
                {topSales.map((topItem) => (
                  <ProductCart
                    key={topItem.id}
                    id={topItem.id}
                    images={topItem.images[0]}
                    title={topItem.title}
                    price={topItem.price}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
