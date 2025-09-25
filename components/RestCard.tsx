import React from 'react';
import { CardContent } from '@/components/ui/card';
import { SleepMetric } from './SleepMetric';
import { SleepMetrics, formatHoursToHM } from '@/lib/sleepUtils';

interface RestCardProps {
  metrics: SleepMetrics;
}

export function RestCard({ metrics }: RestCardProps) {
  return (
    <CardContent className="p-6">
      <div className="space-y-4">
        <h3 className="text-xl font-medium text-white text-left">Rest</h3>
        
        <div className="mt-2 space-y-3">
          <SleepMetric 
            label="Average sleep duration" 
            value={formatHoursToHM(metrics.avgSleepDuration)} 
          />
          <SleepMetric 
            label="Sleep efficiency" 
            value={`${Math.round(metrics.sleepEfficiency)}%`} 
            showScore={true}
            score={Math.round(metrics.sleepEfficiency)}
          />
          <SleepMetric 
            label="Sleep quality" 
            value={`${Math.round(metrics.sleepQuality)}/100`} 
            showScore={true}
            score={Math.round(metrics.sleepQuality)}
          />
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-700 text-sm text-gray-400">
          {metrics.avgSleepDuration >= 8 ? (
            "You're getting optimal sleep duration. Keep it up!"
          ) : metrics.avgSleepDuration >= 7 ? (
            "You're close to optimal sleep duration. Try to get a bit more rest."
          ) : (
            "You're not getting enough sleep. Try to increase your sleep time."
          )}
        </div>
      </div>
    </CardContent>
  );
}
