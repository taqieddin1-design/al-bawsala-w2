import React, { useState } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  FlaskConical, 
  Lightbulb, 
  CheckCircle2, 
  MessageCircle,
  Activity,
  AlertTriangle
} from 'lucide-react';
import { motion } from 'motion/react';

// Storyteller block (عزيزي الطالب)
export const StoryBox = ({ children, title = 'عزيزي الطالب' }: { children: React.ReactNode, title?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-emerald-50 border-r-4 border-emerald-500 rounded-l-xl p-6 my-6 shadow-sm prevent-break relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 p-4 opacity-10">
      <MessageCircle size={100} />
    </div>
    <div className="flex items-center gap-3 mb-3 relative z-10">
      <div className="bg-emerald-500 p-2 rounded-full text-white">
        <BookOpen size={20} />
      </div>
      <h3 className="text-xl font-bold text-emerald-800">{title}</h3>
    </div>
    <div className="text-emerald-950 leading-relaxed text-lg relative z-10">
      {children}
    </div>
  </motion.div>
);

// General Section Concept
export const ConceptBox = ({ title, children, icon: Icon = Lightbulb }: { title: string, children: React.ReactNode, icon?: any }) => (
  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 my-6 prevent-break">
    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
      <Icon className="text-sky-500" size={28} />
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
    <div className="text-gray-700 leading-loose text-lg">
      {children}
    </div>
  </div>
);

// Unified Question & Answer Block
export const ExerciseBox = ({ 
  type = 'question', 
  title, 
  question, 
  answer 
}: { 
  type?: 'question' | 'experiment' | 'check' | 'activity' | 'review', 
  title?: string, 
  question: React.ReactNode, 
  answer: React.ReactNode 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getStyle = () => {
    switch(type) {
      case 'experiment': return { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800', icon: FlaskConical, title: 'تجربة' };
      case 'check': return { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', icon: CheckCircle2, title: 'أتحقق' };
      case 'activity': return { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-800', icon: Activity, title: 'نشاط' };
      case 'review': return { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-800', icon: AlertTriangle, title: 'مراجعة الدرس' };
      default: return { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-800', icon: HelpCircle, title: 'سؤال / تمرين' };
    }
  };

  const style = getStyle();
  const Icon = style.icon;

  return (
    <div className={`rounded-xl border ${style.border} my-6 prevent-break overflow-hidden shadow-sm`}>
      <div className={`${style.bg} p-5`}>
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <Icon size={24} className={style.text} />
          </div>
          <div className="flex-grow">
            <h4 className={`font-bold text-lg mb-2 ${style.text}`}>{title || style.title}</h4>
            <div className="text-gray-800 font-medium text-lg leading-relaxed">
              {question}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white border-t border-gray-100">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-right px-6 py-3 font-bold text-sky-600 hover:bg-gray-50 flex items-center justify-between no-print"
        >
          <span>{isOpen ? 'إخفاء الإجابة النموذجية' : 'عرض الإجابة النموذجية'}</span>
          <span className="text-xl">{isOpen ? '▼' : '◄'}</span>
        </button>
        
        <div className={`${isOpen ? 'block' : 'hidden'} print:block px-6 py-5 bg-emerald-50/30`}>
          <div className="flex gap-3 items-start">
            <div className="text-emerald-600 font-bold mt-1">✓ الحل:</div>
            <div className="text-gray-800 flex-grow leading-relaxed font-medium">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LessonHeader = ({ number, title, objective }: { number: number, title: string, objective: string }) => (
  <div className="mb-10 text-center relative prevent-break page-break mt-16 pt-8 border-t-2 border-dashed border-gray-200">
    <div className="inline-block bg-sky-600 text-white font-bold px-6 py-2 rounded-full mb-4 shadow-md">
      الدرس {number}
    </div>
    <h1 className="text-4xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">{title}</h1>
    <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed font-medium bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
      🎯 <span className="font-bold">الهدف:</span> {objective}
    </p>
  </div>
);

export const MathBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray-800 text-emerald-400 p-4 rounded-xl font-mono text-left my-4 text-lg overflow-x-auto shadow-inner" dir="ltr">
    {children}
  </div>
);
