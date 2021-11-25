import './styles/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>Bienvenidos a nuestra app oficial</h1>
      </header>
      <main>
       <ItemListContainer greeting="Nuestro catálogo"/>
      </main>
    </div>
  );
}

export default App;
