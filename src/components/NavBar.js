import React, { useState } from "react";
import Logo from "../assets/img/logo-starbucks.svg";
import {Link} from 'react-router-dom';

import config from '../config.js';

let NavBar = ({pageActive}) => {
   const [activeItem, setActiveItem] = useState(pageActive);
   const [showMenu, setShowMenu] = useState(false);
   const [stickyMenu, setStickyMenu] = useState(false);

   let lastScroll = 0;
   window.onscroll = () => {
      if(window.scrollY < 10) {
         setStickyMenu(false);
      }
      else {

         if (window.scrollY < lastScroll) {
            setStickyMenu(true);
         }

         if (window.scrollY > lastScroll && lastScroll != 0) {
            setStickyMenu(false);
         }
      }

      lastScroll = window.scrollY

   };

   const handleOnClick = (e) => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto';
   }

   return (
      <header className={`sticky-top ${stickyMenu ? "navbar-top-showed" : "navbar-top-hidden"}`}>
         <nav className="bg-light navbar navbar-light navbar-expand-lg pt-2 mb-4">
            <div className="container px-0">
               <Link style={{ textDecoration: 'none' }} to={`${config.basePath}/`}>
                  <span className="navbar-brand mr-lg-5">
                     <img className="mr-2 logo-starbucks" src={Logo}></img>
                     STARBUCKS
                  </span>
               </Link>
               
               <div className="cont-cart-menu">
                  <div className={`d-flex flex-row cont-navbar bg-light ${showMenu ? " showNavBar d-flex flex-column align-content-center" : "hideNavBar"}`} id="navbarNav">
                     <ul className={` mobile-ul navbar-nav mr-lg-5 mt-5 mt-lg-0`}>
                        <Link style={{ textDecoration: 'none' }} to={`${config.basePath}/`} className="nav-item" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                           <li onClick={handleOnClick} className={`nav-item mr-lg-5 py-3 py-lg-0 ${activeItem === "home" ? "active" : ""}`}>
                              <a className={`nav-link`}>Inicio</a>
                           </li>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to={`${config.basePath}/menu`}>
                           <li onClick={handleOnClick} className={`nav-item mr-lg-5 py-3 py-lg-0 ${activeItem === "menu" ? "active" : ""}`}>
                              <a className={`nav-link`}>Menú</a>
                           </li>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to={`${config.basePath}/contact`}>
                           <li onClick={handleOnClick} className={`nav-item ${activeItem === "contact" ? "active" : ""} py-3 py-lg-0`}>
                              <a className={`nav-link`}>Contacto</a>
                           </li>
                        </Link>
                     </ul>
                  </div>
                  <a className={`shoping-cart-icon ${activeItem === "cart" ? "active" : ""}`} id="cart" href="#">
                     <svg viewBox="0 0 350 323" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M332.195 55.927C337.374 55.927 342.222 58.2202 345.493 62.2192C348.764 66.2176 350.042 71.4095 348.997 76.4607L325.004 192.46C323.37 200.363 316.303 206.1 308.203 206.1H96.0712L101.12 230.51H306.614C311.352 230.51 315.192 234.335 315.192 239.054C315.192 243.773 311.352 247.598 306.614 247.598H101.119C93.0178 247.598 85.9516 241.861 84.3167 233.958L42.8132 33.2837L5.16351 17.0054C0.819105 15.1275 -1.17535 10.0954 0.711979 5.76599C2.59726 1.43797 7.64856 -0.54865 11.995 1.33195L49.644 17.6096C54.7622 19.8232 58.4891 24.3932 59.6156 29.8359L65.0115 55.927H332.195ZM92.5374 189.013H308.203L332.194 73.0148L68.546 73.0142L92.5374 189.013ZM138.9 100.287H261.822C266.559 100.287 270.399 104.112 270.399 108.831C270.399 113.55 266.559 117.375 261.822 117.375H138.9C134.164 117.375 130.323 113.55 130.323 108.831C130.323 104.112 134.163 100.287 138.9 100.287ZM146.487 261.414C129.546 261.414 115.763 275.143 115.763 292.018C115.763 308.893 129.546 322.622 146.487 322.622C163.429 322.622 177.212 308.893 177.212 292.018C177.211 275.143 163.428 261.414 146.487 261.414ZM146.487 305.533C139.005 305.533 132.918 299.469 132.918 292.017C132.918 284.564 139.006 278.501 146.487 278.501C153.969 278.501 160.057 284.564 160.057 292.017C160.057 299.471 153.969 305.533 146.487 305.533ZM254.258 261.414C237.316 261.414 223.533 275.143 223.533 292.018C223.533 308.893 237.316 322.622 254.258 322.622C271.199 322.622 284.983 308.893 284.983 292.018C284.982 275.143 271.199 261.414 254.258 261.414ZM254.258 305.533C246.775 305.533 240.688 299.469 240.688 292.017C240.688 284.564 246.776 278.501 254.258 278.501C261.74 278.501 267.827 284.564 267.827 292.017C267.827 299.471 261.74 305.533 254.258 305.533ZM255.131 144.655H145.591C140.854 144.655 137.014 148.48 137.014 153.199C137.014 157.918 140.854 161.743 145.591 161.743H255.131C259.868 161.743 263.708 157.918 263.708 153.199C263.708 148.481 259.868 144.655 255.131 144.655Z" />
                     </svg>
                     <span className="cart-count">3</span>

                  </a>
                  <button 
                  onClick={(e) => {
                     setShowMenu(showMenu ? false : true);
                     showMenu ?
                     document.body.style.overflow = 'auto'
                     : 
                    document.body.style.overflow = 'hidden'

                  }} 
                  className={`btn btn-light btnMenu ml-4 d-flex d-lg-none`}>
                     <span className={`${showMenu ? "fas fa-times" : "fas fa-bars"}`}></span>
                  </button>
               </div>
            </div>
         </nav>
      </header>
   );
}

export default NavBar