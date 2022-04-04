import Image from 'next/image'
import styles from '../styles/ProjectCard.module.css'

type ProjectCardProps = {
  name: string
  imgUrl: string
  tech: string[]
  link: string
  gitLink: string
}

const ProjectCard = ({
  name,
  imgUrl,
  tech,
  link,
  gitLink,
}: ProjectCardProps) => {
  const createTechs = () => {
    return tech.map((t) => {
      return (
        <Image src={`/${t}.svg`} alt={`${t} Icon`} width={24} height={24} />
      )
    })
  }
  const techs = createTechs()
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{name}</h4>
      <div className={styles.image}>
        <Image
          src={imgUrl}
          alt={`${name} Image`}
          layout='fill'
          objectFit='contain'
        />
      </div>
      {/* <div>{techs}</div> */}
      <div className={styles.links}>
        <button
          onClick={() => {
            window.open(`${link}`)
          }}
        >
          Demo
          <Image src='/box-arrow.svg' alt='Demo Icon' width={24} height={24} />
        </button>
        <button
          onClick={() => {
            window.open(`${gitLink}`)
          }}
        >
          Code
          <Image src='/github.svg' alt='GitHub Icon' width={24} height={24} />
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
