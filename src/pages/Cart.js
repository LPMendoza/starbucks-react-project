import React, {useState} from "react";
import NavBar from '../components/NavBar.js';
import CartItem from '../components/CartItem.js';
import FormSend from '../components/FormSend.js';
import ProductDetail from '../pages/ProductDetail.js';

import config from '../config.js';

let Cart = () => {
   let subTotal = 0;
   subTotal += config.cartItems.map((product) => parseFloat(product.quantity) * parseFloat(product.price)).reduce((a, b) => a + b);
   let sendPrice = 10;
   let total = subTotal + sendPrice;

   const [productDetail, setProductDetail] = useState({
      product: "",
      showed: false
   });

   if (productDetail.showed) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
   } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
   }


   return (
      <React.Fragment>
         <NavBar pageActive={"cart"} />
         <section className="page bg-light-cream page-menu">
            <article className="section-land mb-0 bg-light pb-5 pt-lg-3">
               <div className="container">
                  <div className="row justify-content-center my-4">

                     <div className="col-12 col-lg-8 cont-cart-items px-0 pb-3 pb-lg-5 mt-lg-0">
                        <h4 className="text-dark text-center text-md-left pl-md-3 mb-5">Carrito de compras</h4>

                     {
                           config.cartItems.map((cart, index) => <CartItem key={index} cartItem={cart} handleOnClickProduct={setProductDetail}/>)
                     }
                     </div>
                     <div className="col-12 col-lg-4 pr-md-0 cont-form-send">
                        <FormSend subTotal={subTotal} sendPrice={sendPrice} total={total} />
                     </div>
                  </div>
               </div>
            </article>
         </section>
            <ProductDetail showed={productDetail.showed} product={productDetail.product} handleOnClose={setProductDetail}/>

      </React.Fragment>
   )
}

export default Cart;