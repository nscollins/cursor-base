import React from 'react';
import { SleepMetrics } from '@/lib/sleepUtils';

interface SleepStatusProps {
  metrics: SleepMetrics;
}

export function SleepStatus({ metrics }: SleepStatusProps) {
  // Determine background color based on sleep quality
  const getBgColor = () => {
    const quality = metrics.sleepQuality;
    if (quality >= 95) return 'bg-green-400';
    if (quality >= 85) return 'bg-emerald-300';
    if (quality >= 75) return 'bg-yellow-300';
    return 'bg-red-400';
  };

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className={`absolute w-32 h-32 ${getBgColor()} rounded-full opacity-30 blur-xl`}></div>
        <div className="z-10 text-center">
          <h2 className="text-2xl font-semibold">{metrics.sleepStatus}</h2>
          <p className="text-sm text-gray-300 mt-1">{Math.round(metrics.sleepQuality)}/100</p>
        </div>
      </div>
    </div>
  );
}
