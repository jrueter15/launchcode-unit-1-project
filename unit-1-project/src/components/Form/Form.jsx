import React from 'react'
import Button from '../Button/Button';

const Form = ({title, onSubmit, error, buttonText}) => {
  return (
    <div className="inputs">
        <h1>{title}</h1>
        <form onSubmit={onSubmit}>
            <div className="input">
                <input type="text" name="name" placeholder="Name" required autoComplete="name" />
            </div>
            <div className="input">
                <input type="email" name="email" placeholder="Email" required autoComplete="email" />
            </div>
            <div className="input">
                <input type="password" name="password" placeholder="Password" required autoComplete="current-password" />
            </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button type="submit" text={buttonText} />
      </form>      
    </div>
  )
}

export default Form
