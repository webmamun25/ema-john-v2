import React from 'react'
import './Cart.css'
function Cart(props) {
    // const cart=props.cart
    // const {cart}=props.cart
    console.log(props.handleClearcart)
    let total=0
    let totalshipping=0
    let quantity=0
    for(const product of props.cart){
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
        
            <button onClick={props.handleClearcart} className='btn-clr-cart'>Clear cart <i className="fa-regular fa-trash-can"></i> </button>
        </div>
    )
}

export default Cart
