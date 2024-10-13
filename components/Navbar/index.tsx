// components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, TowerControl } from 'lucide-react';

interface NavbarProps {
  theme?: 'default' | 'transparent';
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  baseColor: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, baseColor }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <span
        className={`text-sm md:text-base font-medium transition-colors duration-200 ${
          isActive ? 'text-green-600' : `${baseColor} hover:text-green-600`
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

const Navbar: React.FC<NavbarProps> = ({ theme = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Method to determine Navbar classes based on theme and scroll
  const getNavbarClasses = () => {
    const baseClasses = 'fixed w-full z-50 transition-all duration-300';

    if (theme === 'transparent') {
      if (isScrolled) {
        return `${baseClasses} bg-white shadow-md`;
      }
      return `${baseClasses} bg-transparent`;
    }

    // Default theme behavior
    if (isScrolled) {
      return `${baseClasses} bg-white shadow-md`;
    }
    return `${baseClasses} bg-transparent`;
  };

  // Method to determine text color based on theme and scroll
  const getTextColorClasses = () => {
    if (theme === 'transparent') {
      return isScrolled ? 'text-gray-700' : 'text-white';
    }
    // Default theme
    return isScrolled ? 'text-gray-700' : 'text-gray-700';
  };

  const textColor = getTextColorClasses();

  return (
    <nav className={getNavbarClasses()}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              {/* Apply the color class to the parent span */}
              <span className={`flex items-center text-2xl font-bold ${textColor}`}>
                <TowerControl className="h-8 w-auto mr-2" />
                Beacon
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/" baseColor={textColor}>
                Home
              </NavLink>
              <NavLink href="/animals" baseColor={textColor}>
                Animals
              </NavLink>
              <NavLink href="/dashboard" baseColor={textColor}>
                Dashboard
              </NavLink>
              <div className="relative group">
                <button
                  className={`flex items-center text-sm md:text-base font-medium ${textColor} hover:text-green-600 focus:outline-none`}
                >
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md py-1 z-10 shadow-lg hidden group-hover:block">
                  <Link href="/about">
                    <span
                      className={`block px-4 py-2 text-sm ${
                        isScrolled ? 'text-gray-700' : 'text-gray-700'
                      } hover:bg-green-50`}
                    >
                      About Us
                    </span>
                  </Link>
                  <Link href="/contact">
                    <span
                      className={`block px-4 py-2 text-sm ${
                        isScrolled ? 'text-gray-700' : 'text-gray-700'
                      } hover:bg-green-50`}
                    >
                      Contact
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors duration-200">
              Donate Now
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                theme === 'transparent'
                  ? isScrolled
                    ? `${textColor} hover:text-green-600`
                    : 'text-white hover:text-green-200'
                  : isScrolled
                  ? `${textColor} hover:text-green-600`
                  : 'text-white hover:text-green-200'
              } focus:outline-none`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <NavLink href="/" baseColor="text-gray-700">
              Home
            </NavLink>
            <NavLink href="/animals" baseColor="text-gray-700">
              Animals
            </NavLink>
            <NavLink href="/dashboard" baseColor="text-gray-700">
              Dashboard
            </NavLink>
            <NavLink href="/about" baseColor="text-gray-700">
              About Us
            </NavLink>
            <NavLink href="/contact" baseColor="text-gray-700">
              Contact
            </NavLink>
            <button className="w-full bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors duration-200 mt-4">
              Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
