import React from 'react'
import "./InfoTickets.css"

function InfoTickets({heading,image,amount}) {
  return (
   <div className='ticket'>
    <div className='image'>
        <img src={image} alt={image} />
    </div>
    <div  className='detail-ticket'>
        <div className='heading'>{heading}</div>
        <div className='amount'>{amount}</div>
    </div>
   </div>
  )
}

export default InfoTickets