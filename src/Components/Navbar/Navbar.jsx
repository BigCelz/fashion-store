import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/Images/shoppinglogo.jpg'
import cart from '../Assets/Images/cart.jpg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'




const Navbar = () => {
    const [menu, setMenu] = useState("shop")

    // funtion for count with context api
    const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" width={80} />
        <p>Kaida</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => {setMenu("shop")}}> <Link style={{textDecoration : 'none'}} to='/'>shop</Link> {menu === "shop" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("men")}}><Link style={{textDecoration : 'none'}} to='/men'>men</Link> {menu === "men" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("women")}}><Link style={{textDecoration : 'none'}} to='/women'>women</Link>{menu === "women" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration : 'none'}} to='/kids'>kids</Link>{menu === "kids" ? <hr/> : <></>}</li>
      </ul>

      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        
        <Link to='/cart'><img src={cart} alt="" width={50} /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
   
    </div>
  );
}

export default Navbar