import Image from 'next/image'
import Hero from 'components/Hero'
import Container from 'components/container'

export default function Home() {
  return (
    <Container>
    <Hero title="CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn/>    
    </Container>
  )
}
