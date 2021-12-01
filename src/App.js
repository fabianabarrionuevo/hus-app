import './styles/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';


function App() {
  
  return (

    <div className="App">
       <NavBar />
      <header className="App-header">
        <h1>Bienvenidos a nuestra app oficial</h1>
      </header>
      <main>
       <ItemListContainer greeting="Nuestro catálogo"/>
       <ItemDetailContainer />
      </main>
    </div>
   
  );
}

export default App;
