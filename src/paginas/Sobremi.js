import React, { Fragment } from 'react';
import Navegacion from './Navegacion';
import Piedepagina from './Piedepagina';

function Sobremi(){
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
                
                <div className="texto-sobremi">
                <p>A lo largo de este último año, he intentado aprovechar al máximo el curso de Bottega University sobre Full Stack Developer.
                Y para ello, con mucha humildad y con los conocimientos aprendidos durante el curso persento esta web como proyecto.
                </p>
                </div>
                <div className="foto-sobremi">
                    <img src="/assets/imagenes/fotosobremi.jpg" alt="Sonia Perez" className="fotomia"/>
                </div>
                <div className="texto-sobremi">
                <p>Tengo una larga trayectoria profesional como Marketer Digital y SEO.
                Soy proactiva, trabajadora y muy perseverante. Me gusta trabajar por objetivos, pero sobre todo me gusta escuchar a las personas para poder ofreceles lo que de verdad necesitan.
                </p>
                </div>
            
            <Piedepagina />
            </Fragment>
    )
}

export default Sobremi;