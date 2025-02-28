import"./mailList.css";
import React from 'react'

const MailList = () => {
    return (
      <div className="mail">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailDesc">Sign up and we'll find the best deals for you</span>
        <div className="mailInputContainer">
          <input type="text" placeholder="Your Email" />
          <button>Sign Up</button>
        </div>
      </div>
    )
  }

export default MailList