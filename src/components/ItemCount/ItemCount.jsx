import React, { useState } from "react";
import './ButtonStyles.css'


function ItemCount({ stock = 5, initial = 0, onAdd = () => {} }) {
    const [userSelected, setUserSelected] = useState(initial)
   
const aumenta = () => {
    if (userSelected < stock) setUserSelected (userSelected+1)
}

const disminuye = () => {
   if (userSelected > 0) setUserSelected (userSelected-1)
}

const handleOnAddCarrito = (event) => {
               if (userSelected > 0) onAdd(event)
}

    return (
        <>
            <button variant="contained" className="buttonCount" onClick={() => aumenta()}> + </button>
            <button variant="contained" className="buttonCount" onClick={() => disminuye()}> - </button>
            <div >{userSelected}</div>
            <button onClick={handleOnAddCarrito}>Agregar al Carrito</button>
        </>
    );
}

export default ItemCount;
