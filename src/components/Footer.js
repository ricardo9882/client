import React, { Component } from 'react';

import logoFooter from './../img/kasa-logo-hr.svg';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <img src={logoFooter} className="logo-footer" alt="logo" />

                        
                        © 2019 Todos los derechos reservados 
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;