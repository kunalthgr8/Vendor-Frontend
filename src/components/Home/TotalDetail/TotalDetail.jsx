import React from 'react'
import "./TotalDetail.css"

function TotalDetail({heading,image,amount}) {
  return (
    <div className='total-detail'>
        <div className='heading-total-detail'>{heading}</div>
        <div className='detail-total-detail'>
            <img src={image} alt="image" />
            <h3>{amount}</h3>
        </div>
    </div>
  )
}

export default TotalDetail