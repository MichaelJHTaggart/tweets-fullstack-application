import React, { useState } from 'react'
import axios from 'axios';

function Home() {
 const [text, setText] = useState('')

 const handleChange = (e) => {
  setText(e.target.value)
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  axios.post('/api/tweets/', { tweet: text })
   .then(res => console.log(res))
   .catch(err => console.log(err))
 }


 return (
  <div>
   <input
    onChange={handleChange}
   ></input>
   <button
    onClick={handleSubmit}
   >Save Tweet</button>
  </div>
 )
}

export default Home
