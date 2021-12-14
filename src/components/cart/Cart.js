import React from 'react';
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './cart.css';

function Cart () {

  const history = useHistory();

  const {cart, removeItem} = useContext(CartContext);
  console.log(cart);

  const totalCart = cart.reduce((total, item) => {
    return total += item.price * item.quantityToAdd; 
  }, 0)

  return (
    <div>
      {cart.length > 0 ?  
      <div>
        <h1>Productos agregados</h1>  
        <section className='item-section'>
          {cart.map(item => {
            return (
              <article key={item.id} className='item-article'>
                <img src={item.image} alt={item.name} className='item-image'/>
                  <h3 className='item-name'>{item.name}</h3>
                  <p className='item-quantity'>Cantidad {item.quantityToAdd}</p>
                  <p className='item-price'>$ {item.price}</p>
                <div className='control-buttons'>
                  <button className='delete-item-button' onClick={() => removeItem(item.id)}>Eliminar <i className="fas fa-trash-alt"></i></button>
                </div>
              </article>
            )
          })}
        </section>
        <section className='total-cart'>
          El total de su compra es $ {totalCart}
        </section>
      </div> :
      <div>
          <h1>No hay productos agregados</h1> 
          <button onClick={ () => history.push("/")} className='go-back-button'>Volver al inicio</button>
      </div>
      }
    </div>
  )
  
}

export default Cart;