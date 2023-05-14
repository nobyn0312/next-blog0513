import Image from 'next/image'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <>
      <Hero
        title="CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn
      />      
    </>
  )
}
