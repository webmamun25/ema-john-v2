import React from 'react'
import './ReviewItem.css'
const ReviewItem = ({product,handleRemoveFromcart}) => {
    const {img,name,quantity,price,id}=product
    return ( 
        <div className='review-item'>
           <img src={img} alt="" />
           <div className='review-details'>
               <p className='product-title'>{name}</p>
               <p>Price:<span className='orange-text'>${price}</span></p>
               <p>Quantity:<span className='orange-text'>${quantity}</span></p>
               
           </div>
           <button className='button-delete' onClick={()=>handleRemoveFromcart(id)}><i className="fa-regular fa-trash-can"></i></button>
        </div>
     );
}
 
export default ReviewItem;


