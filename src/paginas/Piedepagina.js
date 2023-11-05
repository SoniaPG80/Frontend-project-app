import React, {Fragment} from 'react';

function Piedepagina(){
    return(
        <Fragment>
             <div className="contenedor-pie-de-pagina"/>
                <div className="pie-de-pagina">
                    <div className="columnas-pie">
                        <div className="columnas">
                            <h1 className="texto-principal">Akaira<span className="texto-secundario"> Studio</span> </h1>
                            <p className="colu">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.</p>
                            <div className="columna">
                                <div className="iconos-rrss-pie">
                                    <a href=""><i className="fab fa-facebook-f texto-principal"></i></a>
                                    <a href=""><i className="fab fa-twitter texto-principal"></i></a>
                                    <a href=""><i className="fab fa-instagram texto-principal"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in texto-principal"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="columnas">
                            <h2 className="texto-secundario"> Información</h2>
                            <div className="columna">
                                <a href="" className="abc-3 texto-principal"><i className="fas fa-angle-right texto-secundario"></i>Sobre Ekaira</a>
                                <a href="" className="abc-3 texto-principal"><i className="fas fa-angle-right texto-secundario"></i>Contacto</a>
                                <a href="" className="abc-3 texto-principal"><i className="fas fa-angle-right texto-secundario"></i>Servicios</a>
                                <a href="" className="abc-3 texto-principal"><i className="fas fa-angle-right texto-secundario"></i>Proyectos</a>
                                <a href="" className="abc-3 texto-principal"><i className="fas fa-angle-right texto-secundario"></i>Blog</a>
                            </div>
                        </div>
                        <div className="columnas">
                            <h2 className="texto-secundario">Links de Interés</h2>
                            <div className="columna">
                                <a href="" className="abc-3 texto-principal"><i className="fas fa-angle-right texto-secundario"></i>Términos de Uso</a>
                                <a href="" className="abc-3 texto-principal"><i className="fas fa-angle-right texto-secundario"></i>Política de privacidad</a>
                                <a href="" className="abc-3 texto-principal"><i className="fas fa-angle-right texto-secundario"></i>Política de Cookies</a>
                                <a href="" className="abc-3 texto-principal"><i className="fas fa-angle-right texto-secundario"></i>FQAs</a>
                                <a href="" className="abc-3 texto-principal"><i className="fas fa-angle-right texto-secundario"></i>Contacto</a>
                            </div>
                        </div>
                        <div className="columnas">
                            <h2 className="texto-secundario">Contacto</h2>
                            <div className="columna">
                                <a href="#" className="abc-2"><i className="fas fa-map-marker-alt texto-secundario"></i> 123 Street, 20018, Donostia</a>
                                <a href="#" className="abc-2"><i className="fas fa-phone-alt texto-secundario"></i> +123 456 7890</a>
                                <a href="#" className="abc-2"><i className="fas fa-envelope texto-secundario"></i> info@akaira.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="linea">
                        <div className="columnas-pie-dos">
                            <div className="copyright">
                                <span><a href="#" className="texto-secundario"><i className="fas fa-copyright texto-secundario"></i> Akaira Studio</a>, Todos los derechos reservados.2023</span>
                            </div>
                            <div className="copyright">
                                <span>Diseño Web: Akaira Studio</span>
                            </div>
                        </div>
                    </div>
            </div>
        </Fragment>
    )
}
export default Piedepagina;