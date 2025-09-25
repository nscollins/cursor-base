import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { processSleepData } from "@/lib/sleepUtils";
import { SleepStatus } from "@/components/SleepStatus";
import { RestCard } from "@/components/RestCard";
import { RhythmCard } from "@/components/RhythmCard";
import { RitualsCard } from "@/components/RitualsCard";

export default function Home() {
  const sleepMetrics = processSleepData();
  
  // Generate description based on sleep data
  const generateDescription = () => {
    if (sleepMetrics.sleepQuality >= 95) {
      return "You had excellent sleep quality last night. Your consistent sleep schedule is paying off!";
    } else if (sleepMetrics.sleepQuality >= 85) {
      return "You slept well last night. Keep maintaining your sleep routine for optimal rest.";
    } else if (sleepMetrics.sleepQuality >= 75) {
      return "Your sleep was adequate, but there's room for improvement in your sleep habits.";
    } else {
      return "It looks like you woke up for a short while overnight. Focus on improving your sleep consistency.";
    }
  };
  
  return (
    <main className="flex min-h-screen flex-col bg-[#0A1A33] text-white">
      {/* Main content */}
      <div className="flex-1 px-6 py-8">
        {/* Header */}
        <h1 className="text-2xl font-semibold mb-1">Hi Kayla,</h1>
        
        {/* Sleep status circle */}
        <SleepStatus metrics={sleepMetrics} />
        
        {/* Description text */}
        <p className="text-center mb-8 text-gray-300">
          {generateDescription()}
        </p>
        
        {/* Cards for different sections */}
        <div className="space-y-4">
          <Card className="bg-[#0E2240] border-none hover:bg-[#13294e] transition-colors cursor-pointer">
            <RestCard metrics={sleepMetrics} />
          </Card>
          
          <Card className="bg-[#0E2240] border-none hover:bg-[#13294e] transition-colors cursor-pointer">
            <RhythmCard metrics={sleepMetrics} />
          </Card>
          
          <Card className="bg-[#0E2240] border-none hover:bg-[#13294e] transition-colors cursor-pointer">
            <RitualsCard metrics={sleepMetrics} />
          </Card>
        </div>
      </div>
      
      {/* Bottom navigation */}
      <div className="h-16 border-t border-gray-800 bg-[#0E2240] flex justify-around items-center px-6">
        <Link href="#" className="flex flex-col items-center opacity-60">
          <Image src="/file.svg" alt="Routine" width={24} height={24} />
          <span className="text-xs mt-1">Routine</span>
        </Link>
        <Link href="#" className="flex flex-col items-center">
          <Image src="/globe.svg" alt="Home" width={24} height={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="#" className="flex flex-col items-center opacity-60">
          <Image src="/window.svg" alt="Library" width={24} height={24} />
          <span className="text-xs mt-1">Library</span>
        </Link>
      </div>
    </main>
  );
}