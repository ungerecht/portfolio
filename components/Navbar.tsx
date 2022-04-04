import Image from 'next/image'
import styles from '../styles/NavBar.module.css'

const Navbar = () => {
  return (
    <aside className={styles.navbar}>
      <div className={styles.container}>
        {/* <div className={styles.home}>
        <a href='#home'>
          <Image src='/balloon-heart.svg' alt='Home' width={36} height={36} />
        </a>
      </div> */}
        <ul className={styles.sections}>
          <li className={styles.item}>
            <a href='#about'>About</a>
          </li>
          <li className={styles.item}>
            <a href='#projects'>Projects</a>
          </li>
          <li className={styles.item}>
            <a href='#contact'>Contact</a>
          </li>
          <li className={styles.item}>
            <a href='#contact'>Resume</a>
          </li>
        </ul>
        <ul className={styles.icons}>
          <li className={styles.item}>
            <a
              href='https://github.com/ungerecht'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/github.svg'
                alt='Github Logo'
                width={34}
                height={34}
              />
            </a>
          </li>
          <li className={styles.item}>
            <a
              href='https://linkedin.com/kungerecht'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/linkedin.svg'
                alt='LinkedIn Logo'
                width={34}
                height={34}
              />
            </a>
          </li>
          <li className={styles.item}>
            <Image
              src='/sunglasses.svg'
              alt='Dark-mode Logo'
              width={34}
              height={34}
              onClick={() => {
                console.log('dark mode')
              }}
            />
          </li>
          {/* <li className={styles.item}>
          <a
            href='mailto:kevinungerecht@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src='/mail.svg' alt='Mail Logo' width={36} height={36} />
          </a>
        </li> */}
        </ul>
      </div>
    </aside>
  )
}

export default Navbar
