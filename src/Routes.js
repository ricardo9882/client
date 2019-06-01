import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

// importacion de rutas
import App from './views/App';
import MarcaAuto from './views/Marca-auto';
import MarcaAgencia from './views/Marca-agencia';
import Historia from './views/Historia';
import Corporativo from './views/Corporativo';

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/marca-auto" exact component={MarcaAuto} />
                    <Route path="/marca-agencia" exact component={MarcaAgencia} />
                    <Route path="/historia" exact component={Historia} />
                    <Route path="/corporativo" exact component={Corporativo} />
                </Switch>
            </div>
        );
    }
}

export default Routes;