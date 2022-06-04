import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
          {/* Now each of your routes can have its own page title thanks to Next's Head tag */}
        <title>Coffee Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner />
        <Link href="/coffee-store/123">Go to page dynamic views</Link>
      </main>
    </div>
  )
}
