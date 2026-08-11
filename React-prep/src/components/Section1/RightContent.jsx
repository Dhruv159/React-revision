import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  const userData = props.users

  return (
    <div className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
      {userData.map(function(element, index) {
       return <RightCard key={index} color={element.color} id={index} img={element.img} tag={element.tag} />
     })}
    </div>
  )
}

export default RightContent
