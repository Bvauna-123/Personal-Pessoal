import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Ruler } from 'lucide-react';

export const BodyTracker: React.FC = () => {
  const [metrics, setMetrics] = useLocalStorage('gymBodyMetrics', {
    weight: '', chest: '', armR: '', armL: '', waist: '', thigh: ''
  });

  const Input = ({ label, field }: { label: string, field: keyof typeof metrics }) => (
    <div className="flex justify-between items-center bg-[#151515] p-4 rounded-xl border border-gray-800">
      <span className="text-sm font-bold text-gray-400">{label}</span>
      <input
        type="number" value={metrics[field]}
        onChange={(e) => setMetrics({...metrics, [field]: e.target.value})}
        className="w-20 bg-transparent text-right text-blue-400 font-bold focus:outline-none"
        placeholder="0.0"
      />
    </div>
  );

  return (
    <div className="px-4 pt-4 animate-fade-in">
      <div className="bg-[#1e1e1e] rounded-2xl p-6 border border-gray-800">
        <div className="flex items-center gap-3 mb-6">
          <Ruler className="text-blue-500" />
          <h2 className="text-white font-bold text-lg">Minhas Medidas</h2>
        </div>
        <div className="grid gap-3">
          <Input label="Peso (kg)" field="weight" />
          <Input label="Peitoral (cm)" field="chest" />
          <Input label="Braço Dir. (cm)" field="armR" />
          <Input label="Braço Esq. (cm)" field="armL" />
        </div>
      </div>
    </div>
  );
};