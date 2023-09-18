import React, { useEffect, useState } from 'react'

import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

function Shop() {
    const [cart,setCart]=useState([])
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const storedCart=getShoppingCart()
        console.log(storedCart)
        for(const id in storedCart){
            const addedproduct=products.find(product=>product.id==id)
            if(addedproduct){
                const quantity=storedCart[id]
                addedproduct.quantity=quantity
            }
            
        }
    },[products])
    const handleaddTocart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
        addToDb(product.id)
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
