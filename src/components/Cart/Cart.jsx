import React from 'react'
import './Cart.css'
function Cart({cart}) {
    // const cart=props.cart
    // const {cart}=props.cart
    console.log(cart)
    let total=0
    let totalshipping=0
    for(const product of cart){
       total=total+product.price
       totalshipping=totalshipping+product.shipping
    }
    const tax=total*7/100
    const grandtotal=total+totalshipping+tax
    return (
        <div className='cart'>
             <h3>Order Summary</h3>
            <p>Selected items:{cart.length}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping:{totalshipping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <h6>Grand Total:{grandtotal.toFixed(2)}</h6>
        </div>
    )
}

export default Cart
