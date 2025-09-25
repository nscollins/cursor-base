import React from 'react';
import { getScoreColorClass } from '@/lib/sleepUtils';

interface SleepMetricProps {
  label: string;
  value: string | number;
  showScore?: boolean;
  score?: number;
  icon?: React.ReactNode;
}

export function SleepMetric({ label, value, showScore = false, score, icon }: SleepMetricProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon && <div className="text-white">{icon}</div>}
        <span className="text-white">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium text-white">{value}</span>
        {showScore && score !== undefined && (
          <span className={`text-sm ${getScoreColorClass(score)}`}>
            {score}/100
          </span>
        )}
      </div>
    </div>
  );
}
