import React, { createContext, useState, useEffect } from "react";

 export const CartContext = createContext();

 const CartProvider = ( {children} ) => {

  const [ cart, setCart ] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem('cart');
    if(data !== null){
      setCart(JSON.parse(data));
    } else {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);
 
  const addItem = (item) => {
      setCart([...cart, item]);
  };

  const removeItem = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  }

  const inCart = (id) => {
    return cart.some(item => item.id === id);
  }

  const clearCart = () => {
    setCart([]);
    window.localStorage.clear();
  }

  const editCount = ( id, quantity) => {
    let newCart = cart.map(item => item.id === id ? {...item, quantityToAdd: quantity} : item )
    setCart(newCart)
}

  const totalCart = cart?.reduce((total, item) => {
    return total += item.price * item.quantityToAdd;
  }, 0)

  const itemsInCart = cart.reduce((totalItems, item) => {
    return totalItems += item.quantityToAdd;
  }, 0)

  return (
    <CartContext.Provider value = {{
        cart,
        addItem,
        removeItem,
        inCart,
        clearCart,
        editCount,
        totalCart,
        itemsInCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;