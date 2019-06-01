import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import logoAcura from './../img/acura-logo.png';
import logoDodge from './../img/dodge-logo.png';
import logoChevrolet from './../img/chevrolet-logo.png';
import logoHonda from './../img/honda-logo.png';
import logoMitsubishi from './../img/mitsubishi-logo.png';

class NuestrasAgencias extends Component {
    render() {
        return (
            <div>

                <section className="block grid-marcasagencias">
                    <div className="container">
                        <h4><span>Nuestras agencias</span></h4>

                        <div className="grid">
                            <div className="item">
                                <Link to="/marca-agencia">
                                    <span><img src={logoAcura} alt="Acura" /></span>
                                    <span>Lomas Verdes</span>
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/marca-agencia">
                                    <span><img src={logoChevrolet} alt="Chevrolet" /></span>
                                    <span>Coacalco</span>
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/marca-agencia">
                                    <span><img src={logoChevrolet} alt="Chevrolet" /></span>
                                    <span>Tlalnepantla</span>
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/marca-agencia">
                                    <span><img src={logoChevrolet} alt="Chevrolet" /></span>
                                    <span>Valle Dorado</span>
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/marca-agencia">
                                    <span><img src={logoDodge} alt="Dodge" /></span>
                                    <span>Naucalpan</span>
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/marca-agencia">
                                    <span><img src={logoHonda} alt="Honda" /></span>
                                    <span>Satélite</span>
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/marca-agencia">
                                    <span><img src={logoMitsubishi} alt="Mitsubishi" /></span>
                                    <span>Satélite</span>
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="/marca-agencia">
                                    <span><img src={logoMitsubishi} alt="Mitsubishi" /></span>
                                    <span>Viaducto</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default NuestrasAgencias;