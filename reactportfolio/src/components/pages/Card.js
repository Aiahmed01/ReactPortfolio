import React from 'react'
import MernImage from './Images/Mern.png'
export default function Card(props) {
    const mern = MernImage
  return (
    <>
     <div className='d-flex justify-content-center m-1'>


<div className="card">

  <img src={props.images} style={props.style} className="card-img-top m-4" alt="Card image" />

  <div className="card-body">

    <h5 className="card-title">{props.name}</h5>

    
    <p className="card-text" >
      Hello, I'm {props.name}. 🤓</p>
      <p>I'm a Full Stack Engineer </p>
      <p>passionate about creating beautiful and functional websites.</p>
      <p>click Portfolio to see some of my work 🏔 ⛰ 🌋</p>
    <img src={mern}  className="mern-image btn btn-primary"/>
   
  </div>
</div>

</div>
    </>
  )
}
