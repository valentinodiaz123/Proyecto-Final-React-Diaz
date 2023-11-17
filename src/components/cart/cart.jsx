import React, { memo } from 'react';
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Item from '../item/item';
import CartItem from '../cartItem/cartItem';
import Button from 'react-bootstrap/Button';


const Cart = () => {

    const { arrayCart, totalCompra, setArrayCart } = useContext(CartContext);

    const vaciarCarrito = () => {
        setArrayCart([])
    }

    return (
        arrayCart.length > 0 ? (

            <><div className='contenedor-cart-principal'>

                <div className="contenedor-cart">
                    {arrayCart.map((producto, index) => (
                        <CartItem key={index} productos={producto} />
                    ))}
                </div>

                <div className='texto-compra'>
                        <p className='p-compra'>
                            Gasto total: ${totalCompra}
                        </p>

                        <Link to="/form">
                            <Button variant="primary">
                                Finalizar Compra
                            </Button>
                        </Link>

                
                            <Button className="mt-2 btn btn-danger" onClick={vaciarCarrito} variant="primary">
                                Vaciar carrito
                            </Button>
                    </div>

            </div>



            </>
        ) : (
            <p className="contenedor load">No hay productos en el carrito para mostrar</p>
        )

    )
}

export default Cart;