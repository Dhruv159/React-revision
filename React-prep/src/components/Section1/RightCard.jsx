import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
       <img className="className='h-full w-full object-cover" src={props.img} alt="image-notfound"/>
       <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  )
}

export default RightCard
