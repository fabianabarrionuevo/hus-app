import ItemCount from "./ItemCount";

function Item ({ productItem }) {
  return (
    <div className="card" style={{width: "18rem"}} >
      <img src={productItem.image} className="card-img-top" style={{width: "50%", alignSelf: "center"}} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{productItem.title}</h5>
        <p>Price $ {productItem.price}</p>
        <button className="btn btn-primary">Detalle</button>
      </div>
      <ItemCount stock={5} initial={1}/>
    </div>
  )
}


export default Item;