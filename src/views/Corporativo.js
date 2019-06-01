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
                    <h4>Corporativo</h4>

                    <div className="descripcion">
                        Nuestra <strong>Misión</strong> es la búsqueda permanente de la satisfacción de nuestros clientes internos y externos a través de la mejora continua de nuestros procesos y con el compromiso de nuestro equipo de trabajo para que la experiencia de nuestros clientes sea de excelencia y así generemos un sentimiento de fidelidad a Grupo Kasa Automotriz.
                        <br /><br />
                        
                        Nuestra <strong>Visión</strong> es mantenernos como una empresa líder en el mercado automotriz, ofreciendo servicios de la más alta calidad.
                        <br /><br/>

                        Nuestros <strong>Valores</strong>:
                        <ul>
                            <li><strong>Respeto</strong>: Tratamos a nuestros clientes y compañeros dándoles el valor y el lugar que se merecen.</li>
                            <li><strong>Lealtad</strong>: Es una virtud que desarrollamos a conciencia y que implica cumplir nuestros compromisos, aun frente a circunstancias adversas.</li>
                            <li><strong>Servicio</strong>: Es un cúmulo de tareas desarrolladaspara satisfacer las exigencias de nuestros clientes</li>
                            <li><strong>Compromiso</strong>: Cumplimos con nuestras tareas de forma planificada y estamos preparados para cumplir de manera satisfactoria con todos nuestros objetivos.</li>
                            <li><strong>Honestidad</strong>: Constituye la calidad humana que manejamos en Grupo Kasa Automotriz, como uno de nuestros valores principales</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default App;
