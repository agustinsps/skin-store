
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <div className = 'contenedor'>
      <NavBar/>
      </div>
      <div>
        <ItemListContainer h1="Bienvenidos"/>
      </div>
    </>
  );
}

export default App;
