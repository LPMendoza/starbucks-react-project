import React from "react";
import NavBar from '../components/NavBar.js';
import SvgLandRelax from '../components/SvgLandRelax.js';
import SvgLandShare from '../components/SvgLandShare.js';
import SvgLandMagic from '../components/SvgLandMagic.js';
import SvgWaveLight from '../components/SvgWaveLight.js';
import { Link } from 'react-router-dom';
import config from '../config.js';

let Home = () => {

   return (
      <React.Fragment>
         <NavBar pageActive={"home"}/>
         <section className="page">
            <article className="section-land section-magic">
               <div className="container">
                  <div className="row align-items-center justify-content-center">
                     <div className="cont-text-land col-12 col-md-6 px-2 px-md-0 text-center text-md-left">
                        <h1>VIVIR ESTA ÉPOCA CONTIGO ES <span>¡MÁGICO!</span></h1>
                        <p className="text-primary mt-4 col-9 col-md-9 px-0">En estas fiestas comparte todo tu amor y cariño con tu familia y amigos en starbucks</p>
                     </div>
                     <div className="col-10 col-md-6 px-0 text-left">
                        <SvgLandMagic></SvgLandMagic>
                     </div>
                  </div>
               </div>
            </article>
            <article className="section-land section-share mt-5">
               <div className="container">
                  <div className="row align-items-center justify-content-center">
                     <div className="col-10 col-md-6 px-2 px-md-0 ">
                        <SvgLandShare></SvgLandShare>
                     </div>
                     <div className="text-right-land cont-text-land col-12 col-md-6 px-0 text-center text-md-right">
                        <h1>¡TIEMPO PARA <span>REGALAR Y COMPARTIR!</span></h1>
                        <p className="text-primary mt-4 col-9 col-md-9 px-0">Las mejores bebidas y alimentos para compartir con tus seres queridos en starbucks</p>
                     </div>
                  </div>
               </div>
            </article>
            <article className="section-land-footer mt-3 pb-5">
               <SvgWaveLight fill="#f9f9f9"/>
               <div className="container mt-5">
                  <div className="row align-items-center justify-content-center">
                     <div className="cont-text-land col-12 col-md-6 px-2 px-md-0 text-center text-md-left">
                        <h1>¡ENTRA YA Y CONOCOCE NUESTRO <span>MENÚ!</span></h1>
                        <p className="text-light mt-4 col-9 col-md-9 px-0">Conoce y adquiere nuestros productos en el menú ahora mismo para comenzar estas fechas de lo mejor</p>
                        <Link to={`${config.basePath}/menu`}>
                           <button onClick={(e) => window.scrollTo(0, 0)} type="button" className="btn btn-outline-light py-4 col-11 col-lg-7 my-5">ENTRAR AL MENÚ <span className="fas fa-arrow-right ml-2"></span></button>
                        </Link>
                     </div>
                     <div className="col-10 col-md-6 px-0 text-right-land">
                        <SvgLandRelax></SvgLandRelax>
                     </div>
                  </div>
               </div>
            </article>
         </section>
      </React.Fragment>
   )
}

export default Home;