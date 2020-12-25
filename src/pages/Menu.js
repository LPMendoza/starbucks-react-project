import React from "react";
import NavBar from '../components/NavBar.js';
import MenuCard from '../components/MenuCard.js';

import imgMenu from "../assets/img/lading/img-banner-menu.png";
import imgDrinks from "../assets/img/menu/coffe-hot.jpg";
import imgLunch from "../assets/img/menu/lunch.jpg";
import imgBakery from "../assets/img/menu/bakery.jpg";
import imgSnacks from "../assets/img/menu/snacks.jpg";
import imgYogurt from "../assets/img/menu/yogurt.jpg";
import imgWhole from "../assets/img/menu/whole.jpg";

let Menu = () => {
   let menuItems = [
      {
         menuName: "Bebidas",
         imgMenu: imgDrinks
      },
      {
         menuName: "Desayunos",
         imgMenu: imgLunch
      },
      {
         menuName: "Panaderia",
         imgMenu: imgBakery
      },
      {
         menuName: "Snacks & Sweets",
         imgMenu: imgSnacks
      },
      {
         menuName: "Yogurt & Custard",
         imgMenu: imgYogurt
      },
      {
         menuName: "Whole Bean",
         imgMenu: imgWhole
      }
   ]
   return (
      <React.Fragment>
         <NavBar pageActive={"menu"} />
         <section className="page bg-light-cream">
            <article className="section-land section-magic mb-0 bg-light">
               <div className="container">
                  <div className="row align-items-center justify-content-center">
                     <div className="cont-text-land col-12 col-md-6 px-10 text-center text-md-left">
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
            <svg className="img-fluid wave-light" viewBox="0 0 1326 100" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1329 0H-2V50.2724C4.35961 50.2724 108.456 15.5883 205.357 15.5883C398.822 15.5883 416.73 79.5005 478.988 79.5005C541.245 79.5005 645.174 38.1914 768.685 38.1914C892.195 38.1914 882.154 66.2504 997.631 79.5005C1090.01 90.1005 1257.04 64.4318 1329 50.2724V0Z" fill="#F9F9F9" />
            </svg>
            <h3 className="col-12 text-center my-5">SELECCIONA UNA CATEGORIA PARA VER SUS PRODUCTOS</h3>

            <svg className="img-fluid wave-circle" viewBox="0 0 1328 117" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fillRule="evenodd" clipRule="evenodd" d="M664 0C901.192 0 1126.16 36.5404 1328 102L1328 118H0V102C201.836 36.5404 426.808 0 664 0Z" fill="#006241" />
            </svg>
            <article className="bg-primary article-menu pb-5">
               <div className="container">
                  <div className="row align-items-center justify-content-center">
                     <div className="cont-cards-menu col-12 px-0 d-flex flex-wrap">
                        {menuItems.map((menu, index) => <MenuCard key={index} menuItem={menu} />)}
                     </div>
                  </div>
               </div>
            </article>
         </section>
      </React.Fragment>
   )
}

export default Menu;