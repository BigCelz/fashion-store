import React from 'react'
import './Popular.css'
import data_product from '../Assets/Data'
import Item from '../Item/Item'


const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />

        <div className='popular-item'>
          {data_product.map((item) =>  {
            return <Item 
               key = {item.id}
               id={item.id}
               name={item.name}
               image={item.image}
               new_price={item.new_price}
               old_price={item.old_price}
            />
          })}

          {/* go to item.css to edit the image */}
        </div>
    </div>
  )
}

export default Popular

// after providing all the props, we will mount this popular page to our shop page so it will be on our hero section