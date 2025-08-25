import React from 'react'

const Button = ({btnText}) => {
  return (
    <button className='btn btn-primary text-xl rounded-[10px] w-[198px] h-[60px] text-white'>{btnText}</button>
  )
}

export default Button