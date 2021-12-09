import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartProvider  from './context/CartContext';

function App() {
  
  return (
    <CartProvider>
      <div className='app'>
        <Router>
          <NavBar />
          <header className="App-header">
            <h1>Bienvenidos a nuestra app oficial</h1>
          </header>
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
