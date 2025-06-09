// /login/page.tsx

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#5a3e2b] to-[#C19A6B]">
      <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-10 w-full max-w-md shadow-[0_0_40px_rgba(193,154,107,0.4)] border border-[#C19A6B]/30">
        <div className="flex justify-center mb-6">
          <div className="bg-[#C19A6B] rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-[#C19A6B] font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-[#ffffff12] text-white placeholder-white/70 border border-[#C19A6B]/40 focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
              placeholder="ingresa el email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#C19A6B] font-semibold mb-1">
              contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-lg bg-[#ffffff12] text-white placeholder-white/70 border border-[#C19A6B]/40 focus:outline-none focus:ring-2 focus:ring-[#C19A6B]"
              placeholder="ingresa la contraseña"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-white">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#C19A6B]" /> Recuerdame
            </label>
            <a href="#" className="hover:underline text-[#C19A6B]">
              Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 mt-2 bg-[#C19A6B] text-black font-semibold rounded-lg hover:bg-[#b28559] transition duration-200"
          >
            inicia sesión
          </button>

          <p className="text-center text-white text-sm mt-4">
            No tienes una cuenta?{' '}
            <a href="/suscribete" className="underline hover:text-[#C19A6B]">
              Registrate
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
