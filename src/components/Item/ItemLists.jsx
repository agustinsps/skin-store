import React from "react";
import "./ItemStyle.css";
import Item from "./Item";

function ItemLists() {
  const items = [
    {
      id: 1,
      name: "Ak-47",
      productType: "Fusil de asalto",
      price: 40,
      image: <img src="Images/Ak-47.png" alt="Ak-47" />,
      description:
        "El Avtomat Kalashnikova modelo 1947 o más conocido por el acrónimo AK-47 es un fusil de asalto soviético, de calibre 7,62 mm, diseñado por Mijaíl Kaláshnikov, combatiente soviético durante la Segunda Guerra Mundial. Fue el fusil oficial de la Unión Soviética entre 1951 y 1978.",
    },
    {
      id: 2,
      name: "M4-16",
      productType: "Carabina",
      price: 35,
      image: <img src="Images/M416.png" alt="M416" />,
      description:
        "El HK416 es una carabina diseñada y manufacturada por Heckler & Koch. Es una versión mejorada de la carabina M4, con muchos cambios con respecto a esta, más notablemente su sistema de gases, similar al del HK G36, en calibre 5,56 × 45 mm OTAN. Los clientes de fuerzas militares y policiales pueden comprar la parte de la caja de mecanismos, amortiguador y sistema de gases para reacondicionar fusiles AR-15 o bien comprar el arma completa.",
    },
    {
      id: "3",
      name: "Arctic Warfare",
      price: "18",
    },
  ];

  const ItemList = items.map((item) => (
    <Item
      name={item.name}
      productType={item.productType}
      price={item.price}
      image={item.image}
    />
  ));

  return <>{ItemList}</>;
}

export default ItemLists;
