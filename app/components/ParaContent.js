import React from 'react'

const ParaContent = ({heading, content}) => {
  return (
    <div className='w-[834px] h-[556px] '>
        <div className='text-[80px] font-Cinzel'>
            {heading}
        </div>

        <div className='text-[32px]'>
        {content}
        </div>
    
    </div>
  )
}

export default ParaContent