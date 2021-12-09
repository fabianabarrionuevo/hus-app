import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Logo from '../Logo/Logo'
import CartWidget from "../Cart/CartWidget";
import './navBar.css';


function NavBar() {
  const history = useHistory();
  return (
    <Router>
    <nav className="navbar navbar-light navbar-expand-lg bg-light fixed-top">
    <div className="container-fluid">
      <div onClick={ () => history.push('/')} >
        <Logo />
      </div>
      <div className="navbar-brand" onClick={ () => history.push('/')}>HUS</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item" onClick={ () => history.push('/')}>
              Home
            </li>
            <li className="nav-item" onClick={ () => history.push('/category/electronics')}>
              Electronica
            </li>
            <li className="nav-item" onClick={ () => history.push('/category/jewelery')}>
              Joyeria
            </li>
            <li className="nav-item" onClick={ () => history.push("/category/men")}>
              Ropa de Hombre
            </li>
            <li className="nav-item" onClick={ () => history.push("/category/women")}>
             Ropa de Mujer
            </li>
            <li className="nav-item">
                <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
    </Router>
  )
}

export default NavBar;