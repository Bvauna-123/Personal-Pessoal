import React from 'react';
import { Timer } from 'lucide-react';

export const Header: React.FC<HeaderProps> = ({ completedCount, totalCount, isTimerOpen, onToggleTimer }) => {
  const progress = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;
  
  return (
    <header className="px-6 pt-8 pb-6 bg-black flex flex-col gap-4">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black">Performance Profile</p>
          <h1 className="text-xl font-black text-white italic tracking-tighter">
  PERSONAL<span className="text-blue-500">PESSOAL</span>
</h1>
        </div>
        <button 
          onClick={onToggleTimer} 
          className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-all ${isTimerOpen ? 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'bg-gray-900 border border-gray-800'}`}
        >
          <Timer className={isTimerOpen ? 'text-white' : 'text-gray-400'} size={24} />
        </button>
      </div>
      
      <div className="relative h-1 w-full bg-gray-900 rounded-full overflow-hidden">
        <div 
          className="absolute h-full bg-blue-500 transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
};