import sleepData from '@/data/sleepdata.json';

// Types for sleep data
export interface SleepMetrics {
  avgSleepDuration: number; // in hours
  sleepEfficiency: number; // percentage
  sleepQuality: number; // score out of 100
  sleepConsistency: number; // score out of 100
  bedtimeRoutineUsage: number; // percentage
  avgRoutineDuration: number; // in minutes
  bedtimeVariation: number; // in minutes
  sleepStatus: string;
}

/**
 * Process sleep data to extract key metrics
 */
export function processSleepData(): SleepMetrics {
  const insights = sleepData.insights;
  const visualizations = insights.visualizations;
  const metadata = insights.metadata;
  const sleepTrackingMetrics = metadata.sleep_tracking_metrics;

  // Extract metrics
  const avgSleepDuration = sleepTrackingMetrics.avg_sleep_duration_hours;
  const sleepEfficiency = sleepTrackingMetrics.avg_sleep_efficiency;
  const sleepQuality = sleepTrackingMetrics.avg_sleep_score;
  const sleepConsistency = visualizations.progress_rings.sleep_consistency.score;
  const bedtimeRoutineUsage = (metadata.routine_days / metadata.total_days) * 100;
  
  // Calculate average routine duration
  const routines = sleepData.graph_data_30d.bedtime_routines;
  const totalDuration = routines.reduce((sum, routine) => sum + routine.duration, 0);
  const avgRoutineDuration = totalDuration / routines.length;
  
  // Extract bedtime variation from consistency label
  const bedtimeVariationLabel = visualizations.progress_rings.consistency.label;
  const bedtimeVariation = parseInt(bedtimeVariationLabel.replace('±', '').replace(' min', ''));
  
  // Determine sleep status based on sleep quality
  let sleepStatus = "Lightly Rested";
  if (sleepQuality >= 95) {
    sleepStatus = "Well Rested";
  } else if (sleepQuality >= 85) {
    sleepStatus = "Adequately Rested";
  } else if (sleepQuality < 75) {
    sleepStatus = "Under Rested";
  }

  return {
    avgSleepDuration,
    sleepEfficiency,
    sleepQuality,
    sleepConsistency,
    bedtimeRoutineUsage,
    avgRoutineDuration,
    bedtimeVariation,
    sleepStatus
  };
}

/**
 * Format hours as hours and minutes
 * @param hours Number of hours (can include decimal)
 * @returns Formatted string like "8h 15m"
 */
export function formatHoursToHM(hours: number): string {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  return `${h}h ${m}m`;
}

/**
 * Get color class based on score
 * @param score Score value (0-100)
 * @returns Tailwind color class
 */
export function getScoreColorClass(score: number): string {
  if (score >= 90) return "text-green-400";
  if (score >= 75) return "text-emerald-300";
  if (score >= 60) return "text-yellow-300";
  return "text-red-400";
}
