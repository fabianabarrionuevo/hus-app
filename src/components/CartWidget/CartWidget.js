import './cartWidget.css';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";


function CartWidget () {

  const {itemsInCart} = useContext(CartContext);

  return(
    <Link to="/cart" className="cart-widget">
      <i className="fas fa-shopping-cart">
      {itemsInCart > 0 && <span className="products-qty">{itemsInCart}</span>}
      </i>
    </Link>
  )
}

export default CartWidget;