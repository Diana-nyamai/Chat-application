import React from 'react'
import './login.css'

function Login() {
  return (
    <div className='login'>
      <div className="loginwrapper">
        {/* LOGIN LEFT */}
        <div className="loginleft">
            <h3 className='loginlogo'>DANA SOCIAL</h3>
            <span className="logindesc">connect with friends and the world around you</span>
        </div>
        {/* LOGIN RIGHT */}
        <div className="loginright">
          <div className="loginbox">
            <input placeholder='Email' className='logininput' />
            <input placeholder='password' className='logininput' />
            <button className="loginbutton">log in</button>
            <span className="loginforget">forgot password?</span>
            <button className="button loginregisterbutton">create an account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
