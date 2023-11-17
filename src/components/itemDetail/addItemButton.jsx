import { useContext, useEffect } from "react"
import { CartContext } from "../../context/cartContext"
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

const AddItemButton = ({ producto }) => {

    const swalFire = () => {
        Swal.fire("Superaste el stock de este producto");
        }

    const swalFireAñadido = () => {
        Swal.fire({
            background: 'grey',
            position: 'center',
            icon: 'success',
            title: 'Producto añadido al carrito',
            showConfirmButton: false,
            timer: 1500
        })
        }

    const swalFireCantidad = () => {
        Swal.fire({
            background: 'grey',
            position: 'center',
            icon: 'success',
            title: 'Se añadio la cantidad en el carrito con exito',
            showConfirmButton: false,
            timer: 1500
        })
        }

    const { arrayCart, setArrayCart } = useContext(CartContext)

    const añadir = () => {

        let esta = arrayCart.some(element => element.id == producto.id)


        if (esta) {

            const carritoActualizado = arrayCart.map((item) => {

                if (item.id === producto.id) {

                    const nuevoItem = { ...item, cantidad: item.cantidad + producto.cantidad };

                    if (nuevoItem.cantidad > producto.stock) {

                        nuevoItem.cantidad = producto.stock

                        swalFire()
                        
                        return nuevoItem;

                    }else{

                        swalFireCantidad()

                        return nuevoItem

                    }

                } else {

                    return item;

                }
            });

            setArrayCart(carritoActualizado);

        } else {

            setArrayCart(arrayCart.concat(producto));

            swalFireAñadido()

        }

    }

    return (
        <button className="btn btn-primary" onClick={añadir}>Añadir al carrito</button>

    )

}
export default AddItemButton