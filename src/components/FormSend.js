import React from 'react';

let FormSend = ({subTotal, sendPrice, total}) => {

   return (
      <div className="form-send p-4 bg-white">
         <h5 className="text-center mb-5">Información de envío</h5>
         <div className="cont-input-form mb-4">
            <label className="lbl-form"> Nombre completo <span>*</span> </label>
            <input type="text" className="input-custom"/>
         </div>
         <div className="cont-input-form mb-4">
            <label className="lbl-form"> Calle y número <span>*</span></label>
            <input type="text" className="input-custom" />
         </div>
         <div className="cont-input-form mb-4 w-50">
            <label className="lbl-form"> Código postal <span>*</span></label>
            <input type="text" className="input-custom" />
         </div>
         <div className="cont-input-form mb-5">
            <label className="lbl-form"> Teléfono </label>
            <input type="text" className="input-custom" />
         </div>
         <div className="cont-subtotal d-flex justify-content-between">
            <label>Subtotal</label>
            <label>${subTotal.toFixed(2)}</label>
         </div>
         <div className="cont-sendPrice d-flex justify-content-between">
            <label>Envio</label>
            <label>${sendPrice.toFixed(2)}</label>
         </div>
         <div className="cont-total d-flex justify-content-between">
            <label>Total</label>
            <label>${total.toFixed(2)}</label>
         </div>
         <button className="btn btn-block btn-primary mt-3">Finalizar compra</button>
      </div>
   )

}

export default FormSend;
