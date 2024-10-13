import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { missions } from '../../data/missions';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ReportsPage: NextPage = () => {
  // Prepare data for charts
  const data = missions.map((mission) => ({
    name: mission.title,
    'Funds Raised': mission.fundsRaised,
    'Fundraising Goal': mission.fundraisingGoal,
  }));

  const impactData = missions.map((mission) => ({
    name: mission.title,
    Rescued: mission.impactStatistics.rescuedAnimals,
    'Habitat Restored': mission.impactStatistics.habitatRestored,
    'Anti-Poaching Patrols': mission.impactStatistics.antiPoachingPatrols,
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Beacon - Impact Reports</title>
        <meta name="description" content="Access detailed impact reports on rescue missions and your contributions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow bg-gray-100">
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Impact Reports</h1>

            {/* Mission Fundraising Chart */}
            <div className="mb-10 bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Funds Raised vs. Goals</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Funds Raised" fill="#82ca9d" />
                  <Bar dataKey="Fundraising Goal" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Impact Statistics Chart */}
            <div className="mb-10 bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Impact Statistics</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={impactData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Rescued" fill="#8884d8" />
                  <Bar dataKey="Habitat Restored" fill="#82ca9d" />
                  <Bar dataKey="Anti-Poaching Patrols" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Detailed Reports Section */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Download Detailed Reports</h2>
              <p className="mb-4">
                Access comprehensive reports on each rescue mission, including success stories, challenges, and future plans.
              </p>
              <div className="space-y-4">
                {missions.map((mission) => (
                  <div key={mission.id} className="flex items-center justify-between p-4 border border-gray-300 rounded">
                    <div>
                      <h3 className="text-xl font-semibold">{mission.title}</h3>
                      <p className="text-gray-600">Status: {mission.status}</p>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                      Download Report
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ReportsPage;