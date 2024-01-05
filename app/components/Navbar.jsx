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
        className='m-3 h-[40px] w-[40px] opacity-[.45] hover:opacity-100 hover:drop-shadow-glow transition ease-out duration-500'
        quality={100}
        placeholder='blur'
        />
      </Link>
    );
  }

  const NavbarText = {

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
      <div className="flex flex-row">
       {[
        ['Home', '/'],
        ['Playstyle', '/playstyle'],
        ['Tourneys', '/tourneys'],
       ].map(([title, url]) => (
          <Link href={url} className='m-5 text-white opacity-30 font-bold text-2xl hover:opacity-100 hover:text-white hover:drop-shadow-glow transition ease-out duration-300'>{title}</Link>
       ))}
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
