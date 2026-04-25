import React from 'react';
import { useProgress } from './SectionWrapper';

export default function ProgressIndicator({ totalSections }: { totalSections: number }) {
  const { completed, loading } = useProgress();
  
  if (loading) return null;
  
  const percentage = Math.round((completed.length / totalSections) * 100) || 0;
  
  return (
    <div className="fixed top-6 left-6 z-50 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 w-48 no-print flex flex-col items-center">
      <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2 w-full text-right bg-emerald-50 dark:bg-gray-900 rounded px-2 py-1">إنجاز الدوسية:</h3>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-1 shadow-inner overflow-hidden flex" dir="ltr">
         <div className="bg-emerald-600 h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: `${percentage}%` }}></div>
      </div>
      <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mt-2" dir="ltr">{completed.length} / {totalSections} ({percentage}%)</p>
    </div>
  );
}
