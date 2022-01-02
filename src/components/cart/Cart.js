import React from 'react';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './cart.css';
import CartItem from './CartItem';

function Cart () {

  const {cart, clearCart, totalCart} = useContext(CartContext);

  return (
    <div>
      {cart?.length > 0 ?  
      <div className='cart-container'>
        <h2>Productos agregados</h2>
        <section className='item-section'>
          {
          cart.map(item => <CartItem key={item.id} {...item} /> )
          }
        </section>
        <section className='total-cart'>
          <h3>El total de su compra es $ {totalCart}</h3>
          <button className='button-cart clear' onClick={clearCart}>Vaciar Carrito</button>
          <NavLink to='/checkout' className='button-cart end'>Finalizar compra</NavLink>
        </section>
      </div> :

      <div className='cart-container'>
          <h2>No hay productos agregados</h2> 
          <NavLink to='/' className='go-back-button'>Volver al inicio</NavLink>
      </div>
      }
    </div>
  )
  
}

export default Cart;