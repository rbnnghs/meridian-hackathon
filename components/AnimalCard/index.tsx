// components/AnimalCard.tsx
import Link from 'next/link'

interface Animal {
  id: number
  name: string
  species: string
  image: string
  description: string
  status: string
}

interface Props {
  animal: Animal
}

const AnimalCard: React.FC<Props> = ({ animal }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{animal.name}</h2>
        <p className="text-gray-600 mb-4">{animal.species}</p>
        <p className="text-gray-700 mb-4">{animal.description}</p>
        <p className="text-sm text-red-500 mb-4">Status: {animal.status}</p>
        <Link href={`/animals/${animal.id}`}>
          <span className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Support Now</span>
        </Link>
      </div>
    </div>
  )
}

export default AnimalCard
