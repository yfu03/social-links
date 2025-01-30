import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo.png'

// import twitter from './twitter.png';
// import twitch from './twitch.png';
// import youtube from './youtube.png';
import github from './github.png';
// import osu from './osu_logo.png';

import twitterW from './twitter_white.png';
import twitchW from './twitch_white.png';
import youtubeW from './youtube_white.png';
import osuW from './osu_logo_white.png';
import blueSkyW from './Bluesky_logo_White.png';

export default function Navbar() {
  const NavbarIcon = ({ image, link, alt }) => {
    return (
      <Link href = {link}>
        <Image 
        src={image}
        alt={alt}
        className='m-3 ml-5 h-[40px] w-[40px] opacity-[.2] hover:opacity-100 hover:drop-shadow-glow transition ease-out duration-500'
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
      <div className='mb-3 flex flex-row '>
        <div className="flex flex-row left-10">
        {[
          ['Home', '/'],
          ['Playstyle', '/playstyle'],
          ['Tourneys', '/tourneys'],
        ].map(([title, url]) => (
            <Link key={title} href={url} className='m-5 mb-2 text-white opacity-30 font-bold text-2xl hover:opacity-100 hover:text-white hover:drop-shadow-glow transition ease-out duration-300'>{title}</Link>
        ))}
        </div>
        <div className="flex flex-row mt-1.5 absolute right-5">
          <NavbarIcon
            image = {twitchW}
            link = 'https://www.twitch.tv/sympl'
            alt = 'Twitch'
          />
          <NavbarIcon
            image = {youtubeW}
            link = 'https://www.youtube.com/@sympli1'
            alt = 'Youtube'
          />
          <NavbarIcon
            image = {twitterW}
            link = 'https://twitter.com/Sympli_'
            alt = 'Twitter'
          />
          <NavbarIcon
            image = {blueSkyW}
            link = 'https://bsky.app/profile/sympli.bsky.social'
            alt = 'BlueSky'
          />
          <NavbarIcon
            image = {osuW}
            link = 'https://osu.ppy.sh/users/8525223'
            alt = 'osu! Profile'
          />
        </div>
      </div>
    </nav>
  )
}
