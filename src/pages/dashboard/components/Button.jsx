import React from 'react'

const Button = ({color, bgColor, text, borderRadius, size, action}) => {
  return (
    <button type='button'
      style={{backgroundColor: bgColor, color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={action}
    >
      {text}
    </button>
  )
}

export default Button