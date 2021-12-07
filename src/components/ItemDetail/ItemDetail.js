import { useState } from "react";
import { NavLink } from "react-router-dom";
import ItemCount from "../Counter/ItemCount";
import './itemDetail.css';


function ItemDetail({ item }) {

  const [quantityToAdd, setQuantityToAdd] = useState(0);

  function onAdd(qty){
    setQuantityToAdd(qty);
  }

console.log(quantityToAdd);

  return (
    
    <div className="card productDetail" key={item.id}>
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-price">Precio $ {item.price}</p>
      
        {quantityToAdd ?
        <NavLink to="/cart">
          <button className="btn btn-primary shop-end">
          Finalizar compra
          </button>
        </NavLink>
         : 
        <ItemCount stock={5} initial={0} onAdd={onAdd}/> }
        
      </div>
    </div>
  )
}


export default ItemDetail;