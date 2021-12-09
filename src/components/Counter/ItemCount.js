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
        <button onClick={substractItem} className="btn btn-primary">-</button>
        <input type="text" id="txt" value={quantityToAdd} readOnly />
        <button onClick={() => addItem(stock)} className="btn btn-primary">+</button>
        <button onClick={onAdd} className="btn btn-primary">Agregar al carrito</button>
      </div>
  )
}

export default ItemCount;