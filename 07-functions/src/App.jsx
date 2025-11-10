import React from 'react'

const App = () => {
  function Click() {
      console.log("Button was clicked")
    }
    function changingInput(val) {
      console.log(val)
    }
  return (
    <>
    <div>
      <button onClick={Click}>Click Here</button>
      <input onChange={function (elem) {
        changingInput(elem.target.value)
      }} type="text" placeholder='Enter Your Name' />
    </div>
    </>
  )
}

export default App
