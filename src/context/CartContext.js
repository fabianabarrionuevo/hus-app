import React, { createContext, useState } from "react";

 export const CartContext = createContext();

 const CartProvider = ( {children} ) => {

  const [ cart, setCart ] = useState([]);

  const addItem = (item) => {
    // if(inCart(id)){
    // const itemInCart = cart.find(item => item.id === id)
    // }
    // console.log(item);
    setCart([...cart, item]);
  }

  const removeItem = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  }

  const inCart = (id) => {
    return cart.some(item => item.id === id);
  }

  const clearCart = () => {
    setCart([]);
  }

  const editCount = ( id, quantity) => {
    let newCart = cart.map(item => item.id === id ? {...item, quantityToAdd: item.quantityToAdd + quantity} : item )
    setCart(newCart)
}

  console.log(cart);

  return (
    <CartContext.Provider value = {{
        cart,
        addItem,
        removeItem,
        inCart,
        clearCart,
        editCount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;