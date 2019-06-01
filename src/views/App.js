import React from 'react';
import imgTop from './../img/header-auto.png';
import './../css/App.css';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import NuestrasMarcas from '../components/NuestrasMarcas';
import NuestrasAgencias from '../components/NuestrasAgencias';

function App() {
    return (
        <div className="App">
            <Header></Header>

            <section className="img-top">
                <img src={imgTop} alt="Grupo Kasa" />
            </section>

            <NuestrasMarcas></NuestrasMarcas>

            <NuestrasAgencias></NuestrasAgencias>

            <Footer></Footer>
            
        </div>
    );
}

export default App;
