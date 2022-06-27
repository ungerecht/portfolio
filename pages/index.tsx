import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Head>
        <title>Ungerecht</title>
        <meta name='description' content='Kevin Ungerecht Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className={styles.home}>
        <h1>Kevin Ungerecht</h1>
        <p>Web Developer</p>
        <div className={styles.button}>
          <a href='#about'>
            <div className={styles.image}>
              <Image
                src='/down-arrow.svg'
                alt='Next Page'
                width={48}
                height={48}
              />
            </div>
          </a>
        </div>
      </section>
      <main>
        <Profile />
        <section className={styles.section} id='projects'>
          <h3 className={styles.title}>My Projects</h3>
          <Projects />
        </section>
        <section className={styles.section} id='contact'>
          <h3 className={styles.title}>Let's get in touch</h3>
        </section>
      </main>
    </div>
  )
}

export default Home
