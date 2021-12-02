import ItemCount from "./ItemCount";
import '../styles/itemDetail.css';

function ItemDetail({ item }) {
  
  return (
    
    <div className="card productDetail">
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-price">Price $ {item.price}</p>
        <ItemCount stock={5} initial={1}/>
      </div>
    </div>
  )
}


export default ItemDetail;