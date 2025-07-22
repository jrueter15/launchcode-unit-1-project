import React from 'react'
import {useState} from 'react'
import Button from '../Button/Button';

const SignupLogin = ({onAuthSuccess}) => {
  const[loginError, setLoginError] = useState('');
  const[signupError, setSignupError] = useState('');

  const validateForm = ({ name, email, password }) => {
    if (!name || !email || !password) {
      return 'All fields are required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters.';
    }
    return null;
  };
 
  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    
    const error = validateForm({ name, email, password });
    if (error) {
      setLoginError(error);
    } else {
      setLoginError('');
      onAuthSuccess();
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    const error = validateForm({ name, email, password });
    if (error) {
      setSignupError(error);
    } else {
      setSignupError('');
      onAuthSuccess();
    }
  };
  
  return (
    <div className="login-signup">
      <div className='inputs'>
        <h1>
          Log-in
        </h1>
        <form onSubmit={handleLogin}>
          <div className='input'>
            <input type="text" name="name" placeholder="Name" required autoComplete="name"/>
          </div>
          <div className='input'>
            <input type="email" name="email" placeholder="Email" required autoComplete="email" />
          </div>
          <div className='input'>
            <input type="password" name="password" placeholder="Password" required autoComplete="password"/>
          </div>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}        
          <Button type="submit" text="Login" />
        </form>
      </div>

      
      <div className='inputs'>
        <h1>
          Sign-Up
        </h1>
        <form onSubmit={handleSignup}>
          <div className='input'>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className='input'>
            <input type="email" name="email" placeholder="Email" required/>
          </div>
          <div className='input'>
            <input type="password" name="password" placeholder="Password" required autoComplete="current-password"/>
          </div>
          {signupError && <p style={{ color: 'red' }}>{signupError}</p>}
          <Button type="submit" text="Login" />
        </form>
      </div>


    </div>
  )
}

export default SignupLogin
