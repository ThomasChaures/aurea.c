import React from 'react'

const Card = ({children, className, onClick}:{children: React.ReactNode, className: string, onClick?: () => void}) => {
  return ( 
    <div onClick={onClick} className={`p-6 bg-white border rounded-3xl ${className} border-[#d1d1d1]`}>{children}</div>
  )
}

export default Card