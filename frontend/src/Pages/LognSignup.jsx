import React from 'react'
import './CSS/LoginSignup.css'
const LognSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text"  placeholder='Your Name'/>
          <input type="email" name="" id="" placeholder='Email Address' />
          <input type="password" placeholder='Password' name="" id="" />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already Have An Account?<span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing, i agree to teh terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LognSignup