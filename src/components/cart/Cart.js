import React from 'react';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import './cart.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Cart () {

  const {cart, removeItem, clearCart, totalCart} = useContext(CartContext);
  console.log(cart);


  return (
    <div className='cart-container'>
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
          <h3>El total de su compra es $ {totalCart}</h3>
          <button className='button-cart clear' onClick={clearCart}>Vaciar Carrito</button>
          <Link to='/checkout' className='button-cart end'>Finalizar compra</Link>
        </section>
      </div> :

      <div>
          <h1>No hay productos agregados</h1> 
          <NavLink to='/' className='go-back-button'>Volver al inicio</NavLink>
      </div>
      }
    </div>
  )
  
}

export default Cart;