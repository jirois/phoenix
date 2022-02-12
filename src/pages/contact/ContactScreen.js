import React from 'react';
import "./contact.css"

function ContactScreen(props) {
    return (
        <>
            <div className="form-message">
                <h2>Get in Touch</h2>
                <form >
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea row="10" col="5" 
                    placeholder="Type your messgage here..."></textarea>

                    <button type="submit">Submit</button>

                </form>
            </div>
            <div className="form-contact">
                <h2>Contact Support</h2>
                <form>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone" />
                    <div className="dropdown">
                    <input list="issues" />
                    <datalist id="issues">
                        <option value="Logging into account" />
                        <option value="Completing Payment" />
                        <option value="Viewing content" />
                        <option value="Uploading files" />
                        <option value="Other" />
                    </datalist>
                    </div>

                    <textarea col="10" row="4" 
                        placeholder="Let us know what you need help with..." ></textarea>
                
                    <button type="submit">Get in Touch</button>
                </form>

            </div>
            
       </>
    );
}

export default ContactScreen;