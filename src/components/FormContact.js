import React, {useState} from 'react';

let FormContact = () => {

  const handelOnInputArea = (e) => {
   setForm({
      ...form,
      [e.target.name]: e.target.value
   })
   e.target.style.height = 0;
   e.target.style.height = e.target.scrollHeight + 'px';
  }

  const [form , setForm] = useState({
     mail: '',
     message: '', 
     phone: ''
  });

  const handleOnChange = (e) => {
     setForm({
        ...form,
        [e.target.name]: e.target.value
     })
  }

  const handleOnClick = (e) => {
   setForm({
      mail: '',
      message: '', 
      phone: ''
   });
  }

   return (
      <div className="form-send py-4 px-4 bg-white">
         <h5 className="text-center mb-5">Información de contacto</h5>
         <div className="cont-input-form mb-4">
            <label className="lbl-form"> Correo electrónico <span>*</span> </label>
            <input name="mail" value={form.mail} onChange={handleOnChange} type="text" className="input-custom" required/>
         </div>
         <div className="cont-input-form mb-4">
            <label className="lbl-form"> Duda o comentario <span>*</span></label>
            <textarea name="message" value={form.message} onChange={handelOnInputArea} type="text" className="input-custom textarea-custom" required/>
         </div>
         <div className="cont-input-form mb-4">
            <label className="lbl-form"> Teléfono </label>
            <input name="phone" value={form.phone} onChange={handleOnChange} type="number" className="input-custom" required/>
         </div>

         <button onClick={handleOnClick} className="btn btn-block btn-primary mt-5 pl-3">Enviar <span className="fas fa-check ml-2"></span></button>
      </div>
   )

}

export default FormContact;
