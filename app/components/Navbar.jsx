import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo.png'

export default function Navbar() {
  return (
    <nav>
      <Image 
        src={Logo}
        alt="social-links-logo"
        width={80}
        quality={100}
        placeholder='blur'
      />
      
      <Link href = "/">Home</Link>
      <Link href = "/links">Links</Link>
      <h1>Site is Under Construction</h1>
    </nav>
  )
}
