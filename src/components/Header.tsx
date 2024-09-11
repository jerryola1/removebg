"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-transparent z-50 mb-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold gradient-text">RemoveBG</div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="gradient-text hover:opacity-80">Home</Link>
            <Link href="/about" className="gradient-text hover:opacity-80">About</Link>
            <Link href="/contact" className="gradient-text hover:opacity-80">Contact</Link>
          </nav>
          <button className="md:hidden gradient-text" onClick={toggleMenu}>
            <Image src="/menu.webp" alt="Menu" width={32} height={32} />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-30 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}>
        <nav className={`fixed left-0 top-0 bottom-0 w-64 bg-transparent backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4">
            <Link href="/" className="block py-3 text-lg gradient-text hover:text-blue-500 active:text-blue-700">Home</Link>
            <Link href="/about" className="block py-3 text-lg gradient-text hover:text-blue-500 active:text-blue-700">About</Link>
            <Link href="/contact" className="block py-3 text-lg gradient-text hover:text-blue-500 active:text-blue-700">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
