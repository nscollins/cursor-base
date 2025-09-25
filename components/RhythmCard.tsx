import React from 'react';
import { CardContent } from '@/components/ui/card';
import { SleepMetric } from './SleepMetric';
import { SleepMetrics } from '@/lib/sleepUtils';

interface RhythmCardProps {
  metrics: SleepMetrics;
}

export function RhythmCard({ metrics }: RhythmCardProps) {
  return (
    <CardContent className="p-6">
      <div className="space-y-4">
        <h3 className="text-xl font-medium text-white text-left">Rhythm</h3>
        
        <div className="mt-2 space-y-3">
          <SleepMetric 
            label="Bedtime consistency" 
            value={`${Math.round(metrics.sleepConsistency)}/100`} 
            showScore={true}
            score={Math.round(metrics.sleepConsistency)}
          />
          <SleepMetric 
            label="Bedtime variation" 
            value={`±${metrics.bedtimeVariation} min`} 
          />
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-700 text-sm text-gray-400">
          {metrics.sleepConsistency >= 80 ? (
            "Your sleep schedule is very consistent. Great job!"
          ) : metrics.sleepConsistency >= 60 ? (
            "Your sleep schedule has some consistency, but could be improved."
          ) : (
            "Your sleep schedule is inconsistent. Try to go to bed at the same time each night."
          )}
        </div>
      </div>
    </CardContent>
  );
}
