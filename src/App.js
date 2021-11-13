import './styles/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>Bienvenidos a nuestra app oficial</h1>
      </header>
      <main>
       <ItemListContainer greeting="Próximamente todo nuestro catálogo"/>
      </main>
    </div>
  );
}

export default App;
