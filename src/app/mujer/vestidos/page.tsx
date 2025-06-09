// File: src/app/mujer/vestidos/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image'; 
import image1 from "../../../../public/mujer/image1.png";
import image2 from "../../../../public/mujer/image2.png";
import image3 from "../../../../public/mujer/image3.png";
import image4 from "../../../../public/mujer/image4.png";
import image5 from "../../../../public/mujer/image5.png";
import image6 from "../../../../public/mujer/image6.png";
import image7 from "../../../../public/mujer/image7.png";
import image8 from "../../../../public/mujer/image8.jpg";
import image9 from "../../../../public/mujer/image9.png";
import image10 from "../../../../public/mujer/image10.png";
import image11 from "../../../../public/mujer/image11.png";
import image12 from "../../../../public/mujer/image12.png";
import image13 from "../../../../public/mujer/image13.png";
import image14 from "../../../../public/mujer/image14.png";
import image15 from "../../../../public/mujer/image15.png";
import image16 from "../../../../public/mujer/image16.png";
import image17 from "../../../../public/mujer/image17.png";
import image18 from "../../../../public/mujer/image18.png";
import image19 from "../../../../public/mujer/image19.png";
import image20 from "../../../../public/mujer/image20.png";
import image21 from "../../../../public/mujer/image21.png";
import image22 from "../../../../public/mujer/image22.png";
import image23 from "../../../../public/mujer/image23.png";
import image24 from "../../../../public/mujer/image24.png";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // 👈 Importa el hook
const imagen1 = image1.src;
const imagen2 = image2.src;
const imagen3 = image3.src;
const imagen4 = image4.src;
const imagen5 = image5.src;
const imagen6 = image6.src;
const imagen7 = image7.src;
const imagen8 = image8.src;
const imagen9 = image9.src;
const imagen10 = image10.src;
const imagen11 = image11.src;
const imagen12 = image12.src;
const imagen13 = image13.src;
const imagen14 = image14.src;
const imagen15 = image15.src;
const imagen16 = image16.src;
const imagen17 = image17.src;
const imagen18 = image18.src;
const imagen19 = image19.src;
const imagen20 = image20.src;
const imagen21 = image21.src;
const imagen22 = image22.src;
const imagen23 = image23.src;
const imagen24 = image24.src;
const imagenes = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13, imagen14, imagen15, imagen16, imagen17, imagen18, imagen19, imagen20, imagen21, imagen22, imagen23, imagen24];
const productos = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  nombre: `Outfit ${i + 1}`,
  precio: `$${(Math.random() * 90 + 10).toFixed(2)}`,
  imagen: imagenes[i % imagenes.length] // Reemplaza esto por las URLs reales
}));

export default function MujerPage() {
  const router = useRouter(); // 👈 Instancia del router
  const [categoria, setCategoria] = useState('');
  const [linea, setLinea] = useState('');

  return (
    <div className="bg-white min-h-screen pt-24">
      <div className='bg-black'></div>
      <div className="flex justify-center py-4 gap-4 ">
        <button className="bg-black text-white px-4 py-2 rounded-full hover:scale-105">
          Mujer
        </button>
        <button
          className="border border-black text-black px-4 py-2 rounded-full hover:scale-105"
          onClick={() => router.push('/hombre/ropa')} // 👈 Redirección al hacer clic
        >
          Hombre
        </button>
      </div>

      <div className="flex justify-center gap-4 pb-6">
        <div>
          <label className="block font-semibold text-sm mb-1 text-black">CATEGORÍA</label>
          <select
            onChange={(e) => setCategoria(e.target.value)}
            className="border px-3 py-1 rounded text-black"
          >
            <option value="vestidos">Vestidos</option>
            <option value="relojes">Relojes</option>
            <option value="zapatos">Zapatos</option>
            <option value="bolsos">Bolsos</option>
            <option value="perfumes">Perfumes</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold text-sm mb-1 text-black">LÍNEA</label>
          <select
            onChange={(e) => setLinea(e.target.value)}
            className="border px-3 py-1 rounded text-black"
          >
            <option value="casual">Casual</option>
            <option value="elegante">Elegante</option>
            <option value="formal">Formal</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-10">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{producto.nombre}</h3>
              <p className="text-gray-600 mt-1">{producto.precio}</p>
              <button className="mt-3 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


