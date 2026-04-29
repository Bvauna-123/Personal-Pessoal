import React, { useEffect, useState, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Timer } from 'lucide-react';
import React from 'react';
import { Timer } from 'lucide-react';

interface TimerProps {
  isOpen: boolean;
}

export const TimerWidget: React.FC<TimerProps> = ({ isOpen }) => {
  // Armazena o timestamp de quando o cronômetro foi iniciado
  const [startTime, setStartTime] = useLocalStorage<number | null>('gymTimerStart', null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    let interval: number | undefined;

    if (startTime !== null) {
      // Calcula o tempo decorrido com base na diferença de horários
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
      
      interval = window.setInterval(() => {
        setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    } else {
      window.clearInterval(interval);
      setElapsedSeconds(0);
    }

    return () => window.clearInterval(interval);
  }, [startTime]);

  const toggleTimer = () => {
    if (startTime === null) {
      // Inicia o cronômetro salvando o momento atual
      setStartTime(Date.now());
    } else {
      // Pausa o cronômetro
      setStartTime(null);
    }
  };

  const resetTimer = () => {
    setStartTime(null);
    setElapsedSeconds(0);
  };

  // Formata os segundos para o padrão MM:SS
  const formattedTime = useMemo(() => {
    const mins = Math.floor(elapsedSeconds / 60).toString().padStart(2, '0');
    const secs = (elapsedSeconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }, [elapsedSeconds]);

  if (!isOpen) return null;

  return (
    <div className="px-5 pb-2 animate-fade-in">
      <div className="bg-[#1e1e1e] rounded-2xl p-4 border border-gray-800 flex justify-between items-center shadow-xl">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Descanso</span>
          <span className="text-4xl font-mono font-black text-white tabular-nums">
            {formattedTime}
          </span>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={toggleTimer}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all active:scale-95 ${
              startTime !== null 
                ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' 
                : 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
            }`}
          >
            {startTime !== null ? 'PAUSAR' : 'INICIAR'}
          </button>
          
          <button 
            onClick={resetTimer}
            className="p-3 rounded-xl bg-gray-800 text-gray-400 border border-gray-700 active:scale-95"
          >
            ZERAR
          </button>
        </div>
      </div>
    </div>
  );
};