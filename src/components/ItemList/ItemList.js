import Item from "../Item/Item";
import './itemList.css';

function ItemList({ products }) {
  return (
    
      <div className="item-list-container" >
        {products.map(product => (
          <div key={product.id}>
          <Item productItem ={product} />
          </div>
        ))}
      </div>
    
  )
}

export default ItemList;