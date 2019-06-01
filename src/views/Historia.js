import React from 'react';
import grupoKasaAut from './../img/grupo-kasa-automotriz.png';
import './../css/App.css';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
    return (
        <div className="App">
            <Header />

            <section>
                <div class="header-int">
                    <div class="img"></div>
                </div>
                <div class="logo-int">
                    <div class="logo-img"><img src={grupoKasaAut} alt="" /></div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h4>Historia</h4>

                    <div className="descripcion">
                        Grupo Kasa Automotriz es uno de los grupos más sólidos y exitosos dentro de las concesionarias automotrices en México. Nuestra amplia experiencia, visión y enfoque nos ha convertido en referente dentro del mercado mexicano durantemás de 40 años.
                        <br />
                        Hemos mantenido un crecimiento continuo que nos ha permitido ser más rentables y competitivos. Contamos con 17 marcas y 23 agencias en el centro del país generando empleos para más de 2000 personas que comparten la visión de calidad y servicio que Grupo Kasa se ha caracterizado por brindar durante todo este tiempo.
                        <br />
                        Nuestra pasión y dedicación en la industria automotriz han logrado hacernos tener un crecimiento importante para colocarnos dentro de los grupos automotrices con mayor tráfico y volumen de ventas en nuestras salas. Nuestro personal altamente capacitado así como nuestra filosofía encausada a mantener una cultura de mejora continua está enfocada principalmente hacia la satisfacción total de nuestros clientes.
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default App;
