// // pages/dashboard.tsx
// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import { useState, useEffect } from 'react'
// import { getUserNFTs } from '../utils/blockchain' 

// interface NFT {
//   id: string
//   animalName: string
//   image: string
//   rescueDate: string
//   metadata: string
// }

// const Dashboard: NextPage = () => {
//   const [nfts, setNfts] = useState<NFT[]>([])

//   useEffect(() => {
//     // Fetch user NFTs from blockchain or backend
//     const fetchNFTs = async () => {
//       const userNFTs = await getUserNFTs() // Implement this function
//       setNfts(userNFTs)
//     }
//     fetchNFTs()
//   }, [])

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Head>
//         <title>FaunaChain - Dashboard</title>
//         <meta name="description" content="View your contributions and owned NFTs on FaunaChain." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Navbar />

//       <main className="flex-grow bg-gray-100">
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">Your Dashboard</h1>
//             {nfts.length === 0 ? (
//               <p className="text-center">You have not supported any animals yet.</p>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {nfts.map((nft) => (
//                   <div key={nft.id} className="bg-white p-6 rounded-lg shadow-lg">
//                     <img src={nft.image} alt={nft.animalName} className="w-full h-48 object-cover rounded-md mb-4" />
//                     <h3 className="text-xl font-semibold mb-2">{nft.animalName}</h3>
//                     <p className="text-gray-600">Rescued on: {nft.rescueDate}</p>
//                     {/* Add more NFT details or actions as needed */}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   )
// }

// export default Dashboard
