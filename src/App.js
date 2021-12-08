import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className='app'>
    <Router>
    <NavBar />
      <header className="App-header">
        <h1>Bienvenidos a nuestra app oficial</h1>
      </header>
        <Switch>
          <Route exact path='/' component={ItemListContainer}/>
          <Route exact path='/category/:categoryName' component={ItemListContainer}/>
          <Route exact path='/:productId' component={ItemDetailContainer}/>
          <Route exact path='/cart' component={Cart}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
