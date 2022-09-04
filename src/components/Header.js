import React from 'react'
import logo from '../images/logo.png'


function Header({position}) {
  let placeHolder
  return (
    <div className='header' style={{position: position}}>
      <ul className='header-links flex'>
        <li className='header-li'><a onClick={placeHolder} className='header-link transition pointer'><img className='logo' src={logo} alt='logo'/></a></li>
        <li className='header-li'><a onClick={placeHolder} className='header-link transition pointer'>Store</a> </li>
        <li className='header-li'><a onClick={placeHolder} className='header-link transition pointer'>Mac</a> </li>
        <li className='header-li'><a onClick={placeHolder} className='header-link transition pointer'>iPad</a> </li>
        <li className='header-li'><a onClick={placeHolder} className='header-link transition pointer'>iPhone</a> </li>
        <li className='header-li'><a onClick={placeHolder} className='header-link transition pointer'>Watch</a> </li>
        <li className='header-li'><a onClick={placeHolder} className='header-link transition pointer'>Airpods</a> </li>
        <li className='header-li'><a onClick={placeHolder} className='header-link transition pointer'>TV & Home</a> </li>
        <li className='header-li'><a onClick={placeHolder} className='header-link transition pointer'>Only On Apple</a> </li>
        <li className='header-li'><a onClick={placeHolder} className='header-link transition pointer'>Accessories</a> </li>
        <li className='header-li'><a onClick={placeHolder} className='header-link transition pointer'>Support</a> </li>
        <li className='header-li'><a onClick={placeHolder} className='header-link transition pointer'><span class="material-icons">search</span></a></li>
        <li className='header-li'><a onClick={placeHolder} className='header-link transition pointer'><span class="material-icons">local_mall</span></a> </li>
        </ul>
    </div>
  )
}

export default Header