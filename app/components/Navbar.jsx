import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo.png'

import twitter from './twitter.png';
import twitch from './twitch.png';
import youtube from './youtube.png';
import github from './github.png';
import osu from './osu_logo.png';

export default function Navbar() {
  const NavbarIcon = ({ image, link, alt }) => {
    return (
      <Link href = {link}>
        <Image 
        src={image}
        alt={alt}
        className='m-3 h-[50px] w-[50px] opacity-[.50] hover:opacity-100'
        quality={100}
        placeholder='blur'
        />
      </Link>
    );
  };

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
      <div className="text-green-500">
        <h1>Site is Under Construction</h1>
      </div>
      
      <div className="flex flex-row">
        <NavbarIcon
          image = {twitch}
          link = 'https://www.twitch.tv/sympl'
          alt = 'Twitch'
        />
        <NavbarIcon
          image = {youtube}
          link = 'https://www.youtube.com/channel/UCYGF42y5DnObiG7NgpYv92Q'
          alt = 'Youtube'
        />
        <NavbarIcon
          image = {twitter}
          link = 'https://twitter.com/Sympli_'
          alt = 'Twitter'
        />
        <NavbarIcon
          image = {osu}
          link = 'https://osu.ppy.sh/users/8525223'
          alt = 'osu! Profile'
        />
      </div>
    </nav>
  )
}
