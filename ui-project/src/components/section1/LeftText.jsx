import React from 'react'
import Hero from './Hero'
import Button1 from './Button1'
import Button2 from './Button2'
const LeftText = () => {
  return (
    <div className="flex-1 space-y-5 text-center lg:text-left">

        <Hero/>

        <div className="flex gap-4 justify-center lg:justify-start">
          <Button1/>
          <Button2/>
         
        </div>
      </div>
  )
}

export default LeftText
