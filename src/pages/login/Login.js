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
          <div className="loginbox"></div>
        </div>
      </div>
    </div>
  )
}

export default Login
