import { useState, useEffect } from "react";


const ItemQuantitySelector = ({ producto, cambiarCantidades }) => {

  const [numero, setNumero] = useState(1);

  const sumar = () => {
    if (producto && producto.stock > numero) {
      
      setNumero(numero + 1);

      cambiarCantidades(numero + 1);
    }
  };

  const restar = () => {
    if (numero > 1) {
      setNumero(numero - 1);
      cambiarCantidades(numero - 1);
    }
  };

  return (
    <>
      <button className="btn btn-primary m-2" onClick={sumar}>
        +
      </button>

      {numero}

      <button className="btn btn-primary m-2" onClick={restar}>
        -
      </button>
    </>
  );
};

export default ItemQuantitySelector;





