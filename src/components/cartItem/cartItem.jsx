import { Link } from "react-router-dom"
import ItemQuantitySelector from "../itemDetail/itemQuantitySelector";
 import { CartContext } from "../../context/cartContext"
 import { useContext } from "react"
 
ItemQuantitySelector

const CartItem = ({ productos }) => {

    const { arrayCart, setArrayCart } = useContext(CartContext)

    const borrar = () => {

        const indexProducto = arrayCart.findIndex (item => item.id === productos.id);

        const array = [...arrayCart]

        array.splice(indexProducto, 1)

        setArrayCart(array)

    }

        return (
        <>
            <div className="items-cart">

                <img className="image-item-list"src={productos && productos.image}alt=""/>

                <div className="text-item-list">

                    <h1 className="card-title">{productos && productos.tittle}</h1>
                    <p className="card-price">Precio por unidad: ${productos && productos.price}</p>
                    <p className="card-price">Cantidad:  {productos && productos.cantidad}</p>

                    <button className="btn btn-danger" onClick={borrar}>Eliminar producto</button>

                </div>

            </div>
        </>
    );
};

export default CartItem