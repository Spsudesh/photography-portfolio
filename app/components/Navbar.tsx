'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import imageLoader from '../../image-loader';

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShowNav, setShouldShowNav] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      
      setShouldShowNav(!isScrollingDown);
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigateToService = (sectionId: string) => {
    // First navigate to the services page
    router.push('/services');
    
    // Then scroll to the section after a short delay to allow the page to load
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    
    // Close both dropdowns
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.services-dropdown') && !target.closest('.services-button')) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      shouldShowNav 
        ? 'translate-y-0 bg-[#0B0F17] shadow-lg' 
        : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                loader={imageLoader}
                src="/images/logo.jpg"
                alt="RP Photography Logo"
                width={50}
                height={50}
                className="rounded-full"
                priority
              />
              <span className="ml-3 text-xl font-semibold text-white">RP Photography</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <div className="relative services-dropdown">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="services-button text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
                <div className={`absolute top-full left-0 mt-2 w-48 bg-[#0B0F17] rounded-lg shadow-lg transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                  <div className="py-2">
                    <button
                      onClick={() => navigateToService('outdoor')}
                      className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                    >
                      Outdoor Photography
                    </button>
                    <button
                      onClick={() => navigateToService('wedding')}
                      className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                    >
                      Wedding Photography
                    </button>
                    <button
                      onClick={() => navigateToService('indoor')}
                      className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                    >
                      Indoor Photography
                    </button>
                  </div>
                </div>
              </div>
              <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-[#0B0F17]`}
      >
        <div className="px-4 py-2 space-y-2">
          <Link
            href="/"
            className="block text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="space-y-2">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            {isServicesOpen && (
              <div className="pl-4 space-y-2">
                <button
                  onClick={() => navigateToService('outdoor')}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors"
                >
                  Outdoor Photography
                </button>
                <button
                  onClick={() => navigateToService('wedding')}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors"
                >
                  Wedding Photography
                </button>
                <button
                  onClick={() => navigateToService('indoor')}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors"
                >
                  Indoor Photography
                </button>
              </div>
            )}
          </div>
          <Link
            href="/gallery"
            className="block text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="block text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 