import React from 'react'

const Button = ({ styles, title }) => {
  return (
    <button type='button' 
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-lg text-primary outline-none rounded-xl ${styles}`}
    >
      {title}
    </button>
  )
}

export default Button