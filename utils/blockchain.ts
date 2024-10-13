import { NFT, Animal } from '../types';

// Mock function to simulate fetching NFTs from the blockchain or backend
export const getUserNFTs = async (userWalletAddress: string): Promise<NFT[]> => {
  // In a real implementation, replace this with actual blockchain or API calls
  // Example: Fetch NFTs from Stellar blockchain associated with the user's wallet address

  // Mock data
  const mockAnimals: Animal[] = [
    {
      id: 1,
      name: 'Snow Leopard',
      species: 'Panthera uncia',
      image: '/animal_jpg/SnowLeopard.jpg',
      description: 'Snow leopards are endangered due to habitat loss and poaching.',
      status: 'Critical',
    },
    {
      id: 3,
      name: 'Javan Rhino',
      species: 'Rhinoceros sondaicus',
      image: '/animal_jpg/JavanRino.jpg',
      description: 'Javan rhinos are critically endangered with fewer than 75 individuals remaining.',
      status: 'Critical',
    },
    // Add more mock animals as needed
  ];

  const mockNFTs: NFT[] = [
    {
      id: 'nft1',
      animal: mockAnimals[0],
      rescueDate: '2024-04-15',
      metadata: 'Rescued Snow Leopard #1 on April 15, 2024',
    },
    {
      id: 'nft2',
      animal: mockAnimals[1],
      rescueDate: '2024-05-20',
      metadata: 'Rescued Javan Rhino #3 on May 20, 2024',
    },
  ];

  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNFTs);
    }, 1000);
  });
};