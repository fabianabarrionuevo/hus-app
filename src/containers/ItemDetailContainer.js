import React, { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';


const getItem = (idItem) => {
  return new Promise(res => {
    res( fetch(`https://fakestoreapi.com/products/${idItem}`)
    .then(response => response.json())
    )
  })
}

function ItemDetailContainer() {
  
  const [ itemDetail, setItemDetail ] = useState();
  const [ loading, setLoading ] = useState(false);
  
  useEffect(() => {
    getItem(1)
    .then(res => {
      setItemDetail(res);
      setLoading(true);
    })
    .catch(error => console.log(error))

  }, []);
  
  
  return (
    <div>
      {loading ? <ItemDetail item={itemDetail} /> : 'Cargando'}

    </div>
  )
}


export default ItemDetailContainer;