import React from 'react'
import './register.css'

function Register() {
  return (
    <div className='register'>
      <div className="registerwrapper">
        {/* register LEFT */}
        <div className="registerleft">
            <h3 className='registerlogo'>DANA SOCIAL</h3>
            <span className="registerdesc">connect with friends and the world around you</span>
        </div>
        {/* register RIGHT */}
        <div className="registerright">
          <div className="registerbox">
          <input placeholder='username' className='registerinput' />
            <input placeholder='Email' className='registerinput' />
            <input placeholder='password' className='registerinput' />
            <input placeholder='re-enter password' className='registerinput' />
            <button className="registerbutton">Sign up</button>
            <button className="loginregisterbutton">Log into account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
