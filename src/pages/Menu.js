import React from "react";
import NavBar from '../components/NavBar.js';

import imgMenu from "../assets/img/lading/img-banner-menu.png";

let Menu = () => {
   return (
      <React.Fragment>
         <NavBar pageActive={"menu"} />
         <section className="page">
            <article className="section-land section-magic mb-5">
               <div className="container">
                  <div className="row align-items-center justify-content-center">
                     <div className="cont-text-land col-12 col-md-6 px-0 text-center text-md-left">
                        <h1>EL MEJOR MENÚ <span>PARA COMENZAR EL DÍA</span></h1>
                        <p className="text-primary mt-4 col-9 col-md-9 px-0">
                        Productos hechos con ingredientes de calidad para el deleite de tu paladar
                        </p>
                     </div>
                     <div className="col-10 col-md-6 px-0 d-flex justify-content-end">
                        <img src={imgMenu} className="img-fluid"/>
                     </div>
                  </div>
               </div>
            </article>
            <svg className="img-fluid wave-circle mt-5" viewBox="0 0 1328 117" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fillRule="evenodd" clipRule="evenodd" d="M664 0C901.192 0 1126.16 36.5404 1328 102L1328 118H0V102C201.836 36.5404 426.808 0 664 0Z" fill="#006241" />
            </svg>
            <article className="pb-5 bg-primary">
               <div className="container">
                  <div className="row align-items-center justify-content-center">
                     
                  </div>
               </div>
            </article>
         </section>
      </React.Fragment>
   )
}

export default Menu;