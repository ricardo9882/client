import React from 'react';
import './../css/App.css';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

import logoChevrolet from './../img/chevrolet-logo.png';
import iconPointer from './../img/icon-pointer.svg';
import iconPhone from './../img/icon-phone.svg';
import iconWhatsapp from './../img/icon-whatsapp.svg';
import imgMapa from './../img/img-mapa.jpg';

function App() {
    return (
        <div className="App">
            <Header />

            <section>
                <div class="header-int">
                    <div class="img"></div>
                </div>
                <div class="logo-int">
                    <div class="logo-img"><img src={logoChevrolet} alt="" /></div>
                </div>
            </section>

            <section className="block">
                <div className="container">
                    <h4>Agencia</h4>
                    <p>Chevrolet Coacalco</p>

                    <div className="datos-agencia">
                        <div className="col">
                            <div className="list-datos-agencia">
                                <div className="item">
                                    <div className="icon">
                                        <img src={iconPointer} alt="" />
                                    </div>
                                    <div className="txt">
                                        <article>Dirección</article>
                                        Blvd.Manuel Ávila Camacho 726,Col. El Mirador,Naucalpan,Edo. de Méx.53050.
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon">
                                        <img src={iconPhone} alt="" />
                                    </div>
                                    <div className="txt">
                                        <article>Teléfono</article>
                                        5371-1500
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="icon">
                                        <img src={iconWhatsapp} alt="" />
                                    </div>
                                    <div className="txt">
                                        <article>Whatsapp</article>
                                        6317-2325
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="mapa-sucursal">
                                <img src={imgMapa} alt="mapa" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default App;