import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import Loader from "../components/Loader/Loader";
import '../styles/App.css';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase/config';


function ItemListContainer () {

  const [ products, setProducts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const { categoryName } = useParams();

  useEffect( () => {
    setLoading(true);
    
    //1-armar la referencia a mi coleccion o documento
    const productsRef = collection(db, 'productos');

    //2-hacer la peticion a esa referencia
    getDocs(productsRef)
    .then( (resp) => {
      const items = resp.docs.map((doc) => ({
        id: doc.id, 
        ...doc.data()
      }))
      if(categoryName){
       const itemsByCategory = items.filter(item => item.category === categoryName)
       setProducts(itemsByCategory);
      } else {
        setProducts(items);
      }
     
    })
    .finally(() => {
      setLoading(false)
    })

  }, [categoryName]);

  return (
    <>
      <div className="listContainer">
        {loading ? 
        <Loader />
        :
        <ItemList products={products}/>
        }
      </div>
     
    </>
  )
}

export default ItemListContainer;