import React from 'react'

const Button = ({text, onClick, type="button", className=""}) => {
  return (
    <div className="button">
      <button
        type={type}
        onClick={onClick}
        className={`custom-button ${className}`}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
