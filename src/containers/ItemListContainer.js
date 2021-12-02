import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import Loader from "../components/Loader/Loader";
import { getProductsByCatergory, getProducts } from "../services/getItems";
import '../styles/App.css';

function ItemListContainer (props) {

  const [ products, setProducts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const { categoryName } = useParams();
  console.log(categoryName)

  useEffect( () => {
   ( async () => {
     if(categoryName !== undefined){
       const products = await getProductsByCatergory(categoryName);
       setLoading(true);
       setProducts(products);
     } else {
       const products = await getProducts();
       setLoading(true);
       setProducts(products);
       
     }
   })()

  }, [categoryName]);

console.log(products);

  return (
    <>
      <h2>{props.greeting}</h2>
      <div className="listContainer">
        {loading ?
        <ItemList products={products}/>
        : 
        <Loader />
        }
      </div>
     
    </>
  )
}

export default ItemListContainer;