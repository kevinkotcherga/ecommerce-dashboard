import React from 'react';
import './totalrevenue.scss'

const TotalRevenue = ({ array }) => {
  console.log(array)
  return (
    <div>
      <div className='total'>
        <span className='total__title'>Revenue</span>
        <span className='total__counter'>Counter €</span>
      </div>
    </div>
  )
}

export default TotalRevenue;
