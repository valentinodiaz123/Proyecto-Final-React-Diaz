import Carousel from 'react-bootstrap/Carousel';

const Carrousel = () => {
    return (
        <Carousel className=''>
            <Carousel.Item>
                <img src="https://img.freepik.com/fotos-premium/increible-fotografia-instrumento-guitarra-cuarto-oscuro-generado-ia_692702-30306.jpg" alt="" className='d-block w-100 img-carrousel'/>
                <Carousel.Caption>
                    <h3>Bienvenido a la mejor tienda de instrumentos</h3>
                    <p>Aqui encontraras la mejor calidad a los mejores precios</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://fondosmil.com/fondo/100422.jpg" alt="" className='d-block w-100 img-carrousel'/>
                <Carousel.Caption>
                    <h3>Con mas de 30 años de experiencia</h3>
                    <p>Brindamos el mejor servicio en la ciudad!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='d-block w-100 img-carrousel'/>
                <Carousel.Caption>
                    <h3>Atencion unica</h3>
                    <p>
                        No dudes en acercarte!
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel