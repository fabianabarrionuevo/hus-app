import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ItemCount from "../Counter/ItemCount";
import './itemDetail.css';
import { CartContext } from "../../context/CartContext";

function ItemDetail({ product }) {

  const { id, name, category, price, image, description, stock } = product;
  const { addItem, inCart, editCount } = useContext(CartContext);
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const onAdd = () => {
    if(quantityToAdd > 0){
      if(inCart(id)){
        editCount(id, quantityToAdd);
      } else {
        addItem({
        id,
        name,
        category,
        price,
        image,
        quantityToAdd
      });
      }
    }
  }

  return (
    
    <div className="card productDetail" >
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body body-detail">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-price">Precio $ {price}</p>
      
        {inCart(id) ?
          <span className="product-added">Producto agregado</span>
         : 
         null
        }
        {
          !inCart(id) ?
          <ItemCount stock={stock} quantityToAdd={quantityToAdd} setQuantityToAdd={setQuantityToAdd} onAdd={onAdd} />  
          :
          <NavLink to="/cart" className="btn-shop-end">
              Finalizar compra
          </NavLink>
        }
             
      </div>
    </div>
  )
}


export default ItemDetail;