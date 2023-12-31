import React from 'react'

import './Product.css'

function Product(props) {

   
    const {img,name,seller,quantity,price,ratings}=props.product
    const handleaddTocart=props.handleaddTocart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className="product-name">{name}</h6>
            <p>Price:${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Rating:{ratings} stars</p>
            </div>
            <button onClick={()=>handleaddTocart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    )
}

export default Product
