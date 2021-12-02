import Item from "./Item";
import '../styles/itemList.css';

function ItemList({ products }) {
  return (
    
      <div className="item-list-container">
        {products.map(product => (
          <Item productItem ={product} key={product.id}/>
        ))}
      </div>
    
  )
}

export default ItemList;