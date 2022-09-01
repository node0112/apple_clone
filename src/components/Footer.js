import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer flex column center'>
        <nav className='footer-nav-container flex'>
            <ul className='footer-list flex column'>
                <li><div className='li-header'>Shop and Learn</div></li>
                <li><div className='li-link'>Store</div></li>
                <li><div className='li-link'>Mac</div></li>
                <li><div className='li-link'>iPad</div></li>
                <li><div className='li-link'>iPhone</div></li>
                <li><div className='li-link'>Watch</div></li>
                <li><div className='li-link'>AirPods</div></li>
                <li><div className='li-link'>TV & Home</div></li>
                <li><div className='li-link'>AirTag</div></li>
                <li><div className='li-link'>Accessories</div></li>
                <li><div className='li-link'>Gift Cards</div></li>
            </ul>
            <ul className='footer-list flex column'>
                <li><div className='li-header'>Services</div></li>
                <li><div className='li-link'>Apple Music</div></li>
                <li><div className='li-link'>Apple TV+</div></li>
                <li><div className='li-link'>Apple Fitness+</div></li>
                <li><div className='li-link'>Apple News+</div></li>
                <li><div className='li-link'>Apple Arcade</div></li>
                <li><div className='li-link'>iCloud</div></li>
                <li><div className='li-link'>Apple One</div></li>
                <li><div className='li-link'>Apple Card</div></li>
                <li><div className='li-link'>Apple Books</div></li>
                <li><div className='li-link'>Apple Podcasts</div></li>
                <li><div className='li-link' style={{marginBottom: '20px'}}>App Store</div></li>
                <li><div className='li-header'>Account</div></li>
                <li><div className='li-link'>Manage Your Apple ID</div></li>
                <li><div className='li-link'>Apple Store Account</div></li>
                <li><div className='li-link'>iCloud.com</div></li>
            </ul>
            <ul className='footer-list flex column'>
                <li><div className='li-header'>Apple Store</div></li>
                <li><div className='li-link'>Find a Store</div></li>
                <li><div className='li-link'>Genius Bar</div></li>
                <li><div className='li-link'>Today at Apple</div></li>
                <li><div className='li-link'>Apple Camp</div></li>
                <li><div className='li-link'>Apple Store App</div></li>
                <li><div className='li-link'>Refurbished and Clearance</div></li>
                <li><div className='li-link'>Financing</div></li>
                <li><div className='li-link'>Apple Trade in</div></li>
                <li><div className='li-link'>Order Status</div></li>
                <li><div className='li-link'>Shopping Help</div></li>
            </ul>
            <ul className='footer-list flex column'>
                <li><div className='li-header'>For Business</div></li>
                <li><div className='li-link'>Apple and Business</div></li>
                <li><div className='li-link' style={{marginBottom: '20px'}}>Shop for Business</div></li>
                <li><div className='li-header'>For Education</div></li>
                <li><div className='li-link'>Apple and Education</div></li>
                <li><div className='li-link'>Shop for K-12</div></li>
                <li><div className='li-link' style={{marginBottom: '20px'}}>Shop for College</div></li>
                <li><div className='li-header'>For Healthcare</div></li>
                <li><div className='li-link'>Apple in Healthcare</div></li>
                <li><div className='li-link'>Health on Apple Watch</div></li>
                <li><div className='li-link' style={{marginBottom: '20px'}}>Health Records on iPhone</div></li>
                <li><div className='li-header'>For Government</div></li>
                <li><div className='li-link'>Shop for Government</div></li>
                <li><div className='li-link' style={{marginBottom: '20px'}}>Shop for Veterans and Military</div></li>
            </ul>
            <ul className='footer-list flex column'>
                <li><div className='li-header'>Apple Values</div></li>
                <li><div className='li-link'>Accessibility</div></li>
                <li><div className='li-link'>Education</div></li>
                <li><div className='li-link'>Environment</div></li>
                <li><div className='li-link'>Inclusion and Diversity</div></li>
                <li><div className='li-link'>Privacy</div></li>
                <li><div className='li-link'>Racial Equity and Justice</div></li>
                <li><div className='li-link' style={{marginBottom: '20px'}}>Supplier Responsibility</div></li>
                <li><div className='li-header'>About Apple</div></li>
                <li><div className='li-link'>Newsroom</div></li>
                <li><div className='li-link'>Apple Leadership+</div></li>
                <li><div className='li-link'>Career Opportunites+</div></li>
                <li><div className='li-link'>Investors</div></li>
                <li><div className='li-link'>Ethics and Compliance</div></li>
                <li><div className='li-link'>Events</div></li>
                <li><div className='li-link'>Contact Apple</div></li>
            </ul>
        </nav>
        <div className='footer-text'  style={{width: '70%', paddingBottom: '15px',borderBottom: '1px solid #6e6e73'}}>More ways to shop: Find an notApple Store or other retailer near you. Or call 1-800-MY-APPLE.</div>
        <div className='footer-text flex'  style={{width: '70%', paddingBottom: '15px',fontSize: '15px'}}>Copyright © 2022 Apple Inc. All rights reserved.      Privacy Policy | Terms of Use | Sales and Refunds | Legal Site Map  <div style={{marginLeft:'12%'}}> United States</div></div>
    </div>
  )
}

export default Footer