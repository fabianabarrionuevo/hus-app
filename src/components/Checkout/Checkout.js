import React, { useContext, useState } from 'react';
import './checkout.css';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore/lite';
import { Link } from 'react-router-dom';

const Checkout = () => {

  const { cart, totalCart, clearCart } = useContext(CartContext);
  const [orderID, setOrderID] = useState(null);
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    tel:""
  })


  const hanleInputChange = (e) => {
   setBuyer({
     ...buyer,
     [e.target.name]: e.target.value
   })
  }

  const handleSend = (e) => {
    e.preventDefault();
    
    const order = {
      buyer: buyer,
      items: cart,
      total: totalCart,
      date: Timestamp.fromDate(new Date())
    }

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order)
      .then((response) => {
        setOrderID(response.id)
        clearCart();
      })

  }

  return (

    <div className='checkout-container'>

      {
        orderID ?
        <>
          <h2>Tu compra fue registrada con exito!</h2>
          <p>Numero de orden: {orderID}</p>
          <Link to='/' className='go-back-button'>Volver al inicio</Link>
        </> 
        :
        <>
          <h2 className='checkout-title'>Checkout</h2>
          <form  className='checkout-form'>
            <div className="form-floating">
              <input 
              type="text" 
              className="form-control" 
              id="floatingName" 
              placeholder="Ingresa tu nombre"
              name='name'
              onChange={hanleInputChange}  
              value={buyer.name} 
              />
              <label htmlFor="floatingName">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input 
              type="email" 
              className="form-control" 
              id="floatingInput" 
              placeholder="nombre@ejemplo.com"
              name='email'
              onChange={hanleInputChange} 
              value={buyer.email}
              />
              <label htmlFor="floatingInput">Email</label>

            </div>
            <div className="form-floating">
              <input 
              type="tel" 
              className="form-control" 
              id="floatingTel" 
              placeholder="Ingresa tu telefono" 
              name='tel'
              onChange={hanleInputChange} 
              value={buyer.tel}
              />
              <label htmlFor="floatingTel">Teléfono</label>
            </div>
          
            <button type='button' className="btn btn-primary send" onClick={handleSend}>Enviar</button>
          </form>
        </>
      }


    
    </div>
  )
}

export default Checkout;