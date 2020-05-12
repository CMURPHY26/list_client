import React from 'react'

const Input = props => {
  const {handleChange, name, placeholder, title, type, value} = props
    return (
      <>
        <label htmlFor={name}>{title}</label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </>
    )
}

export default Input