import { BrowserRouter as Router, useHistory } from "react-router-dom";
import CartWidget from './CartWidget';
import '../styles/navBar.css';


function NavBar() {
  const history = useHistory();
  return (
    <Router>
    <nav className="navbar navbar-light navbar-expand-lg bg-light fixed-top">
    <div className="container-fluid">
      <a onClick={ () => history.push('/')}>
        <CartWidget />
      </a>
      <a className="navbar-brand" onClick={ () => history.push('/')}>HUS</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={ () => history.push('/')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={ () => history.push('/category/electronics')}>Electronica</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={ () => history.push('/category/jewelery')}>Joyeria</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={ () => history.push("/category/men")}>Ropa de Hombre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={ () => history.push("/category/women")}>Ropa de Mujer</a>
            </li>
            <li className="nav-item">
                <i className="fas fa-shopping-cart"></i>
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