import React from 'react'

export default function Card({item}) {
  return (
    <div className='card_container'>      
      <img src={item.coverImg} className="img_card"></img>
      <div className="text_container">
        <span className='ico-text_container'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <h5 className='location'>{item.location}</h5>
          <h5 className='maps'>View on Google Maps</h5>
        </span>

        <h1 className='card_title'>{item.title}</h1>
        <h5 className='card_date'>{item.date}</h5>
        <h5 className='card_description'>{item.description}</h5>
      </div>
    </div>
  )
}
