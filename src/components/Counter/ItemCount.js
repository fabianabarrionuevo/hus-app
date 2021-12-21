import './counter.css';

function ItemCount({stock, quantityToAdd, onAdd, setQuantityToAdd}) {
 
  const addItem = (stock) => {
    return quantityToAdd + 1 <= stock ? setQuantityToAdd(quantityToAdd +1) : quantityToAdd;
  }

  const substractItem = () => {
    return quantityToAdd -1 >= 0 ? setQuantityToAdd(quantityToAdd - 1) : 0;
  }

  return (
      <div className="card-body counter">
        <div className='counter-container'>
          <button onClick={substractItem} className="counter-btn">-</button>
          <input className='counter-input' type="text" id="txt" value={quantityToAdd} readOnly />
          <button onClick={() => addItem(stock)} className="counter-btn">+</button>
        </div>
        <button onClick={onAdd} className="counter-btn">Agregar al carrito</button>
      </div>
  )
}

export default ItemCount;