'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input'; // si usas ShadCN
import { Search } from 'lucide-react';

const productos = [
  { nombre: 'Vestido de seda', categoria: 'Mujer' },
  { nombre: 'Blazer clásico', categoria: 'Mujer' },
  { nombre: 'Camiseta oversized', categoria: 'Hombre' },
  { nombre: 'Jean high waist', categoria: 'Mujer' },
  { nombre: 'Zapatos formales', categoria: 'Hombre' },
];

export default function Buscar() {
  const [query, setQuery] = useState('');

  return (
    <main className="min-h-screen p-6 bg-white font-serif pt-25">
      <h1 className="text-3xl font-bold mb-6 text-center tracking-wider">Buscar Outfits</h1>

      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <Input
            placeholder="Buscar prendas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)} // permite escribir pero no filtra
            className="pr-10 border-black"
          />
          <Search className="absolute top-2.5 right-3 text-gray-500" size={20} />
        </div>
      </div>

      <div className="grid gap-4 max-w-3xl mx-auto">
        {productos.map((item, idx) => (
          <div
            key={idx}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{item.nombre}</h2>
            <p className="text-sm text-gray-500">{item.categoria}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
