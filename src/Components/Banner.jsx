import React from 'react'
import bannerImage from '../assets/banner.jpg';

function Banner() {
  return (
    <img
      src={bannerImage}
      alt="Banner de Game of Thrones"
      style={{ width: '100%', height: '400px', objectFit: 'cover' }}
    />
  )
}

export default Banner
