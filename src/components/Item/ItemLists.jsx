import React from "react";
import "./ItemStyle.css";

function Item({name, price}) {
  return (
      <div className="styleCard">
          <div>{name}</div>
          <div>{price}</div>
      </div>
  );
}

function ItemLists() {
  const items = [
    {
      id: "1",
      name: "AK-47",
      price: "11",
    },
    {
      id: "2",
      name: "HK416",
      price: "14",
    },
    {
      id: "3",
      name: "Arctic Warfare",
      price: "18",
    }
  ]

const ItemList = items.map (item => <Item name={item.name} price={item.price}/>)

  return (
    <>
      {ItemList}
    </>
  );
}

export default ItemLists;
