import React from 'react'
import './offer.css'
import Image from '../Assets/product_24.png'

const offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclusive<br/> Offer For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={Image} alt="" />
        </div>
    </div>
  )
}

export default offer