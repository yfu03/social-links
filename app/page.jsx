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
      <h1>whats up</h1>
      <h1>i should put my osekai profile here later i think</h1>
    </main>
  )
}
