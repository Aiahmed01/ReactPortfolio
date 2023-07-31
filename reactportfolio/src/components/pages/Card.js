import React from 'react'
import mern from '../pages/Images/Mern.png'
export default function Card(props) {
    const bg = {
      backgroundColor:'rgb(168, 199, 202)'
    }
    const handleImgClick = ()=> {
      console.log('I have some familiarity with those 😆')
    }
  return (
    <>
     <div className='d-flex justify-content-center m-3'>


<div className="card" style={bg}>

  <img src={props.images} style={props.style} className="card-img-top m-4" alt="Card image" />

  <div className="card-body">

    <h1 className="card-title">Hello & Welcome,</h1>

    
    <p className="card-text" >
       I'm {props.name}. 🤓</p>
      <p>I'm a Software Engineer AKA Full Stack application developer. </p>
      <p>passionate about creating beautiful and functional websites.</p>
      <p>click Portfolio to see some of my work 🏔 ⛰ 🌋</p>
    <img src={mern}  onClick = {handleImgClick} className="mern-image btn btn-primary"/>
   
  </div>
</div>

</div>
    </>
  )
}
