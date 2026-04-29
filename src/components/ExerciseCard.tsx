import React, { useState } from 'react';
import { CheckCircle2, Circle, ChevronDown, ChevronUp, Info, ChevronRight } from 'lucide-react';
import { Exercise } from '../types';

interface ExerciseCardProps {
  exercise: Exercise;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
  currentLoad: number;
  onUpdateLoad: (id: string, load: number) => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ 
  exercise, isCompleted, onToggleComplete, currentLoad, onUpdateLoad 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group relative overflow-hidden rounded-[2rem] transition-all duration-300 border ${
      isCompleted ? 'border-green-500/20 bg-green-500/5' : 'border-white/5 bg-[#0a0a0a]'
    }`}>
      <div className="p-5 flex items-center justify-between gap-4">
        {/* Checkbox Interativo */}
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleComplete(exercise.id); }}
          className="flex-shrink-0 transition-transform active:scale-90"
        >
          {isCompleted ? (
            <CheckCircle2 className="text-green-500" size={28} />
          ) : (
            <Circle className="text-gray-700" size={28} />
          )}
        </button>

        {/* Informações Básicas (Click expande) */}
        <div className="flex-1 min-w-0" onClick={() => setIsExpanded(!isExpanded)}>
          <h3 className={`text-lg font-bold truncate ${isCompleted ? 'text-gray-500 line-through' : 'text-white'}`}>
            {exercise.name}
          </h3>
          <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
            {exercise.series} Séries • {exercise.reps} Reps
          </p>
        </div>

        <button onClick={() => setIsExpanded(!isExpanded)} className="text-gray-600 p-2">
          <ChevronRight className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
        </button>
      </div>

      {/* Área Expandível (Detalhes e Carga) */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-5 pb-6 pt-2 border-t border-white/5 flex flex-col gap-5">
          
          {/* Controle de Carga Técnico */}
          <div className="flex items-center justify-between bg-black rounded-2xl p-4 border border-white/5">
            <span className="text-xs font-black text-gray-500 uppercase tracking-tighter">Carga Atual</span>
            <div className="flex items-center gap-6">
              <button onClick={() => onUpdateLoad(exercise.id, Math.max(0, currentLoad - 2))} className="p-2 bg-gray-900 rounded-lg text-gray-400">
                <ChevronDown size={20} />
              </button>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-white">{currentLoad}</span>
                <span className="text-[8px] text-blue-500 font-bold uppercase">Kilos</span>
              </div>
              <button onClick={() => onUpdateLoad(exercise.id, currentLoad + 2)} className="p-2 bg-blue-600 rounded-lg text-white">
                <ChevronUp size={20} />
              </button>
            </div>
          </div>

          {exercise.guide && (
            <div className="flex gap-3 bg-blue-500/5 rounded-2xl p-4 border border-blue-500/10">
              <Info className="text-blue-500 flex-shrink-0" size={16} />
              <p className="text-xs text-gray-400 leading-relaxed italic">{exercise.guide}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};