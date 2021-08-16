
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
    <div className = 'contenedor'>
      <NavBar/>
      </div>
      <div>
        <ItemDetailContainer/>
        {/*<ItemListContainer h1="Bienvenidos"/>*/}
      </div>
    </>
  );
}

export default App;
