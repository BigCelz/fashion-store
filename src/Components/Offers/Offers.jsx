import React from 'react'
import './Offers.css'
import heroimg3 from '../Assets/Images/heroimage3.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>EXCLUSIVE</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check Now</button>
        </div>

        <div className='offer-right'>
            <img src={heroimg3} alt="" />
        </div>
    </div>
  )
}

export default Offers