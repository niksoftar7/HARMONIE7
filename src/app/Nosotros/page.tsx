// /nosotros/page.tsx

'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; 
import Image from 'next/image';
import image1 from '../../../public/nosotros/image1.jpg'; 

export default function Nosotros() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image1}
          alt="Fondo Harmony"
          fill
          className="object-cover"
          priority
        />
        {/* Capa oscura con transparencia controlada */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" />
      </div>

      {/* Contenido encima del fondo */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12 pt-40 bg-white/95 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
          Sobre Nosotros
        </h1>

        <section className="text-gray-700 text-lg leading-relaxed space-y-6">
          <p>
            <strong>Harmony</strong> nace con un propósito claro: celebrar la conexión entre las personas a través del estilo. No somos solo una tienda de ropa, somos un espacio donde la moda se convierte en un puente entre lo distinto, demostrando que la verdadera armonía surge cuando dos mundos se encuentran.
          </p>
          <p>
            Creemos que el estilo no tiene  límites, por eso ofrecemos outfits pensados para ella y él, que no solo resaltan la individualidad de cada persona, sino que también pueden complementarse entre sí. En Harmony, promovemos el vestir en pareja, no como una tendencia pasajera, sino como una expresión de complicidad, conexión, belleza compartida y AMOR.
          </p>
          <p>
            Cada prenda que ofrecemos está pensada para unir, para inspirar, y para vestir historias que se entrelazan en perfecta armonía.
          </p>
          <p className="font-semibold text-gray-900">
            Harmony: diferentes estilos, una misma conexión.
          </p>
        </section>
      </div>
    </main>
  );
}
