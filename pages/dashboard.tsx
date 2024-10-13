// pages/dashboard.tsx

import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NFTCard from '../components/NFTCard';
import { useState, useEffect } from 'react';
import { getUserNFTs } from '../utils/blockchain';
import { NFT } from '../types';

const Dashboard: NextPage = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Placeholder user wallet address
  const userWalletAddress = 'GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const userNFTs = await getUserNFTs(userWalletAddress);
        setNfts(userNFTs);
      } catch (err) {
        setError('Failed to fetch NFTs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Head>
        <title>FaunaChain - Dashboard</title>
        <meta name="description" content="View your contributions and owned NFTs on FaunaChain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-gray-800">
              Your Dashboard
            </h1>
            <p className="text-xl text-center mb-12 text-gray-600">
              Track your contributions and view the unique NFTs you've earned for supporting endangered animals.
            </p>

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="text-center text-red-500">
                <p>{error}</p>
              </div>
            )}

            {/* NFTs Display */}
            {!loading && !error && (
              <>
                {nfts.length === 0 ? (
                  <p className="text-center text-gray-700">You have not supported any animals yet.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nfts.map((nft) => (
                      <NFTCard key={nft.id} nft={nft} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
