import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Define types for feature and stat items
interface Feature {
  icon: string
  title: string
  description: string
}

interface Stat {
  number: string
  label: string
}

// Data for Features Section
const features: Feature[] = [
  {
    icon: "/icons/select.svg",
    title: "Select an Animal",
    description: "Choose an endangered animal you wish to support from our curated list.",
  },
  {
    icon: "/icons/donate.svg",
    title: "Make a Donation",
    description: "Contribute using Stellar Lumens (XLM) and fund targeted rescue missions.",
  },
  {
    icon: "/icons/nft.svg",
    title: "Receive a Unique NFT",
    description: "Get a unique NFT representing the animal you helped rescue, recorded on the Stellar blockchain.",
  },
]

// Data for Impact Section
const stats: Stat[] = [
  { number: "1000+", label: "Animals Saved" },
  { number: "$500K+", label: "Donations Raised" },
  { number: "50+", label: "Conservation Projects" },
  { number: "10K+", label: "NFTs Minted" },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Head>
        <title>Beacon - Save Endangered Animals</title>
        <meta
          name="description"
          content="Beacon empowers you to rescue and protect endangered animals through blockchain technology and NFTs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="/images/hero-background.jpg"
            alt="Endangered animals"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
            blurDataURL="/images/hero-background-blur.jpg"
            priority // Ensures the hero image loads quickly
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            className="relative container mx-auto px-4 text-center z-10"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Beacon
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Empowering you to rescue and protect endangered animals through blockchain technology and NFTs.
            </p>
            <Link href="/animals" passHref>
              <span
                className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300 transform hover:scale-105 shadow-lg"
                aria-label="Get Involved"
              >
                Get Involved
              </span>
            </Link>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.article
                  key={index}
                  className="bg-green-50 p-8 rounded-xl shadow-lg text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Image
                      src={feature.icon}
                      alt={`${feature.title} Icon`}
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-24 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-xl">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-100 py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Join the Movement
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-600">
              Your support can make a real difference in the lives of endangered animals.
            </p>
            <Link href="/animals" passHref>
              <span
                className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300 transform hover:scale-105 shadow-lg"
                aria-label="Start Supporting"
              >
                Start Supporting
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
