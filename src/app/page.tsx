import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import MainUi from '@/component/mainUi'

export default function Home() {
  return (
    <MainUi>
      <Link href="/saringan">Dashboard</Link>
    </MainUi>
  )
}
