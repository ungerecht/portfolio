type project = {
  title: string
  imgSrc: string
  text: string
  demo: string
  github: string
}

const projects: project[] = [
  {
    title: 'Retro Web Synth',
    imgSrc: '/synth.png',
    text: 'Insert text here',
    demo: 'https://retro-synth.herokuapp.com',
    github: 'https://github.com/ungerecht/retro-web-synth',
  },
  {
    title: 'Crypto Tracker',
    imgSrc: '/crypto.png',
    text: 'Insert Text Here',
    demo: 'https://ungerecht-crypto-tracker.herokuapp.com',
    github: 'https://github.com/ungerecht/crypto-tracker',
  },
]

export default projects
