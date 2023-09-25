import React, { useEffect, useState } from 'react'

import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';

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
        const savedcart=[]
        
        for(const id in storedCart){
            const addedproduct=products.find(product=>product.id==id)
            if(addedproduct){
                const quantity=storedCart[id]
                addedproduct.quantity=quantity
                savedcart.push(addedproduct)
            }
            
        }
        setCart(savedcart)
    },[products])
    const handleaddTocart=(product)=>{
        // const newCart=[...cart,product]
        console.log(product)
        let newCart=[];
        const exists=cart.find(pd=>pd.id==product.id)
        if(!exists){
            product.quantity=1
            newCart=[...cart,product]
            console.log(newCart)
        }
        else{
            exists.quantity=exists.quantity+1;
            const remaining=cart.filter(pd=>pd.id!=product.id)
            newCart=[...remaining,exists]
        }
        setCart(newCart)
        addToDb(product.id)
    }
    const handleClearcart =()=>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
         
            <div className="products-container">
               
                {
                    products.map(product=><Product key={product.id} product={product} handleaddTocart={handleaddTocart} ></Product>)
                }
            </div>
       
        <div className="cart-container">
           <Cart cart={cart} handleClearcart={handleClearcart} ></Cart>
        </div>
        </div>
    )
}

export default Shop
