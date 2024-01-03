import Image from "next/image";
import osudefaultpfp from './components/osudefaultpfp.png'

export default function Home() {
  return (
    <main>
      <Image 
        src={osudefaultpfp}
        alt="osu default"
        width={500}
        quality={10}
        placeholder='blur'
      />
      <h1>whats up</h1>
      <iframe src="https://osekai.net/profiles/img/banner.svg?id=8525223"></iframe>
    </main>
  )
}
