import React from 'react'

const Button = ({ icon, buttonName, onClick }) => {
  return (
    <div
      className=' p-2 bg-slate-500 rounded-lg cursor-pointer'
      onClick={onClick}
    >
      {icon}
      {buttonName}
    </div>
  )
}

export default Button;