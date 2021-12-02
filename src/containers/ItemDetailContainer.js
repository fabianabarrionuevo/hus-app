import React, { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from "react-router-dom";
import { getProductsById } from '../services/getItems';
import Loader from '../components/Loader';

function ItemDetailContainer() {
  
  const [ itemDetail, setItemDetail ] = useState();
  const [ loading, setLoading ] = useState(false);
  const { productId } = useParams();
  
  useEffect(() => {
    getProductsById(productId)
    .then(res => {
      setItemDetail(res);
      setLoading(true);
    })
    .catch(error => console.log(error))

  }, [productId]);
  
  
  return (
    <div>
      {loading ? <ItemDetail item={itemDetail} /> : <Loader />}
    </div>
  )
}


export default ItemDetailContainer;