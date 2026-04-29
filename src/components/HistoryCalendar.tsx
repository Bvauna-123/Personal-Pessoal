import React from 'react';
import { Trophy } from 'lucide-react';

export const HistoryCalendar: React.FC<{ completedDates: string[] }> = ({ completedDates }) => {
  const today = new Date().toLocaleDateString('en-CA');
  return (
    <div className="px-4 pt-4 animate-fade-in">
      <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-gray-800">
        <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Trophy className="text-yellow-500" size={20} /> Histórico de Treinos
        </h2>
        <div className="space-y-2">
          {completedDates.length === 0 ? (
            <p className="text-gray-500 text-sm">Nenhum treino registrado ainda. Bons treinos!</p>
          ) : (
            completedDates.sort().reverse().map(date => (
              <div key={date} className="flex justify-between items-center bg-gray-900/50 p-3 rounded-xl border border-gray-800">
                <span className="text-gray-300 font-mono">{date}</span>
                <span className="text-green-500 text-xs font-bold uppercase">Concluído</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};