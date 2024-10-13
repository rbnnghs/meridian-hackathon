export interface Animal {
    id: number;
    name: string;
    species: string;
    image: string;
    description: string;
    status: string;
  }
  
  export interface NFT {
    id: string;
    animal: Animal;
    rescueDate: string;
    metadata: string;
  }