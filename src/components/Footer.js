import React from 'react';
import Logo from '../images/logo-white.png';


const Footer = () => {

    return(
        <footer>
            <div className='logo'> 
                <div className='img-logo'>
                    <img src={Logo} alt='Logo' />
                </div>
                <div className='text-logo'>
                    <p className='footer-blurb'>Passionate and dedicated digital marketers to help your business grow.</p>
                </div>
            </div>
            <div className='copyright-div'>
                <p className='copyright'>&#174; SPOT DIGITAL 2020 &bull; ALL RIGHTS RESERVED &bull; PRIVACY POLICY</p>
            </div>
        </footer>
    );

}

export default Footer;