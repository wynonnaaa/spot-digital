import React from 'react';
import { NavLink } from 'react-router-dom';
import error from '../images/error.png';

const PageNotFound = () => {

    return(

        <div className='error-wrapper'>

            <div className='image'>
                <img src={error} alt="404" />
            </div>
            <div className='content'>
                <h1 className='main'>Oops... Page not found!</h1>
                <p>It looks like this page doesn't exist. Maybe try one of the other pages!</p>
                <NavLink to='/m/home' className='yellow-btn'>
                        <p>Back to Home</p>
                </NavLink>
            </div>

        </div>

    );

}

export default PageNotFound;