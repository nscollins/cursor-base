import React from 'react';
import { CardContent } from '@/components/ui/card';
import { SleepMetric } from './SleepMetric';
import { SleepMetrics } from '@/lib/sleepUtils';

interface RitualsCardProps {
  metrics: SleepMetrics;
}

export function RitualsCard({ metrics }: RitualsCardProps) {
  return (
    <CardContent className="p-6">
      <div className="space-y-4">
        <h3 className="text-xl font-medium text-white text-left">Rituals</h3>
        
        <div className="mt-2 space-y-3">
          <SleepMetric 
            label="Routine usage" 
            value={`${Math.round(metrics.bedtimeRoutineUsage)}%`} 
          />
          <SleepMetric 
            label="Average duration" 
            value={`${Math.round(metrics.avgRoutineDuration)} min`} 
          />
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-700 text-sm text-gray-400">
          {metrics.bedtimeRoutineUsage >= 80 ? (
            "You're consistently using bedtime routines. Excellent habit!"
          ) : metrics.bedtimeRoutineUsage >= 50 ? (
            "You're using bedtime routines frequently. Try to be more consistent."
          ) : (
            "You're not using bedtime routines regularly. Consider establishing a nightly ritual."
          )}
        </div>
      </div>
    </CardContent>
  );
}
