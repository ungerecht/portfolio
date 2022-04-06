import Image from 'next/image'
import projects from '../projects'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Projects = () => {
  return (
    <Container>
      <Row>
        {projects.map((project) => {
          return (
            <Col>
              <Card border='muted' bg='light'>
                <Card.Img variant='top' src={project.imgSrc} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.text}</Card.Text>
                  <Button
                    variant='info'
                    onClick={() => {
                      window.open(`${project.demo}`)
                    }}
                  >
                    <Image
                      src='/box-arrow.svg'
                      alt='GoTo Icon'
                      width={24}
                      height={24}
                    />
                  </Button>{' '}
                  <Button
                    variant='info'
                    onClick={() => {
                      window.open(`${project.github}`)
                    }}
                  >
                    <Image
                      src='/github.svg'
                      alt='GitHub Icon'
                      width={24}
                      height={24}
                    />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Projects
