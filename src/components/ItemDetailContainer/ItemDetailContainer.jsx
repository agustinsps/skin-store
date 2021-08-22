import items from "../../Products/items";
import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [cargando, setCargando] = useState(true);

  const  {id} = useParams()

  useEffect(() => {
    const productos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(items);
        }, 5000);
      });
    };
    productos().then((itemss) => {
      if(id!=null){
      const producto = itemss.find((producto) => (producto.id ==id));
      setProducto(producto);
      setCargando(false);
      } else {
        const producto = itemss.find((producto) => (producto.id ==1));
        setProducto(producto);
        setCargando(false);
      }
    });
  }, [])

  return (
    <>
      {cargando ? (
        <h2>CARGANDO PRODUCTO</h2>
      ) : (
        <ItemDetail
          name={producto.name}
          image={producto.image}
          description={producto.description}
          price={producto.price}
        />
      )}
    </>
  );
};

export default ItemDetailContainer;
