import { Link } from 'react-router-dom';
import './cart.css'

function CartWidget () {

  return(
    <Link to="/cart" className="cart-widget">
      <i className="fas fa-shopping-cart">
        <span className="products-qty">1</span>
      </i>
    </Link>
  )
}

export default CartWidget;