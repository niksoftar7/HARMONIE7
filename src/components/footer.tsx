
'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import logo from '../../public/nav/logo.jpg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import page2 from '../app/suscribete/page';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const router = useRouter(); 



  return (
    <footer className="bg-black text-white text-xs px-6 md:px-20 py-12 font-light">
      <div className="text-center mb-12">
        <p className="uppercase tracking-wider mb-3">Regístrese para recibir las novedades de Harmonie</p>
        <p className="max-w-2xl mx-auto">
          Reciba actualizaciones exclusivas sobre el lanzamiento de la colección, comunicaciones personalizadas y las últimas noticias de la Firma.
        </p>

        <button
        className="mt-4 underline bg-white border-white text-black px-4 py-2 rounded"
        onClick={() => router.push("/suscribete")}
      >
        +Suscribirse
      </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Columna 1 */}
        <div className="space-y-2">
          <a href="#" className="block hover:underline">Contacto</a>
          <a href="#" className="block hover:underline">Mi pedido</a>
          <a href="#" className="block hover:underline">Preguntas frecuentes</a>
          <a href="#" className="block hover:underline">Desinscribirse del boletín</a>
          <a href="#" className="block hover:underline">Mapa del sitio</a>
        </div>
        {/* Columna 2 */}
        <div className="space-y-2">
          <a href="#" className="block hover:underline">Acerca de Harmonie</a>
          <a href="#" className="block hover:underline">Harmonie Equilibrium</a>
          <a href="#" className="block hover:underline">Código ético</a>
          <a href="#" className="block hover:underline">Trabaja en Harmonie</a>
          <a href="#" className="block hover:underline">Avisos legales</a>
          <a href="#" className="block hover:underline">Privacidad y cookies</a>
          <a href="#" className="block hover:underline">Información societaria</a>
        </div>
        {/* Columna 3 */}
        <div className="space-y-4">
          <div>
            <p className="mb-2">Localizador de tiendas</p>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-black border-b border-white w-full p-1 outline-none"
            >
              <option value="">PAÍS/REGIÓN, CIUDAD</option>
              <option value="Colombia">Colombia</option>
              <option value="México">México</option>
              <option value="España">España</option>
              <option value="Francia">Francia</option>
              <option value="Argentina">Argentina</option>
            </select>
          </div>

          <form  className="space-y-2">
            <p className="text-[11px]">
              Al introducir su dirección de correo electrónico aquí debajo, acepta recibir nuestro newsletter con las últimas novedades...
            </p>
            <div className="flex border-b border-white items-center">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="bg-black w-full p-1 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="text-white p-1">
                <ChevronRight size={18} />
              </button>
            </div>
          </form>
        </div>
        {/* Columna 4 */}
        <div className="space-y-2">
          <p className="mb-2">Idioma</p>
          <p className="mb-6">ESPAÑOL</p>
          <p>PAÍS/REGIÓN</p>
          <p>COLOMBIA</p>
        </div>
      </div>

      {/* Footer legal */}
      <div className="text-center text-[10px] text-gray-400 mt-12">
        <p className="mb-2">
          © 2016 - 2025 Harmonie S.p.A. - Todos los derechos reservados. G Commerce Europe S.p.A - IT VAT nr 05142860484. LICENCIA S.A.EN. 2294/1993 y 5647/1993.
        </p>
      </div>
      <Image 
        src={logo}
        alt="logo"
        width={400}
        className="mx-auto mt-4"/>
    </footer>
  );
};

export default Footer;
