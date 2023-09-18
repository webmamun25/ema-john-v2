import React from 'react'
import './Cart.css'
function Cart({cart}) {
    // const cart=props.cart
    // const {cart}=props.cart
    console.log(cart)
    let total=0
    let totalshipping=0
    let quantity=0
    for(const product of cart){
    //    product.quantity=product.quantity||1
       total=total+product.price*product.quantity
       totalshipping=totalshipping+product.shipping
       quantity=quantity+product.quantity 

    }
    const tax=total*7/100
    const grandtotal=total+totalshipping+tax
    return (
        <div className='cart'>
             <h3>Order Summary</h3>
            <p>Selected items:{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping:{totalshipping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <h6>Grand Total:${grandtotal.toFixed(2)}</h6>
        </div>
    )
}

export default Cart
