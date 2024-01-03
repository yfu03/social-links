import React from 'react'
import Image from 'next/image'
import bgImage from './background.PNG'

const imageStyle = {
  objectFit: 'cover',
  zIndex: -1,
  opacity: 0.5,
  
}
export default function BGImageGlobal() {
  return (
    <div className>
      <Image
        src={bgImage}
        quality={100}
        fill
        sizes="100vw"
        alt="background image"
        className='object-cover z-[-1] blur-[2.75px] brightness-50'
      />
    </div>
  )
}