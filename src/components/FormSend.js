import React, {useState} from 'react';

let FormSend = ({subTotal, sendPrice, total}) => {

   const [form ,setForm] = useState({
      name: '',
      street: '', 
      code: '', 
      phone: ''
   })

   const handleOnChange = (e) => {
      setForm({
         ...form,
         [e.target.name]: e.target.value
      })
   }

   const handleOnClick = (e) => {
      setForm({
         name: '',
         street: '', 
         code: '', 
         phone: ''
      });
   }

   return (
      <div className="form-send p-4 bg-white">
         <h5 className="text-center mb-5">Información de envío</h5>
         <div className="cont-input-form mb-4">
            <label className="lbl-form"> Nombre completo <span>*</span> </label>
            <input name="name" value={form.name} onChange={handleOnChange} type="text" className="input-custom" required/>
         </div>
         <div className="cont-input-form mb-4">
            <label className="lbl-form"> Calle y número <span>*</span></label>
            <input name="street" value={form.street} onChange={handleOnChange} type="text" className="input-custom" required/>
         </div>
         <div className="cont-input-form mb-4 w-50">
            <label className="lbl-form"> Código postal <span>*</span></label>
            <input name="code" value={form.code} onChange={handleOnChange} type="text" className="input-custom" required/>
         </div>
         <div className="cont-input-form mb-5">
            <label className="lbl-form"> Teléfono </label>
            <input name="phone" value={form.phone} onChange={handleOnChange} type="number" className="input-custom" required/>
         </div>

         <div className="cont-total-buy">
            <div className="cont-subtotal d-flex justify-content-between">
               <label>Subtotal</label>
               <label>${subTotal.toFixed(2)}</label>
            </div>
            <div className="cont-sendPrice d-flex justify-content-between">
               <label>Envío</label>
               <label>${sendPrice.toFixed(2)}</label>
            </div>
            <div className="cont-total d-flex justify-content-between">
               <label>Total</label>
               <label>${total.toFixed(2)}</label>
            </div>
         </div>
        
         <button onClick={handleOnClick} className="btn btn-block btn-primary mt-3 pl-3">Finalizar compra <span className="fas fa-check ml-2"></span></button>
      </div>
   )

}

export default FormSend;
