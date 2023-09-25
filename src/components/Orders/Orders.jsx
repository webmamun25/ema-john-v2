import React, { useState } from 'react'
import Cart from '../Cart/Cart'
import { useLoaderData } from 'react-router-dom'
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
function Orders() {
    const savedCart=useLoaderData();
    const [cart,setCart]=useState(savedCart)
    
    const handleRemoveFromcart=(id)=>{
        const remaining=cart.filter(pd=>pd.id!=id)
        setCart(remaining)
        removeFromDb(id)
    }
    const handleClearcart =()=>{
        setCart([])
        deleteShoppingCart()
    }
    
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {/* <h3>Orders page:{cart.length}</h3> */}
                {
                    cart.map(product=><ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveFromcart={handleRemoveFromcart}
                    
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleClearcart={handleClearcart}    ></Cart>
            </div>
        </div>
    )
}

export default Orders
