import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { ExerciseCard } from './components/ExerciseCard';
import { TimerWidget } from './components/Timer';
import { WelcomeScreen } from './components/WelcomeScreen';
import { HistoryCalendar } from './components/HistoryCalendar';
import { BodyTracker } from './components/BodyTracker';
import { WORKOUTS } from './constants';
import { WorkoutId, NavigationTab } from './types';
import { RotateCcw } from 'lucide-react';
import { useLocalStorage } from './hooks/useLocalStorage';

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentTab, setCurrentTab] = useState<NavigationTab>('A');
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  
  const [history, setHistory] = useLocalStorage<string[]>('gymTrackerHistory', []);
  const [completedExercises, setCompletedExercises] = useLocalStorage<string[]>('gymTrackerCompleted', []);
  const [loads, setLoads] = useLocalStorage<Record<string, number>>('gymTrackerLoads', {});

  const activeWorkoutDataId: WorkoutId = (currentTab === 'HISTORY' || currentTab === 'BODY' ? 'A' : currentTab) as WorkoutId;
  const exercises = useMemo(() => WORKOUTS[activeWorkoutDataId], [activeWorkoutDataId]);

  const completedCount = useMemo(
    () => exercises.filter((ex) => completedExercises.includes(ex.id)).length,
    [exercises, completedExercises]
  );

  useEffect(() => {
    if (currentTab !== 'HISTORY' && currentTab !== 'BODY' && exercises.length > 0) {
        if (completedCount === exercises.length) {
            const today = new Date().toLocaleDateString('en-CA'); 
            if (!history.includes(today)) {
                setHistory(prev => [...prev, today]);
            }
        }
    }
  }, [completedCount, exercises, currentTab, history, setHistory]);

  const handleToggleComplete = (id: string) => {
    setCompletedExercises((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleUpdateLoad = (id: string, load: number) => {
    setLoads(prev => ({ ...prev, [id]: load }));
  };

  if (showWelcome) return <WelcomeScreen onStart={() => setShowWelcome(false)} />;

  const isWorkoutTab = currentTab === 'A' || currentTab === 'B' || currentTab === 'C';

  return (
    <div className="bg-black h-full w-full flex flex-col overflow-hidden font-sans text-gray-100 selection:bg-blue-500/30">
      <Header
        completedCount={isWorkoutTab ? completedCount : 0}
        totalCount={isWorkoutTab ? exercises.length : 0}
        isTimerOpen={isTimerOpen}
        onToggleTimer={() => setIsTimerOpen(!isTimerOpen)}
      />

      <TimerWidget isOpen={isTimerOpen} />

      <main className="flex-1 overflow-y-auto hide-scrollbar pb-32 pt-2 scroll-smooth relative">
        {currentTab === 'HISTORY' && <HistoryCalendar completedDates={history} />}
        {currentTab === 'BODY' && <BodyTracker />}
        {isWorkoutTab && (
            <div className="px-4 space-y-3 pt-2">
                {exercises.map((exercise) => (
                <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                    isCompleted={completedExercises.includes(exercise.id)}
                    onToggleComplete={handleToggleComplete}
                    currentLoad={loads[exercise.id] || 0}
                    onUpdateLoad={handleUpdateLoad}
                />
                ))}
            </div>
        )}
      </main>

      <Navigation activeTab={currentTab} onTabChange={setCurrentTab} />
    </div>
  );
};

export default App;