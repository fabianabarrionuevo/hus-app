import '../ItemList/itemList.css';
import { NavLink } from "react-router-dom";

function Item ({ productItem }) {
  return (
    <div className="card productItem" key={productItem.id}>
      <img src={productItem.image} className="card-img-top" alt={productItem.title} />
      <div className="card-body">
        <h5 className="card-title product-title">{productItem.title}</h5>
        <p>Precio $ {productItem.price}</p>
        <NavLink to={`/${productItem.id}`} className="itemLink">
          <button className="btn btn-primary">Detalle</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Item;