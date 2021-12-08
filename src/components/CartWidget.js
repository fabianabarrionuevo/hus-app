import { Link } from 'react-router-dom';

function CartWidget () {

  return(
    <Link to="/cart">
      <i className="fas fa-shopping-cart"></i>
    </Link>
  )
}

export default CartWidget;