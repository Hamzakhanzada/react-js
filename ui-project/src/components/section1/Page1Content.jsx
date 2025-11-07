import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1Content = (props) => {
  return (
    <div className='py-3 flex items-center justify-between bg-amber-900 px-16'>
      <LeftText/>
      <RightText users={props.users}/>
    </div>
  )
}

export default Page1Content
