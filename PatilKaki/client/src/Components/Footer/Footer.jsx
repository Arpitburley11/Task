import './Footer.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='foot-flex' >
                    <h1>You can grow faster than you think!</h1>
                    <p>Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.</p>
                    <span>Get started with Crest</span>
                </div>
                <div className="wrapper">
                    <div className="foot-row">
                        <div className="foot-col col1">
                            <img src="/assets/logo1.png" alt="Crest AI Logo" />
                            <p>CleverBooks is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</p>
                        </div>
                        <div className="foot-col col2">
                            <span>Explore</span>
                            <div className='foot-link'>
                                <a href='/'>Product</a>
                                <a href='/'>Pricing</a>
                                <a href='/'>Customer Stories</a>
                                <a href='/'>Career</a>
                            </div>
                        </div>
                        <div className="foot-col col3">
                            <span>Learn</span>
                            <div className='foot-link'>
                                <a href='/'>About Us</a>
                                <a href="/">Blog</a>
                            </div>
                        </div>
                        <div className="foot-col col4">
                            <span>Contact CleverBooks</span>
                            <div className='foot-link'>
                                <a href="mailto:sales@getcrestai">sales@getcrestai</a>
                                <p >Registered Office:<br /> 1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102</p>
                                <p>Corporate Office:<br /> 291, All Time Space, 4th Floor, 15th A Cross, Sector-6, HSR Layout, Bengaluru, India. 560102</p>
                            </div>
                            <div className="footer-social-icon">
                                <a href='/'><i class="ri-twitter-x-line"></i></a>
                                <a href='/'><i class="ri-facebook-fill"></i></a>
                                <a href='/'><i class="ri-instagram-line"></i></a>
                                <a href='/'><i class="ri-linkedin-fill"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className='footer-cont'>
                        &copy; Copyright 2024 CleverBooks
                        <a href='/'>Terms of Service</a> 
                        <a href='/'>Privacy Policy</a>
                    </div>
                    <p>Conifer Innovations Private Limited <br /> CIN: U72900KA2022PTC163___</p>
                </div>
            </div>
        </div>
    )
}
