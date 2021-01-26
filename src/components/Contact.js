import React from 'react';


const Contact = () => {

    
    return (
       
        <div className='contact-wrapper'>

            <div className='contact-header'>
                <h1 className='page-title'>Contact Us</h1>
                <h1>Don't be shy, <br></br>Say hi!</h1>
                <p>Let us help. Send us an email and our team will reach out as soon as we can!</p>
            </div>

            <div className='contact-body'>
                <div className='info email'>
                    <h3>Email</h3>
                    <a href = "mailto: info@spotdigitalinc.com">branden@spotdigitalinc.com</a>
                </div>
            </div>

        </div>

    );

}

export default Contact;