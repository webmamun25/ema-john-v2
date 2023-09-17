import React, { useEffect, useState } from 'react'

import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

function Shop() {
    const [cart,setCart]=useState([])
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleaddTocart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
         
            <div className="products-container">
               
                {
                    products.map(product=><Product key={product.id} product={product} handleaddTocart={handleaddTocart} ></Product>)
                }
            </div>
       
        <div className="cart-container">
           <Cart cart={cart}></Cart>
        </div>
        </div>
    )
}

export default Shop
