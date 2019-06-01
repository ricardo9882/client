import React from 'react';
import './../css/App.css';

import {Link} from 'react-router-dom';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

import logoChevrolet from './../img/chevrolet-logo.png';

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
                    <h4>Chevrolet</h4>

                    <div className="descripcion">
                        En 1911, el mundo vio nacer a Chevrolet a través de Chevrolet Motor Company, otro esfuerzo de William C. Durant, -fundador de General Motors-, aumentando el rango de vehículos pioneros. Ese mismo año, el primer vehículo de Chevrolet fue creado en la ciudad de Detroit. El primer diseño de Chevrolet fue concebido por Joseph Louis Chevrolet, que hasta ese momento era conocido como un piloto de carreras. Desde entonces, su nombre y su creación marcaron la industria automotriz para siempre.
                        <br /><br />

                        En 1935 la división de General Motors Overseas Operations(GMOO) determinó el tipo de operaciones idóneas para satisfacer la creciente demanda del mercado mexicano y anunció la construcción de una planta armadora de camiones en la Ciudad de México. El 23 de septiembre del mismo año fue constituida legalmente la compañía General Motors de México S.A. 
                        <br /><br />

                        Noventa días después de la inauguración, el 18 de enero de 1937, salió de la línea de ensamble el primer camión Chevrolet armado en México.
                        <br /><br />

                        En el año de 2013, Grupo Kasa Automotriz adquiere la concesión de Chevrolet Valle Dorado y Chevrolet Coacalco, siendo las dos agencias de la misma marca en el grupo.
                    </div>

                    <section className="block grid-marcasagencias">
                        <div className="container">
                            <h4><span>Nuestras agencias</span></h4>

                            <div className="grid">
                                <div className="item">
                                    <Link to="/marca-agencia">
                                        <span>Chevrolet</span>
                                        <span>Coacalco</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="/marca-agencia">
                                        <span>Chevrolet</span>
                                        <span>Tlalnepantla</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="/marca-agencia">
                                        <span>Chevrolet</span>
                                        <span>Valle Dorado</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </section>

            <Footer />
        </div>
    );
}

export default App;