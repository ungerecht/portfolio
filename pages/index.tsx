import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <Head>
        <title>Ungerecht</title>
        <meta name='description' content='Kevin Ungerecht Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className={styles.home}>
        <h1 className={styles.title}>Kevin Ungerecht</h1>

        <p className={styles.description}>Web Developer</p>

        <div className={styles.button}>
          <a href='#about'>
            <Image
              src='/down-arrow.svg'
              alt='Next Page'
              width={48}
              height={48}
            />
          </a>
        </div>
      </section>
      <main>
        <section className={styles.about} id='about'>
          <div className={styles.aboutClipped}>
            <Image
              src='/gilfoyle.webp'
              alt='About Me Image'
              width={300}
              height={260}
            />
            <h3 className={styles.title}>
              Hello
              <br />
              I'm Kevin Ungerecht
            </h3>
            <p className={styles.description}>
              I build modern web apps with React.
            </p>
            <section className={styles.tech}>
              <h3 className={styles.title}>What I use</h3>
            </section>
          </div>
        </section>
        <section className={styles.projects} id='projects'>
          <div className={styles.projectsClipped}>
            <h3 className={styles.title}>My Projects</h3>
          </div>
        </section>
        <section className={styles.contact} id='contact'>
          <h3 className={styles.title}>Let's get in touch</h3>
        </section>
      </main>
    </div>
  )
}

export default Home
