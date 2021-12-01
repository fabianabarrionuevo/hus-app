import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";

function ItemListContainer (props) {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
    .then(response => response.json())
    .then(data => {
      setProducts(data);
    })
    .catch(err => console.log(err));
  }, []);



  return (
    <>
      <h2>{props.greeting}</h2>
      <div>
        <ItemList products={products}/>
      </div>
     
    </>
  )
}

export default ItemListContainer;