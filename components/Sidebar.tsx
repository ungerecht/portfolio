import Image from 'next/image'
import styles from '../styles/SideBar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.home}>
        <a href=''>
          <Image src='/balloon-heart.svg' alt='Home' width={36} height={36} />
        </a>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a
            href='https://github.com/ungerecht'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src='/github.svg' alt='Github Logo' width={36} height={36} />
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
              width={36}
              height={36}
            />
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
