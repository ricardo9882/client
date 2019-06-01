import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import logoAcura from './../img/acura-logo.png';
import logoDodge from './../img/dodge-logo.png';
import logoChevrolet from './../img/chevrolet-logo.png';
import logoHonda from './../img/honda-logo.png';
import logoMitsubishi from './../img/mitsubishi-logo.png';

class NuestrasMarcas extends Component {
    render() {
        return (
            <div>

                <section className="block grid-marcasagencias">
                    <div className="container">
                        <h4><span>Nuestras marcas</span></h4>

                        <div className="grid">
                            <div className="item">
                                <Link to="/marca-auto">
                                    <img src={logoAcura} alt="Acura" />
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/marca-auto">
                                    <img src={logoChevrolet} alt="Chevrolet" />
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/marca-auto">
                                    <img src={logoDodge} alt="Dodge" />
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/marca-auto">
                                    <img src={logoHonda} alt="Honda" />
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/marca-auto">
                                    <img src={logoMitsubishi} alt="Mitsubishi" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default NuestrasMarcas;