import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='Newsletter'>
      <h1>Get Exclusive offers on your Email</h1>
      <p>Subscribe to our newletter and stay updated </p>
      <div>
        <input type="email" placeholder='Enter your Email Id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter