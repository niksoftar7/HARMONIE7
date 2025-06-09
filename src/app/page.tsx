"use client";

import { useEffect, useState } from 'react';
import React from 'react';
import Image from "next/image";
import image1 from "../../public/eventos/image1.png";
import image2 from "../../public/eventos/image2.png";
import image3 from "../../public/eventos/image3.png";
import image4 from "../../public/eventos/image4.jpg";
import madre1 from "../../public/noticias/madre1.png";
import madre2 from "../../public/noticias/madre2.png";
import madre3 from "../../public/noticias/madre3.png";
import invierno from "../../public/colecciones/image1.png";
import verano from "../../public/colecciones/image2.png";
import primavera from "../../public/colecciones/image3.png";
import otoño from "../../public/colecciones/image4.png";
import pareja1 from "../../public/nuevo/pareja1.png";
import { useRouter } from 'next/navigation';


const HomePage = () => {
  const router = useRouter(); 
  const imagenes = [
    { src: madre1, alt: 'Madre 1' },
    { src: madre2, alt: 'Madre 2' },
    { src: madre3, alt: 'Madre 3' }
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(intervalo);
  }, []);

  const currentImage = imagenes[indice].src.src;

  return (
    <div className="bg-white">
    <section className="relative w-full h-screen overflow-hidden" >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/carrusel/video.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Capa oscura para mejorar la legibilidad del texto */}

      {/* Texto encima del video */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">¡Bienvenid@ a nuestra tienda de moda!</h1>
        <p className="text-lg md:text-xl font-light mb-6 max-w-2xl">
          Aquí encontrarás las últimas tendencias y piezas exclusivas diseñadas
          para resaltar tu belleza y estilo único.
        </p>
        <button className="bg-[#865D3F] hover:bg-[#6b4423] text-white px-6 py-3 rounded-full text-sm font-semibold uppercase transition"onClick={() => router.push("/login")}>
          ¡Ingresa ya!
        </button>
      </div>
    </section>


      {/* Sección de selección */}
      <section className="py-16 px-8 text-center bg-white">
        <h2 className="text-3xl font-light mb-10 text-black">LA SELECCIÓN DE LA CASA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image src={image1} alt="Bolso mujer" width={400} height={500} className="mx-auto rounded shadow-md" />
            <p className="mt-4 text-black">Bolsos para mujer</p>
          </div>
          <div className="overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image src={image2} alt="Zapatos mujer" width={400} height={500} className="mx-auto rounded shadow-md" />
            <p className="mt-4 text-black">Zapatos para hombre</p>
          </div>
          <div className="overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image src={image3} alt="Zapatos hombre" width={400} height={500} className="mx-auto rounded shadow-md" />
            <p className="mt-4 text-black">Zapatos para mujer</p>
          </div>
          <div className="overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image src={image4} alt="Bolso hombre" width={400} height={500} className="mx-auto rounded shadow-md" />
            <p className="mt-4 text-black">Corbatas para hombre</p>
          </div>
        </div>
      </section>

      {/* Sección Día de la Madre con imagen cambiante */}
      <section
        className="relative w-full h-screen flex items-end justify-center bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <div className="absolute bottom-16 text-center text-white px-4">
          <h2 className="text-2xl md:text-3xl font-light mb-6">Regalos para el Día de la Madre</h2>
          <button className="bg-white text-black px-6 py-2 uppercase tracking-wider text-sm hover:bg-black hover:text-white transition">
            Descubre la selección
          </button>
        </div>
      </section>
      {/* Sección de Parejas - Inspiracional */}
      <section className="flex flex-col lg:flex-row items-center justify-between w-full bg-white py-24 px-10">
        {/* Imagen a la izquierda */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <Image
            src={pareja1}
            alt="Pareja elegante"
            width={600}
            height={600}
            className="rounded shadow-xl mx-auto"
          />
        </div>

        {/* Texto a la derecha */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-serif mb-6 text-black">LA ARMONÍA DE BRILLAR JUNTOS</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Hay algo mágico en caminar al compás del otro, en mirarse y persibirse en sintonía.
            Vestir en pareja no es solo una elección de estilo, es una union de colores,
            texturas y emociones compartidas. Cuando los tonos se encuentran, los corazones también.
            Descubre la belleza de combinar, de complementar y de brillar juntos.
          </p>
          <a href="#" className="uppercase text-sm tracking-wider font-semibold text-black hover:underline">
            Descubrir más
          </a>
        </div>
      </section>


            {/* Sección Colección de Parejas */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-serif text-center text-black mb-12">Colección de Parejas</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {/* Colección Invierno */}
          <div className="overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src={invierno}
              alt="Colección Invierno"
              width={300}
              height={400}
              className="rounded shadow-md"
            />
            <p className="text-center mt-4 font-light text-black">Invierno</p>
          </div>

          {/* Colección Verano */}
          <div className="overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src={verano}
              alt="Colección Verano"
              width={300}
              height={400}
              className="rounded shadow-md"
            />
            <p className="text-center mt-4 font-light text-black">Verano</p>
          </div>

          {/* Colección Primavera */}
          <div className="overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src={primavera}
              alt="Colección Primavera"
              width={300}
              height={400}
              className="rounded shadow-md"
            />
            <p className="text-center mt-4 font-light text-black">Primavera</p>
          </div>

          {/* Colección Otoño */}
          <div className="overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src={otoño}
              alt="Colección Otoño"
              width={300}
              height={400}
              className="rounded shadow-md"
            />
            <p className="text-center mt-4 font-light text-black">Otoño</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;