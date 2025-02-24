'use client';

import Image from "next/image";
import Link from 'next/link';
import currentpfpdirHIGHRES from './components/pfp1-31-update.jpg';

//let osupfp = "https://a.ppy.sh/8525223";
let osupfp = currentpfpdirHIGHRES;


export default function Home() {
  const IconPFP  = ({image,  link}) =>
  {
    return(
      <Link href = {link}>
        <Image 
            src={image}
            alt="osu pfp"
            width={400}
            height={400}
            quality={10}
            className='rounded-3xl aspect-square object-cover
                      transition-opacity opacity-0 duration-[2.5s]'
            placeholder='blur'
            loading="eager" //test with "eager" later
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
      </Link>
    )
  }
  
  return (
    <main>
      <div className="flex">
        <IconPFP
          image={osupfp}
          link={'https://osu.ppy.sh/users/8525223'}
        />
        <div className="flex-col ml-6 mt-[13rem] animate-fadeIn">
          <h1 className="text-[150px]">Hi! I&apos;m</h1>
          <h2 className="text-[150px] mt-[6rem] text-red">Sympli!</h2>
        </div>
      </div>
      <div className="mt-[3rem]">
        <p>Welcome to my personal website! I&apos;m an osu! player from Missouri, USA that primarily specializes in speed and finger control.
          I&apos;m also into scorefarming and going for nightcore leaderboards and SSs!
        </p>
      </div>
      
      <iframe 
      width="1000"
      height="200"
      src="https://osekai.net/profiles/img/banner.svg?id=8525223">
      </iframe>
    </main>
  )
}
