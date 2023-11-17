import ItemQuantitySelector from "./itemQuantitySelector"
import AddItemButton from "./addItemButton"
import { useState } from "react";


const ItemDetail = ({ producto }) => {

    const [cantidad, setCantidad] = useState(1);

    const cambiarCantidades = (nuevaCantidad) => {

        setCantidad(nuevaCantidad);

      };

    return (

        <div className="contenedor-item-d">

            <img className="imagen-item-d" src={producto && producto.image} alt="" />
            
            <section className="texto-item-d">

                <h1>{producto && producto.title}</h1>
                <h2>{producto && "Precio: $" + producto.price}</h2>
                <h3>{producto && producto.description}</h3>
                <h3>{producto && "Stock: " + producto.stock}</h3>

                <ItemQuantitySelector producto={producto} cambiarCantidades={cambiarCantidades} />

                <AddItemButton producto={{ ...producto, cantidad }} />

            </section>
            
        </div>
    )

}
export default ItemDetail