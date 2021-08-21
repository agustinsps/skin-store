import items from "../../Products/items";
import Item from "./Item/Item";
import React, { useState, useEffect } from "react";
import CircularIndeterminate from "./CircularIndeterminate";

const ItemLists = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const productos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(items);
        }, 2000);
      });
    };
    productos().then((itemss) => {
      setProductos(itemss);
      setCargando(false);
    });
  }, []);

  return (
    <>
      {cargando ? (
        <CircularIndeterminate />
      ) : (
        productos.map((producto) => (
          <Item
            id={producto.id}
            name={producto.name}
            productType={producto.productType}
            price={producto.price}
            image={producto.image}
            desc={producto.description}
            stock={producto.stock}
          />
        ))
      )}
    </>
  );
};

export default ItemLists;
