import React from 'react'

const ChildFooter = ({heading, one, two, three, four}) => {
  return (
    <div className='text-white text-[24px]'>
        <div className='text-[32px]'>{heading}</div>
        <div >{one}</div>
        <div>{two}</div>
        <div>{three}</div>
        <div>{four}</div>
    </div>
  )
}

export default ChildFooter