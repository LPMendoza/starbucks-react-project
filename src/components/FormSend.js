import React from 'react';

let FormSend = () => {

   return (
      <div className="form-send py-5 px-4 bg-white">
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
         <div className="cont-input-form mb-4">
            <label className="lbl-form"> Teléfono </label>
            <input type="text" className="input-custom" />
         </div>

         <button className="btn btn-block btn-primary mt-5">Finalizar compra</button>
      </div>
   )

}

export default FormSend;
