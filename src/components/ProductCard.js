import React from 'react';

let ProductCard = ({productItem}) => {
   return (
      <div className="col-12 col-md-5 col-lg-3 px-0 mb-3 cont-card-product">
         <div className="card-product px-4 py-2 mt-0">
            <img className="image-product-card mt-2" src={productItem.imgProduct} />
            <div>
               <p className="product-name-card mt-4 mb-2  col-12 px-0">{productItem.productName}</p>
               <span className=" product-categorie-card">{productItem.category}</span>
            </div>
            <div className="cont-footer-product-cart mt-2">
               <span className="mx-0 product-price-card">{"$" + parseFloat(productItem.price).toFixed(2)}</span>
               <button className="btn btn-light rounded-circle btn-cart p-0">
                  <svg className="cart-plus" viewBox="0 0 354 323" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" clipRule="evenodd" d="M334.082 55.927C339.291 55.927 344.166 58.2202 347.456 62.2192C350.746 66.2176 352.031 71.4095 350.98 76.4607L337.003 143.654C347.577 155.446 354 170.972 354 187.984C354 224.868 323.811 254.769 286.571 254.769C275.623 254.769 265.284 252.184 256.142 247.598H101.694C93.5463 247.598 86.4399 241.861 84.7958 233.958L43.0565 33.2837L5.19285 17.0054C0.823759 15.1275 -1.18203 10.0954 0.716024 5.76599C2.61202 1.43797 7.69202 -0.54865 12.0632 1.33195L49.9261 17.6096C55.0733 19.8232 58.8214 24.3932 59.9543 29.8359L65.3809 55.927H334.082ZM234.577 230.51C228.682 223.448 224.226 215.164 221.653 206.1H96.6171L101.694 230.51H234.577ZM219.15 189.013C219.145 188.671 219.143 188.328 219.143 187.984C219.143 178.669 221.068 169.798 224.547 161.743H146.419C141.654 161.743 137.792 157.918 137.792 153.199C137.792 148.48 141.654 144.655 146.419 144.655H235.259C247.626 130.301 266.026 121.2 286.571 121.2C299.232 121.2 311.077 124.656 321.199 130.668L334.082 73.0148L68.9354 73.0142L93.0632 189.013H219.15ZM263.31 100.287H139.69C134.925 100.287 131.063 104.112 131.063 108.831C131.063 113.55 134.926 117.375 139.69 117.375H263.31C268.074 117.375 271.936 113.55 271.936 108.831C271.936 104.112 268.074 100.287 263.31 100.287ZM116.42 292.018C116.42 275.143 130.281 261.414 147.319 261.414C164.356 261.414 178.218 275.143 178.218 292.018C178.218 308.893 164.357 322.622 147.319 322.622C130.281 322.622 116.42 308.893 116.42 292.018ZM133.672 292.017C133.672 299.469 139.794 305.533 147.319 305.533C154.843 305.533 160.966 299.471 160.966 292.017C160.966 284.565 154.843 278.501 147.319 278.501C139.795 278.501 133.672 284.564 133.672 292.017ZM224.803 292.018C224.803 275.143 238.665 261.414 255.702 261.414C272.74 261.414 286.601 275.143 286.602 292.018C286.602 308.893 272.74 322.622 255.702 322.622C238.665 322.622 224.803 308.893 224.803 292.018ZM242.056 292.017C242.056 299.469 248.177 305.533 255.702 305.533C263.227 305.533 269.349 299.471 269.349 292.017C269.349 284.565 263.227 278.501 255.702 278.501C248.178 278.501 242.056 284.564 242.056 292.017ZM280.441 221.747V194.056H248.684C245.91 194.056 243.662 191.274 243.662 187.842C243.662 184.41 245.91 181.628 248.684 181.628H280.441V150.46C280.441 147.713 283.249 145.486 286.715 145.486C290.18 145.486 292.989 147.713 292.989 150.46V181.628H320.659C323.432 181.628 325.681 184.41 325.681 187.842C325.681 191.274 323.433 194.056 320.659 194.056H292.989V221.747C292.989 224.494 290.18 226.721 286.715 226.721C283.25 226.721 280.441 224.494 280.441 221.747Z" fill="#00754A" />
                  </svg>
               </button>
            </div>
         </div>
      </div>
   )
}

export default ProductCard;