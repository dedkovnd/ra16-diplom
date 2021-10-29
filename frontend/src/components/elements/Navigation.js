import React from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/actionCreators";
import { checkCategory } from "../../redux/actions/actionCreators";

export const Navigation = () => {
  const dispatch = useDispatch();
  const url = 'items?categoryId=';

  const clickHandler =(event, id)=> {
    event.preventDefault()
    dispatch(fetchProducts(`${url} + ${id}`))
    dispatch(checkCategory(id))
  }

  const clickHandlerAll =(event)=> {
    event.preventDefault()
    dispatch(fetchProducts("items"))
    dispatch(checkCategory(null))
  }
 
  return (
    <>
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#" onClick={(event)=>clickHandlerAll(event)}>
            Все
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(event)=>clickHandler(event, 13)}>
            Женская обувь
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(event)=>clickHandler(event, 12)}>
            Мужская обувь
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(event)=>clickHandler(event, 14)}>
            Обувь унисекс
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={(event)=>clickHandler(event, 15)}>
            Детская обувь
          </a>
        </li>
      </ul>
    </>
  );
};
