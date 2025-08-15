'use client'; 

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="main-container">
      <nav className={`flex items-center justify-between px-6 lg:px-26 py-8 h-30 relative ${className}`}>
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="img/frutico-logo.svg"
            alt="frutico logo"
            width={162}
            height={40}
            className="w-[162px] h-[40px] flex-shrink-0"
          />
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-4 nav-links">
        <NavItem text="Funktionen" href="/funktionen" />
        <NavItem text="Referenzen" href="/referenzen" />
        <NavItem text="Technologie" href="/technologie" />
        <NavItem text="Dienstleistungen" href="/dienstleistungen" />
        <NavItem text="Kontakt" href="/kontakt" />
      </div>

      {/* Desktop CTA Button */}
      <Link href="/kontakt/" className="hidden lg:block">
        <button className="bg-gradient-to-b from-transparent to-black/10 bg-[#0068A1] text-white px-6 py-4 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          Jetzt Demo buchen
        </button>
      </Link>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50 relative"
        aria-label="Toggle mobile menu"
      >
        <span
          className={`block w-6 h-0.5 bg-[#228C49] transform transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#228C49] transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#228C49] transform transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/80 z-40" onClick={toggleMobileMenu} />
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col pt-20 px-6 space-y-6">
          <MobileNavItem text="Funktionen" href="/funktionen" onClick={toggleMobileMenu} />
          <MobileNavItem text="Referenzen" href="/referenzen" onClick={toggleMobileMenu} />
          <MobileNavItem text="Technologie" href="/technologie" onClick={toggleMobileMenu} />
          <MobileNavItem text="Dienstleistungen" href="/dienstleistungen" onClick={toggleMobileMenu} />
          <MobileNavItem text="Dashboard" href="/dashboard" onClick={toggleMobileMenu} />
          <MobileNavItem text="Kontakt" href="/kontakt" onClick={toggleMobileMenu} />
          
          {/* Mobile CTA Button */}
          <div className="pt-6">
            <Link href="/kontakt/" onClick={toggleMobileMenu}>
              <button className="w-full bg-gradient-to-b from-transparent to-black/10 bg-[#0068A1] text-white px-6 py-4 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                Jetzt Demo buchen
              </button>
            </Link>
          </div>
        </div>
      </div>
      </nav>
    </div>
  );
}

function NavItem({ text, href }: { text: string; href: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link 
      href={href} 
      className={`
        px-4 py-3 block nav-link
        ${isActive
          ? 'nav-link-active'
          : 'nav-link'
        }
      `}
      >
      {text}
    </Link>
  );
}

function MobileNavItem({ text, href, onClick }: { text: string; href: string; onClick: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        block px-4 py-3 text-lg font-semibold
        ${isActive
          ? 'text-[#186635] font-bold'
          : 'text-[#228C49] hover:text-[#186635] border-b border-gray-100'
        }
      `}
      >
      {text}
    </Link>
  );
}
