import React, {useState} from 'react';
import logo from '../images/logo-desktop.png';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nav = () => {

    const [currentStatus, setCurrentStatus] = useState(false);

    const toggleClass = (e) => {
        e.preventDefault();
        setCurrentStatus(!currentStatus);
    }

    AOS.init();

    return(

        <div className='header-div'>
            <header>
                <div className='logo'>
                    <NavLink to="/home"><img src={logo} alt="Spot Digital Inc. logo" /></NavLink>
                </div>

                <div className='menu' >
                    <div className="nav-icon" onClick={toggleClass} id={currentStatus && 'active'}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div> 

                
                <nav className='desktop-menu'>
                    <ul>
                        <li>
                            <NavLink to="/">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">CONTACT</NavLink>
                        </li>
                    </ul>
                </nav>
                
            </header>
            
            <nav className='mobile-menu' id={currentStatus && 'open'}>
                <div className='overlay'>
                    <ul>
                        <li onClick={toggleClass}>
                            <NavLink to="/home">HOME</NavLink>
                        </li>
                        <li onClick={toggleClass}>
                            <NavLink to="/about">ABOUT</NavLink>
                        </li>
                        <li onClick={toggleClass}>
                            <NavLink to="/contact">CONTACT</NavLink>
                        </li>
                    </ul>
                    <div className='contact-info'>
                        <p>Get In Touch</p>
                        <p>hello@spotdigital.ca</p>
                    </div>
                </div>
            </nav>

        </div>

    );

}

Nav.defaultProps = {
    cancel: false
}

export default Nav;
