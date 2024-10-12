import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>FaunaChain - Save Endangered Animals</title>
        <meta name="description" content="FaunaChain empowers you to rescue and protect endangered animals through blockchain technology and NFTs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-green-600 text-white py-32">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down">FaunaChain</h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up">
              Empowering you to rescue and protect endangered animals through blockchain technology and NFTs.
            </p>
            <Link href="/animals">
              <span className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105 animate-pulse">
                Get Involved
              </span>
            </Link>
          </div>
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-background.jpg"
              alt="Endangered animals"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition duration-500 hover:scale-105">
                <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                  <Image src="/icons/select.svg" alt="Select Animal" width={48} height={48} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Select an Animal</h3>
                <p className="text-gray-600">Choose an endangered animal you wish to support from our curated list.</p>
              </div>
              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition duration-500 hover:scale-105">
                <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                  <Image src="/icons/donate.svg" alt="Donate" width={48} height={48} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Make a Donation</h3>
                <p className="text-gray-600">Contribute using Stellar Lumens (XLM) and fund targeted rescue missions.</p>
              </div>
              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition duration-500 hover:scale-105">
                <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6">
                  <Image src="/icons/nft.svg" alt="Receive NFT" width={48} height={48} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Receive a Unique NFT</h3>
                <p className="text-gray-600">Get a unique NFT representing the animal you helped rescue, recorded on the Stellar blockchain.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-600 text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Movement</h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Your support can make a real difference in the lives of endangered animals.
            </p>
            <Link href="/animals">
              <span className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105">
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