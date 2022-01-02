import './item.css';
import { NavLink } from "react-router-dom";

function Item ({ productItem }) {
  return (
    <div className="card productItem" key={productItem.id}>
      <figure className='product-image'>
        <img src={productItem.image} className="card-img-top" alt={productItem.name} />
      </figure>
      <div className="card-body">
        <h5 className="card-title product-title">{productItem.name}</h5>
        <p>Precio $ {productItem.price}</p>
        <NavLink to={`/${productItem.id}`} className="detail-btn">
          Ver producto
        </NavLink>
      </div>
    </div>
  )
}

export default Item;