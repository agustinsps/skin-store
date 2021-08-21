import items from '../../Products/items';
import React, {useState, useEffect} from "react";
import ItemDetail from './ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

  const [producto, setProducto] =  useState([])
  const [cargando, setCargando] = useState (true)

useEffect( () => {
const productos = () => {
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
    resolve(items)
  },5000)
})
} 
productos().then((itemss)=>{
    const producto = itemss.find((producto => producto.id = '1'))
  setProducto(producto)
  setCargando(false)
})
}, [])

  return (
          <>
            { cargando ?  <h2>CARGANDO PRODUCTO</h2> :
              <ItemDetail name={producto.name} image={producto.image} description={producto.description}/>
              }
          </>
  )
}

export default ItemDetailContainer;
