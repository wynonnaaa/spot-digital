import React from 'react';
import { NavLink } from 'react-router-dom';


const About = () => {

    return(

        <div className='about-wrapper'>

            <div className='about-header'>
                <h1 className='page-title'>About Us</h1>
                <h1>Redefining marketing + helping ambitious business thrive in today's market.</h1>
            </div>

            <div className='about-body'>
                <p>We are passionate and dedicated digital marketers committed to learning the dynamic nature of affiliate marketing. We started Spot Digital because we found affiliate marketing to be extremely underutilized by most small businesses, especially brick-and-mortar stores. We believe affiliate marketing can help small businesses compete with big box stores, so we have made it our mission to make performance marketing accessible to businesses.</p>
                <p>We specialize in helping local businesses scale their e-commerce revenue without risk. If your business is ready to experience e-commerce growth, contact us today.</p>
            </div>
            <NavLink to='/contact' className='yellow-btn'>
                    <p>Let's Connect</p>
            </NavLink>
        </div>

    );

}

export default About;