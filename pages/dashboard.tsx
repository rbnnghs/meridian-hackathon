import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { missions, RescueMission } from '../data/missions';
import { animals, Animal } from '../data/animals';
import donations, { Donation } from '../data/donations';
import Link from 'next/link';

interface DashboardProps {
  userDonations: Donation[];
}

const Dashboard: NextPage<DashboardProps> = ({ userDonations }) => {
  const [selectedMission, setSelectedMission] = useState<RescueMission | null>(null);

  useEffect(() => {
    // For demo, select the first mission as default
    if (userDonations.length > 0) {
      const mission = missions.find((m) => m.id === userDonations[0].missionId);
      setSelectedMission(mission || null);
    }
  }, [userDonations]);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Beacon - Dashboard</title>
        <meta name="description" content="View your contributions and owned NFTs on Beacon." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow bg-gray-100">
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Your Dashboard</h1>

            {/* Donation Tracking */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Donation Tracking</h2>
              <div className="bg-white p-6 rounded-lg shadow">
                {userDonations.length === 0 ? (
                  <p>You have not made any donations yet.</p>
                ) : (
                  <table className="w-full table-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Amount (XLM)</th>
                        <th className="px-4 py-2">Mission</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userDonations.map((donation) => {
                        const mission = missions.find((m) => m.id === donation.missionId);
                        return (
                          <tr key={donation.id} className="text-center">
                            <td className="border px-4 py-2">{donation.date}</td>
                            <td className="border px-4 py-2">{donation.amount}</td>
                            <td className="border px-4 py-2">
                              {mission ? (
                                <Link href={`/missions/${mission.id}`}>
                                  <a className="text-green-600 hover:underline">{mission.title}</a>
                                </Link>
                              ) : (
                                'Unknown Mission'
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {/* Transaction History */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
              <div className="bg-white p-6 rounded-lg shadow">
                {userDonations.length === 0 ? (
                  <p>No transactions found.</p>
                ) : (
                  <table className="w-full table-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Amount (XLM)</th>
                        <th className="px-4 py-2">Mission</th>
                        <th className="px-4 py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userDonations.map((donation) => {
                        const mission = missions.find((m) => m.id === donation.missionId);
                        return (
                          <tr key={donation.id} className="text-center">
                            <td className="border px-4 py-2">{donation.date}</td>
                            <td className="border px-4 py-2">{donation.amount}</td>
                            <td className="border px-4 py-2">
                              {mission ? (
                                <Link href={`/missions/${mission.id}`}>
                                  <a className="text-green-600 hover:underline">{mission.title}</a>
                                </Link>
                              ) : (
                                'Unknown Mission'
                              )}
                            </td>
                            <td className="border px-4 py-2">{donation.status}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// For demo purposes, pass mock donations directly
export const getStaticProps = async () => {
  // Assume userId = 1 for demo
  const userDonations = donations.filter((donation) => donation.userId === 1);

  return {
    props: {
      userDonations,
    },
  };
};

export default Dashboard;