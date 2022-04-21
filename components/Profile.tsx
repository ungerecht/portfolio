import Image from 'next/image'
import {
  react,
  javascript,
  html,
  css,
  git,
  next,
  sass,
  typescript,
  bootstrap,
  jest,
} from '../icons'
import styles from '../styles/Profile.module.scss'
import React from 'react'

const Profile = () => {
  return (
    <div id='about' className={styles.profile}>
      <div className={`${styles.column} ${styles.left}`}>
        <div className={styles.section}>
          <div className={styles.image}>
            <Image
              className={styles.img}
              src='/me-320.png'
              alt='About Me Image'
              quality={100}
              layout='fill'
            />
          </div>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>Kevin Ungerecht</h3>
          <h4 className={styles.subtitle}>Olympia, WA</h4>
        </div>
      </div>
      <div className={`${styles.column} ${styles.right}`}>
        <div className={styles.section}>
          <h3 className={styles.title}>Biography</h3>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
            laoreet id donec ultrices. Venenatis urna cursus eget nunc
            scelerisque viverra mauris in aliquam. Consequat id porta nibh
            venenatis cras sed. Vitae suscipit tellus mauris a. Suspendisse in
            est ante in nibh mauris cursus. Malesuada nunc vel risus commodo
            viverra. Ultrices neque ornare aenean euismod elementum.
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>What I use</h3>
          <div className={styles.row}>
            <div className={styles.icon}>
              {react}
              <div className={styles.tooltip}>
                <span>React</span>
                <div className={styles.arrow} />
              </div>
            </div>
            <div className={styles.icon}>
              {typescript}
              <div className={styles.tooltip}>
                <span>TypeScript</span>
                <div className={styles.arrow} />
              </div>
            </div>
            <div className={styles.icon}>
              {next}
              <div className={styles.tooltip}>
                <span>Next.js</span>
                <div className={styles.arrow} />
              </div>
            </div>
            <div className={styles.icon}>
              {git}
              <div className={styles.tooltip}>
                <span>Git</span>
                <div className={styles.arrow} />
              </div>
            </div>
            <div className={styles.icon}>
              {bootstrap}
              <div className={styles.tooltip}>
                <span>Bootstrap</span>
                <div className={styles.arrow} />
              </div>
            </div>
            <div className={styles.icon}>
              {sass}
              <div className={styles.tooltip}>
                <span>Sass</span>
                <div className={styles.arrow} />
              </div>
            </div>
            <div className={styles.icon}>
              {jest}
              <div className={styles.tooltip}>
                <span>Jest</span>
                <div className={styles.arrow} />
              </div>
            </div>
            <div className={styles.icon}>
              {html}
              <div className={styles.tooltip}>
                <span>HTML</span>
                <div className={styles.arrow} />
              </div>
            </div>
            <div className={styles.icon}>
              {css}
              <div className={styles.tooltip}>
                <span>CSS</span>
                <div className={styles.arrow} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>What I'm Learning</h3>
          <div className={styles.row}></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
