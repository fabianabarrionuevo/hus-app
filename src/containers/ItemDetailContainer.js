import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Loader from '../components/Loader/Loader';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from '../firebase/config';

function ItemDetailContainer() {
  
  const [ item, setItem ] = useState();
  const [ loading, setLoading ] = useState(true);
  
  const { productId } = useParams();

  useEffect(() => {

    //1-armar la referencia a mi coleccion o documento
    const docRef = doc(db, 'productos', productId)
    //2-hacer la peticion a esa referencia
    getDoc(docRef)
      .then((doc) => {
        const data = {
          id: doc.id,
          ...doc.data()
        }
        setItem(data);
      })
      .finally(() => {
        setLoading(false)
      })

  }, [productId]);

  return (
    <div>
      {
        loading ?
        <Loader /> : 
        <ItemDetail product={item} /> 
      }
    </div>
  )
}


export default ItemDetailContainer;