import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact">
            <div className="wrapper">
            <div className="title">
                <h1>contact us form</h1>
            </div>
            <div className="contact-form">
            <div className="input-fields">
                    <input type="text" className="input" placeholder="Name" />
                    <input type="text" className="input" placeholder="Email Address" />
                    <input type="text" className="input" placeholder="Phone" />
                    <input type="text" className="input" placeholder="Subject" /> 
            </div>
                <div className="msg">
                    <textarea placeholder="Message"></textarea>
                    <button className="btn">send</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;