import React from 'react';
import logo from './res/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown,faCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function Header(){
    const chaviron_icon=<FontAwesomeIcon icon={faChevronDown} style={{color: "#f5f5f5",}} />;
    const eclipse= <FontAwesomeIcon icon={faCircle} className='eclipse'/>
    return(
        <div>
            <div className='Top-header'> <p>Navigate your ideal career path with tailored expert advice </p> <button>Contact Expert</button></div>
            <div className='main-header'>
                <div className='right-section'>
                <a href='https://home.accredian.com/' target='_blank' className='logo'><img src={logo} alt='Logo' /> </a>
                <button>Courses {chaviron_icon}</button>
                      </div>
                <div className='left-section'>
                    <p>Refer & Earn</p>
                    <p>Resources</p>
                    <p>About Us</p>
                    <a href='https://accredian.com/login'>
                        <button>Login</button>
                    </a>
                    <a href='https://trial.accredian.com/'>
                        <button className='tryff'>Try for free</button>
                    </a>
                </div>
            </div>
            <div>
                <div className='Third-header'>
                    
                    <a href='#' ><p className='selected'>Refer</p> </a>
                    <a href='#'><p>Benefits</p> </a>
                    <a href='#'><p>FAQs</p> </a>
                    <a href='#'><p>Support</p> </a>
                    <p className='selected'>{eclipse}</p>
                </div>
            </div>
        </div>
    )
}

export default Header;