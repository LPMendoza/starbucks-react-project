import React from 'react';

let MenuCard = ({ menuItem, handleOnClick}) => {
   return (
      <div onClick={(e) => 
      {
         handleOnClick(false); 
         document.getElementById("cont-menu-products").scrollIntoView();

      }} className="col-12 col-md-6 col-lg-4 mb-3 card-menu">
         <div className="cont-menu-img ">
            <div className="imgMenuBackground" style={{ backgroundImage: `url(${menuItem.imgMenu})` }}>
            </div>
            <h2 className="text-white text-center menu-item-name px-5">{menuItem.menuName.trim()}</h2>
         </div>
      </div>
   )
}

export default MenuCard;