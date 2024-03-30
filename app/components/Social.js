import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Social = ({location, address}) => {
  return (
    <div>
        <Link href={address}>
            <Image src={location} width={39} height={39} alt="Image"  className='mr-[20px]'></Image>
        </Link>
        
    </div>
  )
}

export default Social