import React, {useState} from 'react';
import myImages from './Images/cp.jpg';
import Card from './Card';

export default function Home() {
   
  const myImage = myImages
  const styleSz = { 
    width: '10rem',
    borderRadius: '40%'
 };
  const name = 'Abdulla Ahmed';

  return (
    <Card images= {myImages} style={styleSz} name={name}/>

  );
}
