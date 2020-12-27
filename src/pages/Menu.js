import React, {useState} from "react";
import NavBar from '../components/NavBar.js';
import MenuCard from '../components/MenuCard.js';
import ProductCard from '../components/ProductCard.js';
import imgMenu from "../assets/img/lading/img-banner-menu.png";
import config from '../config.js';

let Menu = () => {
   
   const [menuShowed, setMenuShowed] = useState(true);

   let showProduct = (e) => config.productItems.map((product, index) => <ProductCard key={index} productItem={product} />)

   let showMenu = (e) => config.menuItems.map((menu, index) => <MenuCard key={index} handleOnClick={setMenuShowed} menuItem={menu} />)
   
   let showCtrlProducts = (e) => {
      return (
         <div className="ctrlProducts mt-md-4 mb-md-3 mb-0 col-12 px-0">
            <div className="cont-backmenu col-12 col-md-auto px-0">
                  <button onClick={(e) => setMenuShowed(true)} 
                  className="btn btn-primary rounded-pill pr-3 btnBackMenu text-white col-12 col-md-auto">
                     <span className="fas fa-arrow-left pr-3"></span>Regresar al menú
                  </button>
            </div>
            <div className="cont-filter-menu mt-4 mb-5 my-md-0 col-12 col-md-auto px-0">

               <select className="pl-3 pr-5 col-12 col-md-auto mb-2 mr-md-3 mb-md-auto rounded-pill bg-light">
                  <option value="relevancia" defaultChecked>Relevancia</option>
                  <option value="upper">Mayor a menor precio</option>
                  <option value="lower">Menor a mayor precio</option>
               </select>
               <div className="cont-search px-2 col-12 col-md-auto rounded-pill bg-light">
                  <input type="text" className="ml-2" placeholder="Buscar..." required/>
                  <span class="fas fa-search mx-2"></span>
               </div>
            </div>
         </div>
      )
   }
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
            <div className="container">
               <div className="row align-items-center justify-content-beetween px-3">
                  <h3 className="col-12 text-center mt-5 mb-lg-5 mb-4">
                     {menuShowed ? "SELECCIONA UNA CATEGORIA PARA VER SUS PRODUCTOS" : "BEBIDAS DE CALIDAD PARA TI"}
                  </h3>
                  {!menuShowed ? showCtrlProducts() : ""}

               </div>
            </div>
            {/* <svg className="img-fluid wave-circle" viewBox="0 0 1328 117" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path className="fill-gray-cream" fillRule="evenodd" clipRule="evenodd" d="M664 0C901.192 0 1126.16 36.5404 1328 102L1328 118H0V102C201.836 36.5404 426.808 0 664 0Z"/>
            </svg> */}
            <article className="bg-light-cream article-menu py-0 py-md-4">
               <div className="container">
                  <div className="row align-items-center justify-content-center">
                     <div className="cont-cards-menu col-12 px-0 d-flex flex-wrap">
                        {menuShowed ? showMenu() : showProduct()}
                     </div>
                  </div>
               </div>
            </article>
         </section>
      </React.Fragment>
   )
}

export default Menu;