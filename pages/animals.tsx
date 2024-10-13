import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimalCard from '../components/AnimalCard'
import { useState } from 'react'

const animals = [
    {
      id: 1,
      name: 'Snow Leopard',
      species: 'Panthera uncia',
      image: '/animal_jpg/SnowLeopard.jpg',
      description: 'Snow leopards are endangered due to habitat loss and poaching.',
      status: 'Critical',
    },
    {
      id: 2,
      name: 'Amur Leopard',
      species: 'Panthera pardus orientalis',
      image: '/animal_jpg/AmurLeopard.jpg',
      description: 'Amur leopards are among the world’s most endangered big cats.',
      status: 'Endangered',
    },
    {
      id: 3,
      name: 'Javan Rhino',
      species: 'Rhinoceros sondaicus',
      image: '/animal_jpg/JavanRino.jpg',
      description: 'Javan rhinos are critically endangered with fewer than 75 individuals remaining.',
      status: 'Critical',
    },
    {
      id: 4,
      name: 'Hawksbill Turtle',
      species: 'Eretmochelys imbricata',
      image: '/animal_jpg/HawksbillTurtle.jpg',
      description: 'Hawksbill turtles are endangered primarily due to illegal trade of their shells.',
      status: 'Endangered',
    },
    {
      id: 5,
      name: 'Vaquita',
      species: 'Phocoena sinus',
      image: '/animal_jpg/Vaquita.jpg',
      description: 'The vaquita is the most endangered marine mammal, with fewer than 10 individuals left.',
      status: 'Critical',
    },
    {
      id: 6,
      name: 'Giant Panda',
      species: 'Ailuropoda melanoleuca',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG',
      description: 'Giant pandas are vulnerable due to habitat fragmentation and low birth rates.',
      status: 'Vulnerable',
    },
    {
      id: 7,
      name: 'Sumatran Orangutan',
      species: 'Pongo abelii',
      image: '/animal_jpg/SumatranOrangutan.jpg',
      description: 'Sumatran orangutans are critically endangered, facing threats from deforestation and palm oil plantations.',
      status: 'Critical',
    },
    {
      id: 8,
      name: 'Black Rhinoceros',
      species: 'Diceros bicornis',
      image: '/animal_jpg/BlackRino.jpg',
      description: 'Black rhinos are endangered due to poaching for their horns and habitat loss.',
      status: 'Endangered',
    },
    {
      id: 9,
      name: 'Saola',
      species: 'Pseudoryx nghetinhensis',
      image: '/animal_jpg/Saola.jpg',
      description: 'Saolas are extremely rare and elusive, with fewer than 100 individuals believed to exist.',
      status: 'Critically Endangered',
    },
    {
      id: 10,
      name: 'Mountain Gorilla',
      species: 'Gorilla beringei beringei',
      image: '/animal_jpg/MountainGorilla.jpg',
      description: 'Mountain gorillas are endangered due to poaching, disease, and habitat destruction.',
      status: 'Endangered',
    },
    {
      id: 11,
      name: 'Red Wolf',
      species: 'Canis rufus',
      image: '/animal_jpg/RedWolf.jpg',
      description: 'Red wolves are critically endangered, primarily due to hybridization with coyotes and habitat loss.',
      status: 'Critical',
    },
    {
      id: 12,
      name: 'Sumatran Elephant',
      species: 'Elephas maximus sumatranus',
      image: '/animal_jpg/SumatranElephant.jpg',
      description: 'Sumatran elephants are endangered due to deforestation, human-wildlife conflict, and poaching.',
      status: 'Endangered',
    },
    {
      id: 13,
      name: 'Kakapo',
      species: 'Strigops habroptilus',
      image: '/animal_jpg/Kakapo.jpg',
      description: 'The kakapo is a flightless parrot from New Zealand, critically endangered with a small population.',
      status: 'Critically Endangered',
    },
    {
      id: 14,
      name: 'Saiga Antelope',
      species: 'Saiga tatarica',
      image: '/animal_jpg/SaigaAntelope.jpg',
      description: 'Saiga antelopes are endangered due to poaching for their horns and habitat degradation.',
      status: 'Critically Endangered',
    },
    {
      id: 15,
      name: 'Leatherback Sea Turtle',
      species: 'Dermochelys coriacea',
      image: '/animal_jpg/LeatherbckSeaTurtles.jpg',
      description: 'Leatherback turtles are endangered due to bycatch, habitat loss, and climate change.',
      status: 'Endangered',
    },
  ]  

  const Animals: NextPage = () => {
    const [filter, setFilter] = useState('All')
  
    const filteredAnimals = filter === 'All' 
      ? animals 
      : animals.filter(animal => animal.status === filter)
  
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
        <Head>
          <title>Beacon - Support Endangered Animals</title>
          <meta name="description" content="Browse and support endangered animals through Beacon's personalized rescue missions." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Navbar theme="default" />
  
        <main className="flex-grow">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-gray-800">
                Endangered Animals
              </h1>
              <p className="text-xl text-center mb-12 text-gray-600">
                Discover and support animals in need of our help and protection.
              </p>
  
              <div className="mb-8 flex justify-center">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  {['All', 'Critical', 'Endangered', 'Vulnerable'].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => setFilter(status)}
                      className={`px-4 py-2 text-sm font-medium ${
                        filter === status
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      } border border-gray-200 ${
                        status === 'All' ? 'rounded-l-lg' : ''
                      } ${
                        status === 'Vulnerable' ? 'rounded-r-lg' : ''
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredAnimals.map((animal) => (
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