import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartComponenteContext = ({ children }) => {



  const obtenerDatos = () => {

    const datosGuardados = localStorage.getItem('cart');

    return datosGuardados ? JSON.parse(datosGuardados) : [];
    
  };


  
  const [arrayCart, setArrayCart] = useState(obtenerDatos)

  const [cantidades, setCantidades] = useState(1)

  const [totalCompra, setTotalCompra] = useState (0)



  useEffect(() => {

    localStorage.setItem('cart', JSON.stringify(arrayCart))
    actualizarTotal()

  }, [arrayCart]);



  let cartWid = arrayCart.length



  const actualizarTotal = () => {

    let nuevoTotal = 0;

    arrayCart.forEach((element) => {

      nuevoTotal += element.cantidad * element.price;

    });

    setTotalCompra(nuevoTotal);
  };



  return (

    <CartContext.Provider value={{ arrayCart, setArrayCart, cantidades, setCantidades, cartWid, totalCompra, setTotalCompra }}>

      {children}

    </CartContext.Provider>
  )

}

export default CartComponenteContext