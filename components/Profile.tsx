import Image from 'next/image'
import {
  react,
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
  const techs = [react, typescript, next, git, sass, bootstrap, jest]
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
          <h4 className={styles.subtitle}>
            <div className={styles.icon}>
              <Image
                src='/globe-med.png'
                alt='globe icon'
                quality={100}
                layout='fill'
              />
            </div>
            Olympia, WA
          </h4>
        </div>
      </div>
      <div className={`${styles.column} ${styles.right}`}>
        <div className={styles.section}>
          <h3 className={styles.title}>
            <div className={styles.icon}>
              <Image
                src='/book-med.png'
                alt='book icon'
                quality={100}
                layout='fill'
              />
            </div>
            About me
          </h3>
          <p className={styles.paragraph}>
            Hello! My name is Kevin and I am a software engineer specializing in
            front-end web development.
            <br />
            <br /> I've always had a passion for technology, especially the
            internet and video games, which led me to pursue my Bachelor's
            degree in Computer Information Systems.
            <br />
            <br /> While attending Eastern Washington University I fell in love
            with coding and problem solving, but especially found satisfaction
            in combining the logical aspect of programming with the visual
            aspect of design, which web application development provides.
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>
            <div className={styles.icon}>
              <Image
                src='/wrench-med.png'
                alt='wrench icon'
                quality={100}
                layout='fill'
              />
            </div>
            What I use
          </h3>
          <div className={styles.row}>
            {techs.map((tech) => {
              return (
                <div className={styles.techIcon}>
                  {tech}
                  <div className={styles.tooltip}>
                    <span>{tech.props.name}</span>
                    <div className={styles.arrow} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>
            <div className={styles.icon}>
              <Image
                src='/heart-med.png'
                alt='heart icon'
                quality={100}
                layout='fill'
              />
            </div>
            Interests
          </h3>
          <div className={styles.row}></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
