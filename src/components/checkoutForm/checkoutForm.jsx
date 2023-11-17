import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartContext } from '../../context/cartContext';
import { db } from '../../firebase/client';
import { addDoc, collection } from 'firebase/firestore';

const CheckoutForm = () => {

  const [datosFormulario, setFormData] = useState({
    nombreApellido: '', email: '', numeroTelefono: '',
  });

  const { arrayCart, totalCompra } = useContext(CartContext);

  const orden = {
    buyer: datosFormulario,
    items: arrayCart,
    total: totalCompra
  }

  const crearOrdenCompra = () => {
    const referenciaOrden = collection(db, "orden")

    addDoc(referenciaOrden, orden).then(({ id }) => console.log(id))
  }

  return (
    <Form>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control type="name" placeholder="Nombre y Apelido"
          onChange={(e) => setFormData({ ...datosFormulario, nombreApellido: e.target.value })} />

        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Ingresar Gmail"
          onChange={(e) => setFormData({ ...datosFormulario, email: e.target.value })}
        />

        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Ingresar Gmail nuevamente para confirmarlo"
          onChange={(e) => setFormData({ ...datosFormulario, email: e.target.value })}
        />

        <Form.Label>Numero</Form.Label>
        <Form.Control type="number-phone" placeholder="Ingresar numero telefonico"
          onChange={(e) => setFormData({ ...datosFormulario, numeroTelefono: e.target.value })}
        />
      </Form.Group>

      <Button onClick={crearOrdenCompra} variant="primary" >
        Enviar
      </Button>

    </Form>
  );
}

export default CheckoutForm