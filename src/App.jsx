import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <>
    <BrowserRouter>
        <div className="contenedor">
          <NavBar />
        </div>
        <div>
          <Switch>
            <Route path="/" exact>
              <ItemListContainer h1="Bienvenidos" />
            </Route>
            <Route path="/:productType/:id" exact>
              <ItemDetailContainer titulo= "Novedades" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
