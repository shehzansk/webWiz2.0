import React from 'react'
import Image from 'next/image'
const ParaImg = ({img2dis}) => {
  return (
    <div>
        <Image src={img2dis}  width={478} height={620}></Image>
    </div>
  ) 
}

export default ParaImg