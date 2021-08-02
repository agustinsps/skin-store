
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className = 'contenedor'>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
