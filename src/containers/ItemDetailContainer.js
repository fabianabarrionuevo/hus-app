import React, { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { getProductsById } from '../services/getItems';
import Loader from '../components/Loader/Loader';

function ItemDetailContainer() {
  
  const [ item, setItem ] = useState();
  const [ loading, setLoading ] = useState(false);
  const { productId } = useParams();
 

  useEffect(() => {
    getProductsById(productId)
    .then(res => {
      setItem(res);
      setLoading(true);
    })
    .catch(error => console.log(error))

  }, []);
 
  
  return (
    <div>
      {loading ? <ItemDetail item={item} /> : <Loader />}
    </div>
  )
}


export default ItemDetailContainer;