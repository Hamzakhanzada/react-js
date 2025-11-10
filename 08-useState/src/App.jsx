import React, { useState } from 'react'

const App = () => {
  useState
  const [num,setNum] = useState(0)
  function increaseNum() {
    setNum(num+1)
  }
  function decreaseNum() {
    setNum(num-1)
  }
  function jumpNum() {
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpNum}>Jump bye 5</button>
    </div>
  )
}

export default App
