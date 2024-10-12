// pages/animals.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimalCard from '../components/AnimalCard'

// Sample data - In a real application, fetch this data from an API or database
const animals = [
  {
    id: 1,
    name: 'Snow Leopard',
    species: 'Panthera uncia',
    image: '/animals/snow-leopard.jpg',
    description: 'Snow leopards are endangered due to habitat loss and poaching.',
    status: 'Critical',
  },
  {
    id: 2,
    name: 'Amur Leopard',
    species: 'Panthera pardus orientalis',
    image: '/animals/amur-leopard.jpg',
    description: 'Amur leopards are among the world’s most endangered big cats.',
    status: 'Endangered',
  },
  // Add more animals as needed
]

const Animals: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>FaunaChain - Support Endangered Animals</title>
        <meta name="description" content="Browse and support endangered animals through FaunaChain's personalized rescue missions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow bg-gray-100">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">Endangered Animals</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {animals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Animals
