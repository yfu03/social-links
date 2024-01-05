import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div><Link className='font-bold hover:underline' href='https://www.pixiv.net/en/artworks/61829883'>BG Image</Link> by loundraw</div>
      <div>UI inspired from <Link className='font-bold hover:underline' href='https://monko2k.xyz/'>monko2k.xyz</Link> (i suck ass at UI)</div>
      <Link className='font-bold hover:underline' href='https://github.com/yfu03/social-links'>github repo</Link>
    </footer>
  )
}