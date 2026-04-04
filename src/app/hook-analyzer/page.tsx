'use client';
import React, { useState } from 'react';
import { Target, Zap, ChevronRight } from 'lucide-react';

export default function HookAnalyzer() {
  const [hookText, setHookText] = useState('');

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-8">
      
      {/* Navigation Minimaliste */}
      <nav className="flex justify-between items-center mb-20 max-w-5xl mx-auto">
        <div className="text-xl font-black tracking-tighter">HUKD<span className="text-blue-600">.</span></div>
        <button className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors">
          Rejoindre la Bêta Privée
        </button>
      </nav>

      <main className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-10">
        <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-1.5 text-sm font-medium text-cyan-400">
          <Zap className="w-4 h-4" />
          <span>Outil Gratuit</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Ton Hook est-il <span className="text-red-500">éclaté</span> ?
        </h1>
        
        <p className="text-neutral-400 text-lg">
          Colle les 3 premières secondes de ta vidéo. Notre IA va te donner un score de viralité sur 100 et te dire exactement pourquoi les gens scrollent.
        </p>

        {/* Input Area */}
        <div className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-left shadow-xl">
          <label className="block text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">
            Script du Hook (Texte)
          </label>
          <textarea 
            rows={4}
            placeholder="Ex: Salut tout le monde, aujourd'hui on va parler de..."
            className="w-full bg-[#111] border border-neutral-800 rounded-xl p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-lg"
            value={hookText}
            onChange={(e) => setHookText(e.target.value)}
          />
          
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs text-neutral-500 font-mono">
              {hookText.length}/150 caractères
            </span>
            <button className="flex items-center space-x-2 bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-neutral-200 transition-colors">
              <span>Analyser mon Hook</span>
              <Target className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Upsell furtif (A n'afficher qu'après le résultat dans la version finale) */}
        <div className="mt-12 p-4 bg-blue-900/10 border border-blue-900/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between w-full">
          <div className="text-left mb-4 sm:mb-0">
            <h4 className="text-white font-bold mb-1">Tu bloques sur l'écriture ?</h4>
            <p className="text-sm text-neutral-400">Hukd génère des hooks score 99/100 automatiquement.</p>
          </div>
          <button className="flex items-center space-x-1 text-sm bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
            <span>Accès Anticipé</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
