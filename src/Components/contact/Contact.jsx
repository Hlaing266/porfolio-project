import { useState } from "react";
import "./Contact.css";
export default function Contact (){


const [message,setMessage]=useState(false);

const handleSubmit=(e)=>{
    e.preventDefault();
    setMessage(true);
}

    return (
        <div className="contact" id="contact">
            <div className="contact-left">
                <img src="Photo and Icon/shake.svg" alt="" />
            </div>
            <div className="contact-right">
                <h2>Contact</h2>
                <form  onSubmit={handleSubmit}>
                    <input type="text"placeholder="Email" />
                     <textarea placeholder="Massage"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks,I'll reply You;</span>}
                  
                </form>
            </div>
        </div>
    )
}