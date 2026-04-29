import React from 'react';
import { Dumbbell, BicepsFlexed, Activity, User, CalendarDays } from 'lucide-react';

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="fixed bottom-6 w-full px-6 z-50">
      <nav className="bg-[#111]/80 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-2 flex justify-between items-center shadow-2xl">
        {['A', 'B', 'C', 'BODY', 'HISTORY'].map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab as any)}
            className={`relative flex-1 flex flex-col items-center py-3 rounded-[2rem] transition-all ${activeTab === tab ? 'bg-white text-black' : 'text-gray-500'}`}
          >
            {activeTab === tab && <div className="absolute -top-1 h-1 w-4 bg-blue-500 rounded-full" />}
            <span className="text-xs font-black italic">{tab}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
