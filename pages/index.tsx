import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, Users, DollarSign, Briefcase, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const features = [
  {
    icon: <Users className="w-12 h-12 text-green-500" />,
    title: "Select an Animal",
    description: "Choose an endangered animal you wish to support from our curated list.",
  },
  {
    icon: <DollarSign className="w-12 h-12 text-green-500" />,
    title: "Make a Donation",
    description: "Contribute using Stellar Lumens (XLM) and fund targeted rescue missions.",
  },
  {
    icon: <Award className="w-12 h-12 text-green-500" />,
    title: "Receive a Unique NFT",
    description: "Get a unique NFT representing the animal you helped rescue, recorded on the Stellar blockchain.",
  },
];

const stats = [
  { icon: <Users className="w-8 h-8" />, number: "1000+", label: "Animals Saved" },
  { icon: <DollarSign className="w-8 h-8" />, number: "$500K+", label: "Donations Raised" },
  { icon: <Briefcase className="w-8 h-8" />, number: "50+", label: "Conservation Projects" },
  { icon: <Award className="w-8 h-8" />, number: "10K+", label: "NFTs Minted" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

      <Navbar theme="transparent"/>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="/img3.png"
            alt="Endangered animals"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
            blurDataURL="/images/hero-background-blur.jpg"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <motion.div
            className="relative container mx-auto px-4 text-center z-10"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight">
              Beacon
            </h1>
            <p className="text-xl md:text-3xl mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Empower the rescue and protection of endangered animals through blockchain and NFTs.
            </p>
            <Link href="/animals" passHref>
              <span className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300 transform hover:scale-105">
                Get Involved
              </span>
            </Link>
          </motion.div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-12 h-12 text-white" />
          </div>
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
                  className="bg-green-50 p-8 rounded-xl text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="bg-white rounded-full p-4 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    {feature.icon}
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
                  className="text-center bg-white bg-opacity-10 p-8 rounded-xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4">{stat.icon}</div>
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
              <span className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300 transform hover:scale-105">
                Start Supporting
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;