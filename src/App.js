import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartProvider  from './context/CartContext';
import Baner from './components/baner/Baner';

function App() {
  
  return (
    <CartProvider>
      <div className='app'>
        <Router>
          <NavBar />
          <Baner />
          <Switch>
            <Route exact path='/' component={ItemListContainer}/>
            <Route exact path='/cart' component={Cart}/>
            <Route exact path='/category/:categoryName' component={ItemListContainer}/>
            <Route exact path='/:productId' component={ItemDetailContainer}/>
          </Switch>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
