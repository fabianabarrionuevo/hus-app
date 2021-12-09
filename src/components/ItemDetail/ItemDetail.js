import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ItemCount from "../Counter/ItemCount";
import './itemDetail.css';
import { CartContext } from "../../context/CartContext";

function ItemDetail({ item }) {
  const {id, title, category, price, image, description } = item;

  const {cart, addItem, inCart, editCount} = useContext(CartContext);

  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const onAdd = () => {
    if(quantityToAdd > 0){
      if(inCart(id)){
        editCount(id, quantityToAdd);
      } else {
        addItem({
        id,
        title,
        category,
        price,
        quantityToAdd
      });
      }
    }
  }


  return (
    
    <div className="card productDetail" >
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body body-detail">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-price">Precio $ {price}</p>
      
        {inCart(id) ?
          <span className="product-added">Producto agregado</span>
         : 
         null
        }
        <ItemCount stock={5} quantityToAdd={quantityToAdd} setQuantityToAdd={setQuantityToAdd} onAdd={onAdd} />
        <NavLink to="/cart">
          <button className="btn btn-primary shop-end" >
            Finalizar compra
          </button>
        </NavLink>
             
      </div>
    </div>
  )
}


export default ItemDetail;