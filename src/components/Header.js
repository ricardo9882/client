import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import logo from './../img/kasa-logo.svg';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <Link to="/">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </Link>
                    
                    <div className="nav">
                        <Link to="/">
                            Inicio
                        </Link>
                        <Link to="/historia">
                            Historia
                        </Link>
                        <Link to="/corporativo">
                            Corporativo
                        </Link>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;

