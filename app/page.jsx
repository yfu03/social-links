import Image from "next/image";

let osupfp = "https://a.ppy.sh/8525223";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <Image 
          src={osupfp}
          alt="osu default"
          width={400}
          height={400}
          quality={10}
          className='rounded-3xl aspect-square object-cover'
          //placeholder='blur' //need to convert to data URL to be able to use placeholder
          loading="eager" //test with "eager" later
        />
        <div className="flex-col ml-6 mt-[13rem]">
          <h1 className="text-[150px]">Hi! I&apos;m</h1>
          <h2 className="text-[150px] mt-[6rem]">Sympli!</h2>
        </div>
      </div>
      <div className="mt-[3rem]">
        <p>Welcome to my personal website! I&apos;m an osu player from Missouri, USA that primarily specializes in speed and finger control.
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
