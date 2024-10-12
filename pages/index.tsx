// pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>FaunaChain - Save Endangered Animals</title>
        <meta name="description" content="FaunaChain empowers you to rescue and protect endangered animals through blockchain technology and NFTs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow bg-gray-100">
        {/* Hero Section */}
        <section className="bg-green-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">FaunaChain</h1>
            <p className="text-xl md:text-2xl mb-8">
              Empowering you to rescue and protect endangered animals through blockchain technology and NFTs.
            </p>
            <Link href="/animals">
              <span className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Get Involved
              </span>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="flex flex-wrap -mx-4">
              {/* Feature 1 */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <img src="/icons/select.svg" alt="Select Animal" className="w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Select an Animal</h3>
                  <p>Choose an endangered animal you wish to support from our curated list.</p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <img src="/icons/donate.svg" alt="Donate" className="w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Make a Donation</h3>
                  <p>Contribute using Stellar Lumens (XLM) and fund targeted rescue missions.</p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <img src="/icons/nft.svg" alt="Receive NFT" className="w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Receive a Unique NFT</h3>
                  <p>Get a unique NFT representing the animal you helped rescue, recorded on the Stellar blockchain.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Movement</h2>
            <p className="text-lg md:text-xl mb-8">
              Your support can make a real difference in the lives of endangered animals.
            </p>
            <Link href="/animals">
              <span className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
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
