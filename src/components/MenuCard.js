import React from 'react';

let MenuCard = ({ menuItem, handleOnClick}) => {
   return (
      <div onClick={(e) => handleOnClick(false)} className="col-12 col-md-6 col-lg-4 my-3 card-menu">
         <div className="cont-menu-img ">
            <div className="imgMenuBackground" style={{ backgroundImage: `url(${menuItem.imgMenu})` }}>
            </div>
            <h1 className="text-white text-center menu-item-name"><span>{menuItem.menuName.trim()}</span></h1>
         </div>
      </div>
   )
}

export default MenuCard;