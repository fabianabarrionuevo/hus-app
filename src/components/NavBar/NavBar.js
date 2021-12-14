import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Logo from '../Logo/Logo'
import CartWidget from "../CartWidget/CartWidget";
import './navBar.css';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


function NavBar() {
  const history = useHistory();
  const { cart } = useContext(CartContext);

  return (
    <Router>
    <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid">
      <div onClick={ () => history.push('/')} >
        <Logo />
      </div>
      <h1 className="navbar-brand" onClick={ () => history.push('/')}>CakeStore</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
        <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">CakeStore</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item" onClick={ () => history.push('/')}>
              Home
            </li>
            <li className="nav-item" onClick={ () => history.push('/category/tortas')}>
              Tortas
            </li>
            <li className="nav-item" onClick={ () => history.push('/category/boxes')}>
              Combos y desayunos
            </li>
            <li className="nav-item" onClick={ () => history.push("/category/mini-cakes")}>
              Mini cakes
            </li>
            {
              cart.length > 0 ?
            <li className="nav-item" onClick={ () => history.push("/cart")}>
                <CartWidget />
            </li>
            :
            <li className="nav-item">
            </li>

            }
          </ul>
        </div>
      </div>
    </div>
  </nav>
    </Router>
  )
}

export default NavBar;