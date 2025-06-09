'use client';
import { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import logo from "../../public/nav/logo.jpg";
import Link from "next/link";
import lupita from "../../public/nav/lupita.png";
import carro from "../../public/nav/carro.png";
import user from "../../public/nav/user.png";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCartInfo, setShowCartInfo] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isSpecialPage = pathname.startsWith('/mujer') || pathname.startsWith('/hombre') || pathname.startsWith('/Nosotros') || pathname.startsWith('/colecciones') || pathname.startsWith('/buscar');
  useEffect(() => {
    if (!isSpecialPage) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isSpecialPage]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setShowCartInfo(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-100 group ${
        isSpecialPage
          ? 'bg-black text-white shadow-md'
          : scrolled
            ? 'bg-black text-white'
            : 'bg-transparent text-white hover:bg-black hover:text-white'
      }`}
    >
      <div className="flex justify-around items-center py-2">
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="logo" width={150} />
          </Link>
        </div>

        <Link className="font-bold hover:underline" href="/mujer/vestidos">MUJER</Link>
        <Link className="font-bold hover:underline" href="/hombre/ropa">HOMBRE</Link>
        <Link className="font-bold hover:underline" href="/colecciones">COLECCIONES</Link>
        <Link className="font-bold hover:underline" href="/Nosotros">NOSOTROS</Link>

        <div className="flex items-center gap-5 relative">
          <Link href="/buscar">
            <Image src={lupita} alt="lupita" width={40} />
          </Link>

          <div ref={cartRef} className="relative">
            <button onClick={() => setShowCartInfo(!showCartInfo)}>
              <Image src={carro} alt="carro" width={35} />
            </button>

            {showCartInfo && (
              <div className="absolute top-10 right-0 w-72 bg-white border border-gray-300 rounded-md shadow-lg p-4 z-50">
                <div className="flex items-center gap-2 text-sm text-gray-800">
                  <span className="text-black text-lg">ℹ️</span>
                  <p>Su bolsa de compra está actualmente vacía</p>
                </div>
              </div>
            )}
          </div>

          <Link href="/login">
            <Image src={user} alt="user" width={30} className="transition duration-300" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
