import React, {useContext} from 'react'
import {Context} from '../../Context/CartContext'



function Cart () {
const {cart} = useContext(Context)
return (
   <>
   {cart?cart.map((item)=> <div>{item.name, item.price}</div>): <div>No hay nada en el carrito!</div>}
   </>
);


}

export default Cart;