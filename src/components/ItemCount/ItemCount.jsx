import React, { useState, useEffect } from "react";
import './ButtonStyles.css'
    
        const ItemCount  = (props, onAdd = ()=>{} ) => {

            const [stock, setStock] = useState(props.stock)
            const [unidades, setUnidades] = useState(0)

            const handleStock = {
                sumaStock: () =>{
        if (stock === 0){
            alert('No hay Stock')
        } else {
            setUnidades(unidades+1)
            setStock(stock-1)
                }
            },
                restaStock:()=> {
                    if(unidades===0){
                        alert('No podes comprar!')
                    } else{
                        setUnidades(unidades-1)
                        setStock(stock+1)
                    }
                },
        }
useEffect(()=>{
}, [])

    return (
        <>
            <button variant="contained" className="buttonCount" onClick={handleStock.sumaStock} disable={stock==='0'}> + </button>
             <p>{unidades}</p>
            <button variant="contained" className="buttonCount" onClick={handleStock.restaStock} disable={stock==='0'}> - </button>
             <p>Stock Disponible: {stock} </p>
        </>
    );
}

export default ItemCount;
