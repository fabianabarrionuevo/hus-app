import { useState, useContext } from "react";
import { CartContext } from '../context/CartContext';
import { db } from '../firebase/config';
import { collection, addDoc, Timestamp, query, where, getDocs, writeBatch, documentId } from 'firebase/firestore/lite';

export const useForm = (initialForm, validateForm) => {
  const { cart, totalCart, clearCart } = useContext(CartContext);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [orderID, setOrderID] = useState(null);

  const handleChange = (e) => {
    const { name, value} = e.target
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleBlur = (e) =>{
    handleChange(e);
    setErrors(validateForm(form))
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setErrors(validateForm(form))
    
    if(Object.keys(errors).length === 0){
      const order = {
        buyer: form,
        items: cart,
        total: totalCart,
        date: Timestamp.fromDate(new Date())
      }
      
      const batch = writeBatch(db)
      const ordersRef = collection(db, "orders");
      const productsRef = collection(db, "productos");
      const q = query(productsRef, where(documentId(), 'in', cart.map(elem => elem.id)));

      const outOfStock = [];
      
      getDocs(q)
      .then((response) => {
        response.docs.forEach((doc) => {
          const itemInCart = cart.find((item) => item.id === doc.id)

          if(doc.data().stock >= itemInCart.quantityToAdd){
            batch.update(doc.ref, {
              stock: doc.data().stock - itemInCart.quantityToAdd
            })
          } else {
            outOfStock.push(itemInCart);
          }
        })
        if(outOfStock.length === 0){
          addDoc(ordersRef, order)
          .then((response) => {
            batch.commit();
            setOrderID(response.id)
            clearCart();
          })
         
        } else {
          console.log(outOfStock);
        }
      })
     
      
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    orderID,
    handleChange,
    handleBlur,
    handleSubmit
  };
}
