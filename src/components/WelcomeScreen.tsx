import React from 'react';
import { Dumbbell, ChevronRight } from 'lucide-react';

export const WelcomeScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-6 text-center animate-fade-in">
      {/* Ícone Central */}
      <div className="w-32 h-32 bg-blue-600/20 rounded-3xl border border-blue-500/30 flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/20">
        <Dumbbell className="w-16 h-16 text-blue-500" />
      </div>

      {/* Nome do App Restaurado */}
      <div className="mb-12">
        <h1 className="text-5xl font-black text-white leading-none tracking-tighter uppercase">Personal</h1>
        <h1 className="text-5xl font-black text-blue-500 leading-none tracking-tighter uppercase">Pessoal</h1>
      </div>

      {/* Botão de Ação */}
      <button 
        onClick={onStart} 
        className="w-full max-w-xs bg-white text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
      >
        Começar Treino <ChevronRight size={20} />
      </button>

      <p className="absolute bottom-10 text-gray-600 text-[10px] font-black tracking-[0.3em] uppercase">
        Vaúna Systems v1.0
      </p>
    </div>
  );
};