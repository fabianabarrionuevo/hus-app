import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
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
        </Switch>
    </Router>
    </div>
  );
}

export default App;
