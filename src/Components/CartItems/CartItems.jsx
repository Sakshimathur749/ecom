import React, { useContext, } from 'react'
import './CartItems.css'
import { Shopcontext } from '../../context/Shopcontext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { all_product, cartItems, RemoveFromCart,getTotalCartAmount } = useContext(Shopcontext)

    return (
        <div className='cart-items'>
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div key={e.id}>
                        <div className="cartitems-format cartitem-format-main">
                            <img src={e.image} className='carticon-product-icon' alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'> {cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { RemoveFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null
            })}
          
            <div className='cartitems-down'>
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>${ getTotalCartAmount()}</p>

                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount() }</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cartitem-promocode'>
                    <p>If you have a promo code, Enter it here</p>
                    <div className='cartitem-promobox'>
                        <input type="text" name="" id="" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems