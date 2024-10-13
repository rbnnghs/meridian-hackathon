import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { missions, RescueMission } from '../../data/missions';
import Link from 'next/link';
import { useState } from 'react';

const MissionsPage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const filteredMissions = missions.filter((mission) => {
    const matchesStatus = statusFilter === 'All' || mission.status === statusFilter;
    const matchesSearch =
      mission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mission.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Beacon - Rescue Missions</title>
        <meta name="description" content="Explore and support various rescue missions for endangered animals." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow bg-gray-100">
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Rescue Missions</h1>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <input
                type="text"
                placeholder="Search missions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-1/3 p-2 border border-gray-300 rounded mb-4 md:mb-0"
              />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full md:w-1/4 p-2 border border-gray-300 rounded"
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Missions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMissions.map((mission) => (
                <div key={mission.id} className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-2xl font-semibold mb-2">{mission.title}</h2>
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

export default MissionsPage;