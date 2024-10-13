import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { animals, Animal } from '../../data/animals';
import { missions, RescueMission } from '../../data/missions';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { ProgressBar } from '../../components/ProgressBar';
import Link from 'next/link';

interface AnimalDetailProps {
  animal: Animal;
  relatedMissions: RescueMission[];
}

const AnimalDetail: NextPage<AnimalDetailProps> = ({ animal, relatedMissions }) => {
  const [donationAmount, setDonationAmount] = useState<string>('');
  const [totalDonations, setTotalDonations] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>('about');
  const router = useRouter();
  const fundraisingGoal = 5000;

  useEffect(() => {
    const total = relatedMissions.reduce((acc, mission) => acc + mission.fundsRaised, 0);
    setTotalDonations(total);
  }, [relatedMissions]);

  if (router.isFallback) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  const handleDonate = () => {
    const amount = parseFloat(donationAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }
    alert(`Thank you for donating ${amount} XLM to ${animal.name}!`);
    setTotalDonations(prevTotal => prevTotal + amount);
    setDonationAmount('');
  };

  // Calculate the donation percentage
  const percentage = Math.min((totalDonations / fundraisingGoal) * 100, 100);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="py-20">
          <button 
            onClick={() => router.back()} 
            className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <Image
                src={animal.image}
                alt={animal.name}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4">{animal.name}</h1>
              <div className="flex space-x-4 mb-4">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  Favorite
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-2">Quick Facts</h2>
                <p><strong>Species:</strong> {animal.species}</p>
                <p><strong>Status:</strong> {animal.status}</p>
                <p><strong>Habitat:</strong> {animal.habitat}</p>
                <p><strong>Threats:</strong> {animal.threats.join(', ')}</p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">Support {animal.name}</h2>
                {/* Pass the calculated percentage to ProgressBar */}
                <ProgressBar percentage={percentage} />
                <p className="text-sm text-gray-600 mt-1">
                  {totalDonations} XLM raised of {fundraisingGoal} XLM goal
                </p>
                <div className="flex mt-4">
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Enter amount in XLM"
                    className="flex-grow mr-2 px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <button 
                    onClick={handleDonate}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {['About', 'Impact', 'Rescue Missions'].map((tab) => (
                  <button
                    key={tab.toLowerCase()}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`${
                      activeTab === tab.toLowerCase()
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="mt-6">
              {activeTab === 'about' && (
                <div className="bg-white p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">About {animal.name}</h2>
                  <p>{animal.description}</p>
                </div>
              )}

              {activeTab === 'impact' && (
                <div className="bg-white p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">Impact Statistics</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2">Rescued Animals</h3>
                      <p className="text-4xl font-bold">
                        {relatedMissions.reduce((acc, mission) => acc + mission.impactStatistics.rescuedAnimals, 0)}
                      </p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2">Habitat Restored</h3>
                      <p className="text-4xl font-bold">
                        {relatedMissions.reduce((acc, mission) => acc + mission.impactStatistics.habitatRestored, 0)} ha
                      </p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2">Anti-Poaching Patrols</h3>
                      <p className="text-4xl font-bold">
                        {relatedMissions.reduce((acc, mission) => acc + mission.impactStatistics.antiPoachingPatrols, 0)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'rescue missions' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedMissions.map((mission) => (
                    <div key={mission.id} className="bg-white p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">{mission.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{mission.status}</p>
                      <p className="mb-4">{mission.description}</p>
                      <Link href={`/missions/${mission.id}`}>
                        <span className="text-blue-600 hover:text-blue-800">View Details</span>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = animals.map((animal) => ({
    params: { id: animal.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id ? parseInt(params.id as string, 10) : null;
  const animal = animals.find((a) => a.id === id);

  if (!animal) {
    return { notFound: true };
  }

  const relatedMissions = missions.filter((mission) => mission.animalId === animal.id);

  return {
    props: {
      animal,
      relatedMissions,
    },
  };
};

export default AnimalDetail;
