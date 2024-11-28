import React from 'react'
import QR from '../../icons/QR'

const Button = () => {
  return (
    <button className='flex m-5 py-2 px-3 rounded-lg bg-black text-white font-bold items-center gap-1'>
      <QR />
      QR-код
    </button>
  )
}

export default Button