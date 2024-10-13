
import Link from "next/link"

const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-3xl">Beacon</span>
            <p className="mt-2 text-green-200">Empowering wildlife conservation through technology</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <Link href="/animals"><span className="block hover:text-green-400 transition-colors">Animals</span></Link>
            <Link href="/about"><span className="block hover:text-green-400 transition-colors">About Us</span></Link>
            <Link href="/contact"><span className="block hover:text-green-400 transition-colors">Contact</span></Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">Legal</h3>
            <Link href="/privacy"><span className="block hover:text-green-400 transition-colors">Privacy Policy</span></Link>
            <Link href="/terms"><span className="block hover:text-green-400 transition-colors">Terms of Service</span></Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-green-700 text-center text-sm text-green-300">
          © {new Date().getFullYear()} Beacon. All rights reserved.
        </div>
      </div>
    </footer>
    )
  }
  
  export default Footer
  