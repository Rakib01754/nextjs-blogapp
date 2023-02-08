import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <header>
      <Navbar></Navbar>
    </header>
  )
}
