import React, { useState } from 'react'

export default function About() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [description, setDescription] = useState('');

  return (
    <div>About</div>
  )
}

