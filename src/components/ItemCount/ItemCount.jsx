import React, { useState } from "react";

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
            <button onClick={() => aumenta()}> + </button>
            <button onClick={() => disminuye()}> - </button>
            <div>{userSelected}</div>
            <button onClick={handleOnAddCarrito}>Agregar al Carrito</button>
        </>
    );
}

export default ItemCount;
