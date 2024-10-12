// components/Navbar.tsx
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-green-600">FaunaChain</span>
        </Link>
        <div className="space-x-4">
          <Link href="/">
            <span className="text-gray-700 hover:text-green-600">Home</span>
          </Link>
          <Link href="/animals">
            <span className="text-gray-700 hover:text-green-600">Animals</span>
          </Link>
          <Link href="/dashboard">
            <span className="text-gray-700 hover:text-green-600">Dashboard</span>
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
