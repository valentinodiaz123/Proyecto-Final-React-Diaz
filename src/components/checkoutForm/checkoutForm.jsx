import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartContext } from '../../context/cartContext';
import { db } from '../../firebase/client';
import { addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


const CheckoutForm = () => {

  const [datosFormulario, setdatosFormulario] = useState({
    nombreApellido: '', email: '', numeroTelefono: '',
  });

  const { arrayCart, totalCompra, setArrayCart } = useContext(CartContext);

  const [ordenCompraId, setOrdenCompraId] = useState("")

  const orden = {
    buyer: datosFormulario,
    items: arrayCart,
    total: totalCompra
  }

  const crearOrdenCompra = () => {

    if (!datosFormulario.nombreApellido || !datosFormulario.email || !datosFormulario.numeroTelefono) {

      Swal.fire({
        title: "Error",
        text: "Rellena los campos con tus datos",
      });

    } else {
      const referenciaOrden = collection(db, "orden")

      addDoc(referenciaOrden, orden).then(({ id }) => setOrdenCompraId(id))

      setArrayCart([])

    }
  }


  return (
    <div className='form-contenedor'>

      {ordenCompraId ? (
        <div className='contenedor-order'>
          <p>¡Compra exitosa!</p>
          <p>Tu ID de compra es: {ordenCompraId}</p>

          <Link to="/">

            <Button variant="primary">
              Volver al inicio
            </Button>

          </Link>


        </div>
      ) : (

        <Form className='form-user'>

          <Form.Group className="mt-3" controlId="formBasicEmail">
            <Form.Label className='m-2'>Nombre y Apellido</Form.Label>
            <Form.Control type="name" placeholder="Nombre y Apelido"
              onChange={(e) => setdatosFormulario({ ...datosFormulario, nombreApellido: e.target.value })} />

            <Form.Label className='mt-5'>Email </Form.Label>
            <Form.Control type="email" placeholder="Ingresar Gmail"
              onChange={(e) => setdatosFormulario({ ...datosFormulario, email: e.target.value })}
            />

            <Form.Label className='mt-5'>Email </Form.Label>
            <Form.Control type="email" placeholder="Ingresar Gmail nuevamente para confirmarlo"
              onChange={(e) => setdatosFormulario({ ...datosFormulario, email: e.target.value })}
            />

            <Form.Label className='mt-5'>Numero</Form.Label>
            <Form.Control className='mb-5' type="number-phone" placeholder="Ingresar numero telefonico"
              onChange={(e) => setdatosFormulario({ ...datosFormulario, numeroTelefono: e.target.value })}
            />
          </Form.Group>

          <Button onClick={crearOrdenCompra} variant="primary" >
            Enviar
          </Button>

        </Form>

      )}
    </div>
  );
}

export default CheckoutForm