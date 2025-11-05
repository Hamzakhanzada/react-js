import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div>
      <Card img="https://images.unsplash.com/photo-1761872936220-1531e97a158a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764" name="Hamza Khan" role="Front End Developer" info="HTML • CSS • JavaScript • Tailwind" />
      <Card img="https://images.unsplash.com/photo-1761882667926-b4f9307f3772?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600" name="Talha Ahmed" role="Python Developer" info="Python Development" />
    </div>
  )
}

export default App
