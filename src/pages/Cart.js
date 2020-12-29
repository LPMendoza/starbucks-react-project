import React, {useState} from "react";
import NavBar from '../components/NavBar.js';
import CartItem from '../components/CartItem.js';
import FormSend from '../components/FormSend.js';

import config from '../config.js';

let Cart = () => {
   let subTotal = 0;
   subTotal += config.cartItems.map((product) => parseFloat(product.quantity) * parseFloat(product.price)).reduce((a, b) => a + b);
   console.log(subTotal)
   let sendPrice = 10;
   let total = subTotal + sendPrice;
   return (
      <React.Fragment>
         <NavBar pageActive={"cart"} />
         <section className="page bg-light-cream page-menu">
            <article className="section-land section-magic mb-0 bg-light pb-5 pt-3">
               <div className="container">
                  <div className="row justify-content-center my-4">

                     <div className="col-12 col-lg-8 cont-cart-items px-0 pb-3 pb-lg-5 mt-lg-0">
                        <h4 className="text-dark text-center text-md-left pl-md-3 mb-5">Carrito de compras</h4>

                     {
                           config.cartItems.map((cart, index) => <CartItem key={index} cartItem={cart} />)
                     }
                     </div>
                     <div className="col-12 col-lg-4 pr-md-0">
                        <FormSend subTotal={subTotal} sendPrice={sendPrice} total={total} />
                     </div>
                  </div>
               </div>
            </article>
            {/* <article className="bg-primary pb-3 wave-div-contact mt-5">
              <svg className="img-fluid wave-light" viewBox="0 0 1326 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1329 0H-2V50.2724C4.35961 50.2724 108.456 15.5883 205.357 15.5883C398.822 15.5883 416.73 79.5005 478.988 79.5005C541.245 79.5005 645.174 38.1914 768.685 38.1914C892.195 38.1914 882.154 66.2504 997.631 79.5005C1090.01 90.1005 1257.04 64.4318 1329 50.2724V0Z" className="fill-gray" />
              </svg>
            </article> */}
         </section>
      </React.Fragment>
   )
}

export default Cart;