import Image from "next/image";

let osupfp = "https://a.ppy.sh/8525223";

export default function Home() {
  return (
    <main>
      <div>
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
      </div>
      <h1>whats up</h1>
      <iframe 
      width="1000"
      height="200"
      src="https://osekai.net/profiles/img/banner.svg?id=8525223"></iframe>
    </main>
  )
}
