import React from 'react';
import { Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-4">
      
      {/* Header Minimaliste */}
      <div className="absolute top-6 left-6 text-2xl font-black tracking-tighter text-white">
        HUKD<span className="text-blue-600">.</span>
      </div>

      <div className="w-full max-w-3xl flex flex-col items-center text-center space-y-8 mt-[-10vh]">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-100">
          Que vas-tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">créer</span> aujourd'hui ?
        </h1>
        
        <p className="text-neutral-400 text-lg md:text-xl max-w-xl">
          Entre ton idée. On génère le script, le hook, l'audio et les B-Rolls en 5 secondes.
        </p>

        {/* Search Bar Type Google */}
        <div className="w-full relative group mt-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center bg-neutral-900 border border-neutral-800 rounded-2xl p-2 shadow-2xl">
            <Search className="w-6 h-6 text-neutral-500 ml-4" />
            <input 
              type="text" 
              placeholder="Ex: Une vidéo sur les arnaques du dropshipping..." 
              className="w-full bg-transparent border-none text-white px-4 py-4 focus:outline-none text-lg placeholder-neutral-600"
            />
            <button className="bg-white text-black font-bold px-8 py-3 rounded-xl hover:bg-neutral-200 transition-colors">
              Générer
            </button>
          </div>
        </div>

        <div className="flex space-x-4 text-sm text-neutral-500 mt-6 font-medium">
          <span className="hover:text-neutral-300 cursor-pointer transition-colors">🎯 Hooks</span>
          <span>•</span>
          <span className="hover:text-neutral-300 cursor-pointer transition-colors">🎙️ Voix ElevenLabs</span>
          <span>•</span>
          <span className="hover:text-neutral-300 cursor-pointer transition-colors">🎬 B-Rolls Viraux</span>
        </div>
      </div>
    </div>
  );
}
