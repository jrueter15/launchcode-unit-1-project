import React from 'react'

const SignupLogin = () => {
  return (
    <div className="login-signup">
      <h1>
        Log-in
      </h1>
      
      <div className='inputs'>
        <div className='input'>
          <input type="text" placeholder="Name" required/>
        </div>
        <div className='input'>
          <input type="email" placeholder="Email" required/>
        </div>
        <div className='input'>
          <input type="password" placeholder="Password" required/>
          </div>
      </div>

      <button type="submit">
        Login
      </button>

      <h1>
        Sign-Up
      </h1>
      
      <div className='inputs'>
        <div className='input'>
          <input type="text" placeholder="Name" required/>
        </div>
        <div className='input'>
          <input type="email" placeholder="Email" required/>
        </div>
        <div className='input'>
          <input type="password" placeholder="Password" required/>
          </div>
      </div>

      <button type="submit">
        Sign-up
      </button>

    </div>
  )
}

export default SignupLogin
