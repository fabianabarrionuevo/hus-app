import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import NavBar from './components/NavBar/NavBar';
import Baner from './components/Baner/Baner';
import Footer from './components/Footer/Footer';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider  from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

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
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/category/:categoryName' component={ItemListContainer}/>
            <Route exact path='/:productId' component={ItemDetailContainer}/>
          </Switch>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
