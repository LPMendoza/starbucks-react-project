import React from 'react';

let FormContact = () => {

  const handelOnInputArea = (e) => {

    e.target.style.height = 0;
    e.target.style.height = e.target.scrollHeight + 'px';
  }

   return (
      <div className="form-send py-5 px-4 bg-white">
         <h5 className="text-center mb-5">Información de contacto</h5>
         <div className="cont-input-form mb-4">
            <label className="lbl-form"> Correo electrónico <span>*</span> </label>
            <input type="text" className="input-custom"/>
         </div>
         <div className="cont-input-form mb-4">
            <label className="lbl-form"> Mensaje <span>*</span></label>
            <textarea onInput={handelOnInputArea} type="text" className="input-custom" />
         </div>
         <div className="cont-input-form mb-4">
            <label className="lbl-form"> Teléfono </label>
            <input type="text" className="input-custom" />
         </div>

         <button className="btn btn-block btn-primary mt-5">Enviar</button>
      </div>
   )

}

export default FormContact;