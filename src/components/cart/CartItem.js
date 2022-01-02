import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './cart.css';

const CartItem = ({id, image, name, quantityToAdd, price}) => {
  
  const { removeItem } = useContext(CartContext);

  return (
    <article key={id} className='item-article'>
      <img src={image} alt={name} className='item-image'/>
        <h3 className='item-name'>{name}</h3>
        <p className='item-quantity'>Cantidad {quantityToAdd}</p>
        <p className='item-price'>$ {price}</p>
      <div className='control-buttons'>
        <button className='delete-item-button' onClick={() => removeItem(id)}>Eliminar <i className="fas fa-trash-alt"></i></button>
      </div>
    </article>
  )
}

export default CartItem;