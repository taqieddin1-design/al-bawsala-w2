import React, { useState, useEffect } from 'react';
import { db, auth } from '../lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { CheckCircle, Circle } from 'lucide-react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function useProgress() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.currentUser) return;
    
    const unsubscribe = onSnapshot(doc(db, 'progress', auth.currentUser.uid), (snap) => {
      if (snap.exists()) {
        setCompleted(snap.data().completedSections || []);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { completed, loading };
}

export default function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  const { completed, loading } = useProgress();
  const [updating, setUpdating] = useState(false);
  
  const isDone = completed.includes(id);

  const toggleStatus = async () => {
    if (!auth.currentUser || updating) return;
    
    setUpdating(true);
    try {
      const docRef = doc(db, 'progress', auth.currentUser.uid);
      const newCompleted = isDone 
        ? completed.filter(c => c !== id)
        : [...completed, id];
        
      await setDoc(docRef, {
        completedSections: newCompleted,
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (err) {
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="relative mb-8" id={`section-${id}`}>
      {children}
      
      {!loading && (
        <div className="max-w-4xl mx-auto w-full px-6 flex justify-end -mt-4 mb-8 relative z-10 no-print">
          <button
            onClick={toggleStatus}
            disabled={updating}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow-sm transition-all text-sm border
              ${isDone 
                ? 'bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-100 dark:border-emerald-700' 
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700'
              }`}
          >
            {isDone ? <CheckCircle size={18} className="text-emerald-600 dark:text-emerald-400" /> : <Circle size={18} />}
            {isDone ? `أكملت دراسة ${title}` : `تحديد كمنجز: ${title}`}
          </button>
        </div>
      )}
    </div>
  );
}
