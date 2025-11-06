"use client";
import { useState } from 'react';

const Navbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left - Small Logo */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#002F6C' }}>
              CPS
            </div>
          </div>
          {/* Middle - Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Projects
            </a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Products
            </a>
            <a href="#companies" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Companies
            </a>
            <a href="#people" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              People
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Exclusive Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact Us
            </a>
          </div>

          {/* Right - Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="hidden sm:block px-4 sm:px-6 py-2 text-sm font-medium text-white rounded-lg transition-colors" style={{ backgroundColor: '#139ED5' }}>
              Log in
            </button>
            <button className="hidden sm:block px-4 sm:px-6 py-2 text-sm font-medium text-white rounded-lg transition-colors" style={{ backgroundColor: '#002F6C' }}>
              Sign Up
            </button>
            
            {/* Language Dropdown */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center space-x-2"
              >
                <span>EN</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    English
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    العربية
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
                About
              </a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
                Projects
              </a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
                Products
              </a>
              <a href="#companies" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
                Companies
              </a>
              <a href="#people" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
                People
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
                Exclusive Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2">
                Contact Us
              </a>
              
              <div className="border-t border-gray-200 pt-3 px-4 space-y-2">
                <button className="w-full px-6 py-2 text-sm font-medium text-white rounded-lg transition-colors" style={{ backgroundColor: '#139ED5' }}>
                  Log in
                </button>
                <button className="w-full px-6 py-2 text-sm font-medium text-white rounded-lg transition-colors" style={{ backgroundColor: '#002F6C' }}>
                  Sign Up
                </button>
                
                <div className="relative">
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="w-full px-4 py-2 text-sm font-medium text-gray-700 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>EN</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isLanguageOpen && (
                    <div className="mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        English
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        العربية
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;