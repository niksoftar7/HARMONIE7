// /colecciones/page.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import image1 from '../../../public/colecciones/image1.png';
import image2 from '../../../public/colecciones/image2.png';
import image3 from '../../../public/colecciones/image3.png';
import image4 from '../../../public/colecciones/image4.png';
import image9 from '../../../public/colecciones/image9.png';
import image5 from '../../../public/colecciones/image5.png';
import image6 from '../../../public/colecciones/image6.png';
import image7 from '../../../public/colecciones/image7.png';
import image8 from '../../../public/colecciones/image8.png';
import { usePathname } from 'next/navigation';


const colecciones = [
  { nombre: 'INVIERNO', imagen: image1 },
  { nombre: 'VERANO', imagen: image2 },
  { nombre: 'PRIMAVERA', imagen: image3 },
  { nombre: 'OTOÑO', imagen: image4 },
  { nombre: 'ECLIPSE', imagen: image5 },
  { nombre: 'UNION', imagen: image6 },
  { nombre: 'CERTEZA', imagen: image7 },
  { nombre: 'NOUS', imagen: image8 },
];

export default function Colecciones() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white pt-25">
      {/* Sección de Colecciones */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-16 text-center">
        {colecciones.map((coleccion, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-4">
            <Image
              src={coleccion.imagen}
              alt={coleccion.nombre}
              className="w-full h-[500px] object-cover overflow-hidden transition-transform duration-300 hover:scale-105"
            />
            <h2 className="text-xl font-semibold tracking-wider text-gray-700">
              {coleccion.nombre}
            </h2>
            <button
              className="border border-gray-400 px-6 py-2 text-black tracking-wide hover:bg-gray-900 hover:text-white transition-all"
              onClick={() => router.push(`/colecciones/${coleccion.nombre.toLowerCase()}`)}
            >
              VER PRODUCTOS
            </button>
          </div>
        ))}
      </section>

      {/* Sección "Explore All" */}
      <section className="relative w-full h-[500px] my-16 ">
        <Image
          src={image9}
          alt="Explora todas las colecciones"
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-[0.5] 5"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => router.push('/')}
            className="text-white text-2xl md:text-4xl tracking-widest font-semibold hover:underline"
          >
            PRONTO NUEVOS LANZAMIENTOS
          </button>
        </div>
      </section>
    </main>
  );
}
