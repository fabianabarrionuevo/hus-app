import React from 'react';
import { NavLink } from 'react-router-dom';
import './checkout.css';
import { useForm } from '../../hooks/useForm';

const initialForm = {
  name: "",
  email: "",
  tel: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,}$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexTel = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

  if (!form.name.trim()) {
    errors.name = "El campo Nombre es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo Nombre sólo acepta letras. Debe contener al menos 4 carácteres";
  }

  if (!form.email.trim()) {
    errors.email = "El campo Email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo Email es incorrecto";
  }

  if (!form.tel.trim()) {
    errors.tel = "El campo Teléfono es requerido";
  } else if (!regexTel.test(form.tel.trim())) {
    errors.tel = "El campo Teléfono es incorrecto";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
  textAlign: "left",
};

const Checkout = () => {
  
  const {
    form,
    errors,
    orderID,
    handleChange,
    handleBlur,
    handleSubmit
   } = useForm(initialForm, validationsForm);


  return (

    <div className='checkout-container'>

      {
        orderID ?
        <>
          <h2>Tu compra fue registrada con exito!</h2>
          <p>Numero de orden: {orderID}</p>
          <NavLink to='/' className='go-back-button'>Volver al inicio</NavLink>
        </> 
        :
        <>
          <h2 className='checkout-title'>Checkout</h2>
          <form  className='checkout-form'>
            <div className="form-floating">
              <input 
                type="text" 
                className="form-control" 
                id="floatingName" 
                placeholder="Ingresa tu nombre"
                name='name'
                onBlur={handleBlur}
                onChange={handleChange}  
                value={form.name}
                required
              />
              <label htmlFor="floatingName">Nombre</label>
              {errors.name && <p style={styles}>{errors.name}</p>}
            </div>

            <div className="form-floating mb-3">
              <input 
                type="email" 
                className="form-control" 
                id="floatingInput" 
                placeholder="nombre@ejemplo.com"
                name='email'
                onBlur={handleBlur}
                onChange={handleChange} 
                value={form.email}
                required
              />
              <label htmlFor="floatingInput">Email</label>
              {errors.email && <p style={styles}>{errors.email}</p>}
            </div>
            <div className="form-floating">
              <input 
                type="tel" 
                className="form-control" 
                id="floatingTel" 
                placeholder="Ingresa tu telefono" 
                name='tel'
                onBlur={handleBlur}
                onChange={handleChange} 
                value={form.tel}
                required
              />
              <label htmlFor="floatingTel">Teléfono</label>
              {errors.tel && <p style={styles}>{errors.tel}</p>}
            </div>
          
            <button type='button' className="btn btn-primary send" onClick={handleSubmit}>Enviar</button>
          </form>
        </>
      }
    </div>
  )
}

export default Checkout;