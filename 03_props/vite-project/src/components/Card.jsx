import React from 'react'

const Card = (props,age) => {
  return (
      <div className='card'>
        <img src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0" alt="profile" />

        <h1>{props.user}</h1>
        <h2>{props.age}</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <button>View Profile</button>
     
      
    </div>
  )
}

export default Card