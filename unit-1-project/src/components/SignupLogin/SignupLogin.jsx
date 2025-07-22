import React from 'react'
import {useState} from 'react'
import Button from '../Button/Button';
import Form from '../Form/Form';

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
 
  const handleForm = (e, setError) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    
    const error = validateForm({ name, email, password });
    if (error) {
      setError(error);
    } else {
      setError('');
      onAuthSuccess();
    }
  };
  
  return (
    <div className="login-signup">
      <Form
        title="Log-in"
        onSubmit={(e) => handleForm(e, setLoginError)}
        error={loginError}
        buttonText="Login"
      />
      <Form
        title="Sign-up"
        onSubmit={(e) => handleForm(e, setSignupError)}
        error={signupError}
        buttonText="Sign-Up"
      />
    </div>
  )
}

export default SignupLogin
