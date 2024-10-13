import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { missions, RescueMission } from '../../data/missions';
import { animals, Animal } from '../../data/animals';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ProgressBar } from '../../components/ProgressBar';
import Link from 'next/link';

interface MissionDetailProps {
  mission: RescueMission;
  animal: Animal;
}

const MissionDetail: NextPage<MissionDetailProps> = ({ mission, animal }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const progressPercentage = Math.min((mission.fundsRaised / mission.fundraisingGoal) * 100, 100);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-gray-100">
        {/* Mission Information Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              {/* Media Gallery */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                  {mission.media.map((mediaUrl, index) => (
                    <div key={index} className="relative w-full h-64 md:h-96">
                      <Image
                        src={mediaUrl}
                        alt={`Mission Media ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>

              {/* Mission Details */}
              <div className="w-full md:w-1/2 md:pl-12">
                <h1 className="text-4xl font-bold mb-4">{mission.title}</h1>
                <p className="text-gray-700 mb-2">{mission.description}</p>
                <p className="text-gray-700 mb-2"><strong>Objectives:</strong> {mission.objectives.join(', ')}</p>
                <p className="text-gray-700 mb-2"><strong>Timeline:</strong> {mission.timeline}</p>
                <p className="text-gray-700 mb-2"><strong>Partners:</strong> {mission.partners.join(', ')}</p>
                <p className="text-gray-700 mb-2"><strong>Status:</strong> {mission.status}</p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <p className="mb-2">Funds Raised: {mission.fundsRaised} XLM / {mission.fundraisingGoal} XLM</p>
                  <ProgressBar completed={mission.fundsRaised} total={mission.fundraisingGoal} />
                </div>

                {/* Donation Section */}
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Donate to This Mission</h2>
                  <input
                    type="number"
                    min="1"
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                    placeholder="Enter amount in XLM"
                  />
                  <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
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
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Rescued Animals</h3>
                <p className="text-4xl font-bold">{mission.impactStatistics.rescuedAnimals}</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Habitat Restored (hectares)</h3>
                <p className="text-4xl font-bold">{mission.impactStatistics.habitatRestored}</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Anti-Poaching Patrols</h3>
                <p className="text-4xl font-bold">{mission.impactStatistics.antiPoachingPatrols}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Updates */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Live Updates</h2>
            <ul className="space-y-4">
              {mission.liveUpdates.map((update, index) => (
                <li key={index} className="bg-white p-4 rounded-lg">
                  <p>{update}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = missions.map((mission) => ({
    params: { id: mission.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string, 10);
  const mission = missions.find((m) => m.id === id);

  if (!mission) {
    return { notFound: true };
  }

  const animal = animals.find((a) => a.id === mission.animalId);

  return {
    props: {
      mission,
      animal: animal || null,
    },
  };
};

export default MissionDetail;