import React, {useState} from "react";
import NavBar from '../components/NavBar.js';
import FormContact from '../components/FormContact.js';
import SvgContact from '../components/SvgContact.js';

let Contact = () => {
   
   return (
      <React.Fragment>
         <NavBar pageActive={"contact"} />
         <section className="page bg-light page-menu">
            <article className="section-land bg-light section-magic mb-5 pb-5 pt-3">
               <div className="container">
                  <h4 className="text-dark text-center text-md-left">Contáctanos y dejanos tus comentarios</h4>
                  <div className="row justify-content-lg-between align-items-center mt-5">
                     <div className="col-12 col-lg-4 pr-md-0 cont-cart-items">
                        <FormContact />
                     </div>
                     <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                        <SvgContact></SvgContact>
                     </div>
                  </div>
               </div>
            </article>

         {/* <div className="wave-contact">
           <svg className="img-fluid" viewBox="0 0 1328 118" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path className="fill-gray-cream" fill-rule="evenodd" clip-rule="evenodd" d="M664 0C901.192 0 1126.16 36.5404 1328 102L1328 118H0V102C201.837 36.5404 426.808 0 664 0Z" />
           </svg>
            <div className="bg-light-cream"></div>
         </div> */}

         </section>
      </React.Fragment>
   )
}

export default Contact;