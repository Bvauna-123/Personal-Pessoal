// Define as abas de navegação do App
export type NavigationTab = 'A' | 'B' | 'C' | 'HISTORY' | 'BODY';

// Define os IDs dos treinos válidos
export type WorkoutId = 'A' | 'B' | 'C';

// A estrutura exata do seu constants.ts original
export interface Exercise {
  id: string;          
  name: string;        
  series: string;      // Alterado para string para aceitar "Aquecimento", "4", etc.
  reps: string;        
  obs: string;         
  icon: string;        
  guide: string;       
}

// O tipo que engloba toda a sua ficha
export type WorkoutsData = Record<WorkoutId, Exercise[]>;

// A estrutura para salvar as medidas corporais
export interface BodyMetrics {
  weight: string;
  chest: string;
  armR: string;
  armL: string;
  waist: string;
  thigh: string;
}