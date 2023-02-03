import React from 'react';
import './Header.css';
import logo from '../img/image1.svg';
import basket from '../img/Vector.svg'
import { Link } from 'react-router-dom';



export default function Header() {
  return (
      <div className='header'>
      <div className='header_wrapper'>
        <div className='logo_button'>
          <Link to='/'><img src={logo} alt='logo' width='72' height='72'/></Link>
        <button className='btn'>Catalog</button>
        </div>
        <nav className='menu'>
          <ul className='menu_wrapper'>
            <Link to='/category' className='list'>Categories</Link>
            <li className='list'>Coupon</li>
            <li className='list'>Stock</li>
            <li className='list'>Contacts</li>
          </ul>
          <img src={basket} alt='basket' width='26.55' height='29.4'/>
        </nav>
        
      </div>
    </div>
  )
}
