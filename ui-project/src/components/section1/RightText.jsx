import { Image, Key } from 'lucide-react'
import React from 'react'
import Card from './Card'

const RightText = (props) => {
  return (
    <div className='flex flex-nowrap'>
    {props.users.map(function (elem,indx) {
        return <Card key={indx} img={elem.image} name={elem.name} role={elem.role} des={elem.description}/>
        
    })}
    </div>
  )
}

export default RightText
