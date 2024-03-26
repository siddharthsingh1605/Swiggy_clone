import React from 'react'
import {CDN_URL} from '../Utils/constants'

const ResCards = ({resData}) => {
  const { name, locality, areaname, costForTwo, avgRating, cloudinaryImageId, deliveryTime } = resData.info;
  return (
    <div className='res-card'>
      <img className='res-logo' src={CDN_URL + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h3>{locality}</h3>
      <h4>{areaname}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
      <h5>{avgRating}</h5>
    </div>
  )
}

export default ResCards
