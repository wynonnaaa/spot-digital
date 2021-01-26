import React, {useState} from 'react';
import axios from 'axios';
// import { NavLink } from 'react-router-dom';


const Contact = () => {

    const [currentFirstName, setCurrentFirstName] = useState('');
    const [currentLastName, setCurrentLastName] = useState('');
    const [currentEmail, setCurrentEmail] = useState('');
    const [currentPhone, setCurrentPhone] = useState('');
    const [currentMessage, setCurrentMessage] = useState('');
    
    const handleFirstNameChange = (e) => {
        e.preventDefault();
        console.log(e.target);
        setCurrentFirstName(e.target.value);
        console.log(e.target.value);
    };
    
    const handleLastNameChange = (e) => {
        e.preventDefault();
        console.log(e.target);
        setCurrentLastName(e.target.value);
        console.log(e.target.value);
    };

    const handleEmailChange = (e) => {
        e.preventDefault();
        console.log(e.target);
        setCurrentEmail(e.target.value);
        console.log(e.target.value);
    };

    const handlePhoneChange = (e) => {
        e.preventDefault();
        console.log(e.target);
        setCurrentPhone(e.target.value);
        console.log(currentPhone);
    };
    
    const handleMessageChange = (e) => {
        e.preventDefault();
        console.log(e.target);
        setCurrentMessage(e.target.value);
        console.log(currentMessage);
    };

    const resetForm = () => {
        setCurrentFirstName('');
        setCurrentLastName('');
        setCurrentEmail('');
        setCurrentPhone('');
        setCurrentMessage('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
          method: "POST", 
          url:"http://localhost:3002/send", 
          data:  {}
        }).then((response)=>{
          if (response.data.status === 'success') {
            alert("Message Sent."); 
            resetForm();
          } else if (response.data.status === 'fail') {
            alert("Message failed to send.");
            console.log('message failed to send');
          }
        })
    }

    
    return (
        <div className='ContactForm'>
            <form id='contact-form' method='POST' onSubmit={handleSubmit} noValidate>
                <div className='row'>
                <div className='col-6'>
                    <label htmlFor="firstname">First Name</label>
                    <input
                    type='text'
                    name='firstname'
                    value={currentFirstName}
                    className='form-control formInput'
                    onChange={handleFirstNameChange}
                    placeholder='First Name'
                    noValidate
                    ></input>
                </div>
                
                <div className='col-6'>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                    type='text'
                    name='lastname'
                    value={currentLastName}
                    className='form-control formInput'
                    onChange={handleLastNameChange}
                    placeholder='Last Name'
                    noValidate
                    ></input>
                </div>

                <div className='col-6'>
                    <label htmlFor="email">Email</label>
                    <input
                    type='email'
                    name='email'
                    value={currentEmail}
                    className='form-control formInput'
                    onChange={handleEmailChange}
                    placeholder='Email'
                    noValidate
                    ></input>
                </div>
                </div>

                <div className='row'>
                <div className='col-6'>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                    type='phone'
                    name='phone'
                    value={currentPhone}
                    className='form-control formInput'
                    onChange={handlePhoneChange}
                    placeholder='Phone'
                    noValidate
                    ></input>
                </div>

                <div className='col-6'>
                    <label htmlFor="message">Message</label>
                    <textarea
                    rows='5'
                    name='message'
                    value={currentMessage}
                    className='form-control formInput'
                    onChange={handleMessageChange}
                    placeholder='Message'
                    noValidate
                    ></textarea>
                </div>
                </div>
                <button className='submit-btn' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );

}

export default Contact;