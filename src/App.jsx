
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className = 'contenedor'>
      <NavBar/>
      <ItemListContainer h1="Bienvenidos"/>
    </div>
  );
}

export default App;
