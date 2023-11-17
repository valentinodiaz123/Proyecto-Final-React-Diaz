import { Link } from "react-router-dom"
// import { CartContext } from "../../context/cartContext"
// import { useContext } from "react"

const Item = ({ productos }) => {
        return (
        <>
            <div className="contenedor-item-list">
                <img
                    className="image-item-list"
                    src={productos && productos.image}
                    alt=""
                />

                <div className="text-item-list">
                    <h1 className="card-title">{productos && productos.tittle}</h1>
                    <p className="card-price">$ {productos && productos.price}</p>
                </div>

                <button className="btn btn-primary m-3">

                    <Link
                        className="text-light text-decoration-none"
                        to={`/item/${productos && productos.id}`}
                    >
                        Ver Mas
                    </Link>
                </button>
            </div>
        </>
    );
};

export default Item