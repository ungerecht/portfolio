import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import { Container, Row, Col } from 'react-bootstrap'

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
            <Image
              src='/down-arrow.svg'
              alt='Next Page'
              width={48}
              height={48}
            />
          </a>
        </div>
      </section>
      <Container>
        <main>
          <section className={styles.section} id='about'>
            <Row>
              <Col md={6} sm={12} className='d-flex justify-content-center'>
                <Image
                  className={styles.image}
                  src='/gilfoyle.webp'
                  alt='About Me Image'
                  width={300}
                  height={300}
                />
              </Col>
              <Col>
                <h3 className={styles.intro}>
                  Hello,
                  <br />
                  I'm Kevin
                </h3>

                <p className={styles.description}>
                  I build modern web apps with React.
                </p>
              </Col>
            </Row>
            <h3 className={styles.title}>What I use</h3>
          </section>
          <section className={styles.section} id='projects'>
            <h3 className={styles.title}>My Projects</h3>
            <Projects />
          </section>
          <section className={styles.section} id='contact'>
            <h3 className={styles.title}>Let's get in touch</h3>
          </section>
        </main>
      </Container>
    </div>
  )
}

export default Home
