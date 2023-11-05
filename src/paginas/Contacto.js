import React, { Fragment } from 'react';
import Navegacion from './Navegacion';
import Piedepagina from './Piedepagina';

function Contacto(){
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
                        <h1 className="animate__animated animate__backInDown"> Formulario de Contacto</h1>
                        <h2> Servicios especializados en tu negocio que te ayudarán a crecer</h2>
                        <p>Escríbenos para realizarte un presupuesto a tu medida</p>
                    </div>

            <div className="contacto-container">
                <div className="contacto-grid-wrapper">
                    <div className="company-metadata-sidebar-wrapper">

                    <div className="company-details-wrapper">
                        <i className="fa-solid fa-map-location-dot"></i>
                        <div>
                            123 Street <br/> 20 018 Donostia
                        </div>
                    </div>
    
                    <div className="company-details-wrapper">
                        <i className="fa-solid fa-phone-volume"></i>
                        <div>
                            +123 456 7890
                        </div>
                    </div>
    
                    <div className="company-details-wrapper">
                        <i className="fa-solid fa-clock"></i>
                        <div>
                            10:00 - 18:00
                        </div>
                    </div>
    
                    </div>
    
                    <div className="form">
                        <div className="form-group">
                            <input type="text" id="fullName" placeholder="Nombre"/>
                            <label for="fullName">Nombre</label>
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" placeholder="Email"/>
                            <label for="email">Email</label>
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="message" placeholder="Mensaje"></textarea>
                            <label for="message">Mensaje</label>
                        </div>
                        <div className="spacer10"></div>

                        <div className="boton-enviar">

                        <button type="submit" class="btn"> Enviar </button>
                        </div>
                    </div>
                 </div>
            </div> 
            <Piedepagina />
        </Fragment>
    )   
}

export default Contacto;