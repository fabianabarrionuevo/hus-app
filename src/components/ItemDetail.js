

function ItemDetail({ item }) {
  
  return (
    
    <div className="card" style={{width: "18rem"}} >
      <img src={item.image} className="card-img-top" style={{width: "50%", alignSelf: "center"}} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p>Price $ {item.price}</p>
      </div>
    </div>
  )
}


export default ItemDetail;