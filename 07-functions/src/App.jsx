import React from 'react'

const App = () => {
  function Click() {
      console.log("Button was clicked")
    }
  return (
    <>
    <div>
      <button onClick={Click}>Click Here</button>
    </div>
    </>
  )
}

export default App
