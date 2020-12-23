import React from "react";
import Logo from "../assets/img/logo-starbucks.svg";
let Footer = () => {
   return(
      <div className="container py-5">
         <div className="row justify-content-between">
            <div className="px-0 d-flex flex-column justify-content-center">
               <a className="navbar-brand text-white mb-4">
                  <img className="mr-4" src={Logo} width="64px"></img>
                     STARBUCKS
                  </a>
               <span className="tex-white">© 2020 Starbucks Coffee Company. All rights reserved</span>
            </div>
            <div className="ml-5 px-0">
               <h6>STARBUCKS</h6>
               <ul className="mb-0">
                  <li class="nav-item my-3"><a href="nav-link">Nuestra empresa</a></li>
                  <li class="nav-item my-3"><a href="nav-link">Nuestra herencia</a></li>
                  <li class="nav-item my-3"><a href="nav-link">Boletines de empresa</a></li>
                  <li class="nav-item mt-3"><a href="nav-link">Trabaja con nostros</a></li>
               </ul>
            </div>
            <div className="ml-5 px-0">
               <h6>STARBUCKS REWARDS</h6>
               <ul className="mb-0">
                  <li class="nav-item my-3"><a href="nav-link">Starbucks rewards</a></li>
                  <li class="nav-item my-3"><a href="nav-link">Mi cuenta</a></li>
                  <li class="nav-item my-3"><a href="nav-link">Mas información</a></li>
               </ul>
            </div>
            <div className="ml-5 px-0 d-flex align-items-center">
               <span className="icon-social fab fa-facebook"></span>
               <span className="icon-social ml-5 fab fa-instagram"></span>
               <span className="icon-social ml-5 fab fa-twitter"></span>
            </div>
         </div>
      </div>
   )
}

export default Footer;