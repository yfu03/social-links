import Image from "next/image";
import osudefaultpfp from './components/osudefaultpfp.png'

export default function Home() {
  return (
    <main>
      <Image 
        src={osudefaultpfp}
        alt="osu default"
        width={800}
        quality={10}
        placeholder='blur'
      />
      <div>whats up</div>
    </main>
  )
}
