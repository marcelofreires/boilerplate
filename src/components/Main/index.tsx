import { Container, Mode, Title } from './styles'

type Props = {
  title: string
}

export const Main = ({ title }: Props) => (
  <Container id="main">
    <Title id="title">{title}</Title>
    <Mode>{process.env.NODE_ENV}</Mode>
  </Container>
)
