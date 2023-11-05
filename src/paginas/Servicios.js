import React, { Fragment } from 'react';
import Navegacion from './Navegacion';
import Piedepagina from './Piedepagina';

function Servicios(){
    return(
        <Fragment>
             <Navegacion />
             <div className="contenedor-encabezado-sobremi">
                <div className="contenedor-encabezado-texto">
                </div>
            </div>
            <div className="contenedor-servicios-principales"></div>
                <div className="servicios-principales"></div>
                    <div className="texto-servicios-principales">
                        <h1 className="animate__animated animate__backInDown"> Marketing Digital</h1>
                        <h2> Servicios especializados en tu negocio que te ayudarán a crecer</h2>
                    </div>

            
                    <div className="estructura-servicios-principales">
                        <div className="capsula">
                            <div className="servicios-item">
                                <div className="servicios-contexto">
                                    <div className="servicios-contexto-icono">
                                        <i className="fa-solid fa-code"></i>
                                        <h4 className="abc-1"> Desarrollo Web</h4>
                                        <p className="abc-2"> Web bonita, intuitiva y fácil de navegar y gestionar.Con textos que venden gracias a nuestra experiencia en copywriting.</p>
                                        <a href="/contacto" className="boton-redondo">Contratar</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="capsula">
                            <div className="servicios-item">
                                <div className="servicios-contexto">
                                    <div class="servicios-contexto-icono">
                                        <i className="fa-solid fa-user-secret"></i>
                                        <h4 className="abc-1"> Estrategia Digital</h4>
                                        <p className="abc-2"> Analizamos tu situación. Propondremos las acciones adecuadas a tus necesidades y te acompañamos en el proceso.</p>
                                        <a href="/contacto" className="boton-redondo">Contratar</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="capsula">
                            <div className="servicios-item">
                                <div className="servicios-contexto">
                                    <div className="servicios-contexto-icono">
                                        <i className="fa-solid fa-laptop-code"></i>
                                        <h4 className="abc-1"> Posicionamiento Web</h4>
                                        <p className="abc-2"> Web bonita, intuitiva y fácil de navegar y gestionar. Con textos que venden gracias a nuestra experiencia en copywriting.</p>
                                        <a href="/contacto" className="boton-redondo">Contratar</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
            
            <Piedepagina />
        </Fragment>
    )   
}

export default Servicios;