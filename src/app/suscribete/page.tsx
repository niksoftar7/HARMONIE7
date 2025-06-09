// /suscribete/page.tsx
'use client';
import React from 'react';

const SubscribePage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#5a3e2b] to-[#C19A6B] flex items-center justify-center px-4 ">
      <form
        className="w-full max-w-2xl bg-[#2c1b10] text-white p-10 rounded-3xl shadow-2xl backdrop-blur-md my-30"
        id="formulario-inscripcion"
      >
        <h2 className="text-center text-2xl font-bold mb-8 text-[#e6c7a3]">¡Regístrate!</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <label htmlFor="tipoDoc" className="text-sm">Tipo de documento</label>
          <select id="tipoDoc" className="bg-[#3b2a1e] text-white p-2 rounded-md" required>
            <option value="">Selecciona</option>
            <option value="cc">Cédula de ciudadanía</option>
            <option value="ti">Tarjeta de identidad</option>
            <option value="ce">Cédula de extranjería</option>
          </select>

          <label htmlFor="numeroDoc" className="text-sm">Número de documento</label>
          <input id="numeroDoc" type="text" className="bg-[#3b2a1e] text-white p-2 rounded-md" required />

          <label htmlFor="nombre" className="text-sm">Nombre y Apellidos</label>
          <input id="nombre" type="text" className="bg-[#3b2a1e] text-white p-2 rounded-md" required />

          <label htmlFor="contacto" className="text-sm">Número de contacto</label>
          <input id="contacto" type="tel" className="bg-[#3b2a1e] text-white p-2 rounded-md" required />

          <label htmlFor="correo" className="text-sm">Correo electrónico</label>
          <input id="correo" type="email" className="bg-[#3b2a1e] text-white p-2 rounded-md" required />

          <label htmlFor="sexo" className="text-sm">Sexo</label>
          <select id="sexo" className="bg-[#3b2a1e] text-white p-2 rounded-md" required>
            <option value="">Selecciona</option>
            <option value="f">Femenino</option>
            <option value="m">Masculino</option>
            <option value="o">Otro</option>
          </select>

          <label htmlFor="fecha" className="text-sm">Fecha de nacimiento</label>
          <input id="fecha" type="date" className="bg-[#3b2a1e] text-white p-2 rounded-md" required />

          <label htmlFor="paises" className="text-sm">País(es) de residencia</label>
          <select id="paises"  className="bg-[#3b2a1e] text-white p-2 rounded-md ">
            <option value="">Selecciona</option>
            <option>Colombia</option>
            <option>Argentina</option>
            <option>España</option>
            <option>México</option>
            <option>Chile</option>
          </select>

          <label htmlFor="departamento" className="text-sm">Departamento</label>
          <input id="departamento" type="text" className="bg-[#3b2a1e] text-white p-2 rounded-md" />

          <label htmlFor="ciudad" className="text-sm">Ciudad</label>
          <input id="ciudad" type="text" className="bg-[#3b2a1e] text-white p-2 rounded-md" />
        </div>

        <div className="mt-6">
          <label htmlFor="comentarios" className="text-sm block mb-1">Comentarios</label>
          <textarea id="comentarios" className="w-full bg-[#3b2a1e] text-white p-2 rounded-md h-24"></textarea>
        </div>

        <div className="text-center mt-8">
          <button className="bg-[#e6c7a3] text-black font-semibold px-6 py-2 rounded hover:bg-[#f2d8b6] transition">
            Enviar inscripción
          </button>
        </div>
      </form>
    </section>
  );
};

export default SubscribePage;
