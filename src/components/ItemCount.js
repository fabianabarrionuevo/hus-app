import React, {useState} from 'react';
function ItemCount({stock, initial, onAdd}) {
  const [countItems, setCountItems] = useState(initial);

  const addItem = (stock) => {
    return countItems + 1 <= stock ? setCountItems(countItems +1) : countItems;
  }

  const substractItem = () => {
    return countItems -1 >= 0 ?setCountItems(countItems - 1) : 0;
  }


  return (
      <div className="card-body">
        <button onClick={substractItem} className="btn btn-primary">-</button>
        <input type="text" id="txt" value={countItems} readOnly style={{width:"8rem", textAlign:"center"}}/>
        <button onClick={() => addItem(stock)} className="btn btn-primary">+</button>
        <button onClick={onAdd} className="btn btn-primary">Agregar al carrito</button>
      </div>
  )
}

export default ItemCount;