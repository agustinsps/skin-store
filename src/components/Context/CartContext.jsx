import React, { useState } from 'react';


const Context = React.createContext ()

const CartFunction = ({children}) => {
    const [cart, setCart] = useState([])
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState (0)

    const onAdd = (product, cantidad) => {
        const itemIn = cart.find(item => item.id == product.id)
        if (!itemIn){
            setCart([...cart, {id:product.id, name:product.name, price:product.price, cantidad:product.cantidad}])
            setUnidades(unidades+1)
            setTotal(total+(product.price*cantidad))
        }
    }
    return <Context.Provider value= {{cart, unidades, onAdd}}>
                {children}
            </Context.Provider>
}

export {CartFunction, Context}