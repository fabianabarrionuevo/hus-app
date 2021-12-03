import ItemCount from "../Counter/ItemCount";
import './itemDetail.css';

function ItemDetail({ item }) {
  
  return (
    
    <div className="card productDetail" key={item.id}>
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-price">Precio $ {item.price}</p>
        <ItemCount stock={5} initial={1}/>
      </div>
    </div>
  )
}


export default ItemDetail;