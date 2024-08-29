import React from 'react'
import './Breadcrums.css'
import arrow from '../Assets/Images/arrowicon2.png'

const Breadcrums = (props) => {
    const {product} = props
  return (
    <div className='breadcrums'>
        Home <img src={arrow} alt="" /> SHOP  <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums