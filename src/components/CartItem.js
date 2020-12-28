import React from 'react';

let CartItem = ({cartItem}) => {
   return (
         <div className="card-cart px-4 py-3 mt-0 mb-4">
            <button className="btn btn-light rounded-circle btn-delete-cart d-flex d-md-none ml-auto">
               <span className="fas fa-times text-dark"></span>
            </button>
            <div className="cont-cart-product justify-content-center">
               <img className="image-cart-card mr-lg-4" src={cartItem.imgProduct} />
               <div className="cont-data-cart-item col-12 col-md-auto my-4 my-md-auto">
                  <p className="cart-name-card mb-0">{cartItem.productName}</p>
                  <span className=" cart-categorie-card">{cartItem.category}</span>
                  <span className="mx-0 cart-price-card mt-2">{"$" + parseFloat(cartItem.price).toFixed(2)}</span>
               </div>
            </div>
            <div className="cont-footer-cart-cart ">
               <div className="cont-ctrl-quantity bg-light rounded-pill col-12 px-0 col-md-auto justify-content-between mb-4 mb-md-auto">
                  <button className="btn btn-light btn-plus-cart"><span className="fas fa-plus"></span></button>
                  <label className="lbl-quantity bg-light mb-0">{cartItem.quantity}</label>
                  <button className="btn btn-light btn-less-cart"><span className="fas fa-minus"></span></button>
               </div>
               <span className="cart-quantity-price-card mx-md-4">{"$" + parseFloat(cartItem.price * cartItem.quantity).toFixed(2)}</span>

               <button className="btn btn-light rounded-circle btn-delete-cart d-none d-lg-flex">
                  <span className="fas fa-times text-dark"></span>
               </button>
            </div>
         </div>
   )
}

export default CartItem;