import { Inter } from 'next/font/google'
//note: i should get a more appropriate font than this later (google website fonts or something lmfao)
import './globals.css'


import Navbar from './components/Navbar'
import BGImageGlobal from './components/BGImageGlobal'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sympli from osu!',
  description: 'Sympli personal osu! site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BGImageGlobal />
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
