// components/NFTCard.tsx

import React from 'react';
import { NFT } from '../types';
import Image from 'next/image';

interface NFTCardProps {
  nft: NFT;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={nft.animal.image}
          alt={nft.animal.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{nft.animal.name}</h2>
        <p className="text-gray-600 mb-4">{nft.animal.species}</p>
        <p className="text-gray-700 mb-4">{nft.metadata}</p>
        <p className="text-sm text-gray-500 mb-4">Rescue Date: {nft.rescueDate}</p>
        <details className="group">
          <summary className="cursor-pointer text-blue-600 hover:underline">View Updates</summary>
          <div className="mt-2 space-y-2">
            {nft.updates.map((update, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4">
                <p className="text-gray-700"><strong>{update.date}:</strong> {update.content}</p>
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
};

export default NFTCard;
