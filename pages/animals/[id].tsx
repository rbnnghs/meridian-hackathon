import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { animals, Animal } from '../../data/animals';
import { missions, RescueMission } from '../../data/missions';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ProgressBar } from '../../components/ProgressBar';
import { Chart } from 'react-chartjs-2';
import { Bar } from 'recharts';

interface AnimalDetailProps {
  animal: Animal;
  relatedMissions: RescueMission[];
}

const AnimalDetail: NextPage<AnimalDetailProps> = ({ animal, relatedMissions }) => {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleDonate = () => {
    alert(`Thank you for donating ${donationAmount} XLM to ${animal.name}!`);
    // Implement actual donation logic here
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-gray-100">
        {/* Animal Information Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              {/* Media Gallery */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                  {animal.image && (
                    <div className="relative w-full h-64 md:h-96">
                      <Image
                        src={animal.image}
                        alt={animal.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  )}
                  {/* Additional media can be added here */}
                  {relatedMissions.flatMap((mission) => mission.media).map((mediaUrl, index) => (
                    <div key={index} className="relative w-full h-64 md:h-96">
                      <Image
                        src={mediaUrl}
                        alt={`${animal.name} media ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>

              {/* Animal Details */}
              <div className="w-full md:w-1/2 md:pl-12">
                <h1 className="text-4xl font-bold mb-4">{animal.name}</h1>
                <p className="text-gray-700 mb-2"><strong>Species:</strong> {animal.species}</p>
                <p className="text-gray-700 mb-2"><strong>Status:</strong> {animal.status}</p>
                <p className="text-gray-700 mb-4"><strong>Habitat:</strong> {animal.habitat}</p>
                <p className="text-gray-700 mb-4"><strong>Threats:</strong> {animal.threats.join(', ')}</p>
                
                {/* Progress Bar for Fundraising Goal */}
                <div className="mb-4">
                  <p className="mb-2">Fundraising Goal: 5000 XLM</p>
                  <ProgressBar completed={3000} total={5000} />
                </div>

                {/* Donation Section */}
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Donate to Support {animal.name}</h2>
                  <input
                    type="number"
                    min="1"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(parseInt(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                    placeholder="Enter amount in XLM"
                  />
                  <button
                    onClick={handleDonate}
                    className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Impact Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Rescued Animals</h3>
                <p className="text-4xl font-bold">{relatedMissions.reduce((acc, mission) => acc + mission.impactStatistics.rescuedAnimals, 0)}</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Habitat Restored (hectares)</h3>
                <p className="text-4xl font-bold">{relatedMissions.reduce((acc, mission) => acc + mission.impactStatistics.habitatRestored, 0)}</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Anti-Poaching Patrols</h3>
                <p className="text-4xl font-bold">{relatedMissions.reduce((acc, mission) => acc + mission.impactStatistics.antiPoachingPatrols, 0)}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Media Gallery Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Media Gallery</h2>
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
              {relatedMissions.flatMap((mission) => mission.media).map((mediaUrl, index) => (
                <div key={index} className="relative w-full h-64 md:h-96">
                  <Image
                    src={mediaUrl}
                    alt={`${animal.name} media ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Related Rescue Missions */}
        <section className="py-10 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Related Rescue Missions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedMissions.map((mission) => (
                <div key={mission.id} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">{mission.title}</h3>
                  <p className="text-gray-700 mb-2">{mission.description}</p>
                  <p className="text-gray-600 mb-2"><strong>Status:</strong> {mission.status}</p>
                  <Link href={`/missions/${mission.id}`}>
                    <a className="text-green-600 hover:underline">View Details</a>
                  </Link>
                </div>
              ))}
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
  const id = parseInt(params?.id as string, 10);
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