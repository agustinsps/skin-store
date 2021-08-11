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

  export default Item