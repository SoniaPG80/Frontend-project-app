import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

function Navegacion(){
    return(
        <Fragment>
              <div className="contenedor-navegacion"/>
                <div className="navegacion">
                        <Link className="navbar-brand" to="/contacto">
                        <h1 className="texto-principal">Akaira <span className="texto-secundario"> Studio </span> </h1>
                        </Link> 

                    <div className="menu-navegacion">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/">Inicio</Link>
                            <Link className="nav-link" to="/sobremi">Sobre mí</Link>
                            <Link className="nav-link" to="/servicios">Servicios</Link>
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </div>
                    </div>
                    <div className="telefono-lupa">
                        <div class="phone-data">
                            <a href="#">
                                <i className="fa-solid fa-phone"></i>
                                <div className="position-phone">
                                    <span><i className="fa-regular fa-comment-dots"></i></span>
                                </div>
                            </a>
                        </div>
                        <div className="position-texto-nav">
                            <span>¡Llámanos!</span>
                            <span className="texto-secundario">Tel: +123 456 7890</span>
                        </div>
                        <div className="position-lupa-nav ">
                            <a href="#"><i className="fa-solid fa-magnifying-glass"></i> </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Navegacion;