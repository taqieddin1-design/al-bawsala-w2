import React, { useEffect, useState } from 'react';
import { auth } from './lib/firebase';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import Auth from './components/Auth';
import Landing from './components/Landing';

import Intro from './content/Intro';
import Lesson1 from './content/Lesson1';
import Lesson2 from './content/Lesson2';
import Lesson3 from './content/Lesson3';
import Review from './content/Review';

import Unit2_Intro from './content/Unit2_Intro';
import Unit2_Lesson1 from './content/Unit2_Lesson1';
import Unit2_Lesson2 from './content/Unit2_Lesson2';
import Unit2_Lesson3 from './content/Unit2_Lesson3';
import Unit2_Review from './content/Unit2_Review';

import Unit3_Intro from './content/Unit3_Intro';
import Unit3_Lesson1 from './content/Unit3_Lesson1';
import Unit3_Lesson2 from './content/Unit3_Lesson2';
import Unit3_Lesson3 from './content/Unit3_Lesson3';
import Unit3_Review from './content/Unit3_Review';

import Unit4_Intro from './content/Unit4_Intro';
import Unit4_Lesson1 from './content/Unit4_Lesson1';
import Unit4_Lesson2 from './content/Unit4_Lesson2';
import Unit4_Lesson3 from './content/Unit4_Lesson3';
import Unit4_Review from './content/Unit4_Review';

import Glossary from './content/Glossary';

import { Printer, LogOut, Moon, Sun, Book, ChevronRight, GraduationCap, Facebook, Instagram, FileDown, X, ExternalLink, Info } from 'lucide-react';
import Comments from './components/Comments';
import SectionWrapper from './components/SectionWrapper';
import ProgressIndicator from './components/ProgressIndicator';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<'dashboard' | 'dossier'>('dashboard');
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleBeforePrint = () => {
      document.documentElement.classList.remove('dark');
    };
    const handleAfterPrint = () => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      }
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [darkMode]);

  const handlePrint = () => {
    setShowPrintModal(true);
  };

  const handleLogout = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Landing darkMode={darkMode} setDarkMode={setDarkMode} />;
  }

  const sections = [
    { id: 'u1-intro', component: <Intro />, title: 'مقدمة الوحدة الأولى' },
    { id: 'u1-lesson1', component: <Lesson1 />, title: 'تغير المناخ والأنشطة البشرية' },
    { id: 'u1-lesson2', component: <Lesson2 />, title: 'حساب الانبعاثات' },
    { id: 'u1-lesson3', component: <Lesson3 />, title: 'أمثلة محلولة ' },
    { id: 'u1-review', component: <Review />, title: 'مراجعة الوحدة الأولى' },
    
    { id: 'u2-intro', component: <Unit2_Intro />, title: 'مقدمة الوحدة الثانية' },
    { id: 'u2-lesson1', component: <Unit2_Lesson1 />, title: 'تشوه الصخور' },
    { id: 'u2-lesson2', component: <Unit2_Lesson2 />, title: 'الطيات' },
    { id: 'u2-lesson3', component: <Unit2_Lesson3 />, title: 'الصدوع' },
    { id: 'u2-review', component: <Unit2_Review />, title: 'مراجعة الوحدة الثانية' },
    
    { id: 'u3-intro', component: <Unit3_Intro />, title: 'مقدمة الوحدة الثالثة' },
    { id: 'u3-lesson1', component: <Unit3_Lesson1 />, title: 'الزلازل' },
    { id: 'u3-lesson2', component: <Unit3_Lesson2 />, title: 'موجات الزلازل' },
    { id: 'u3-lesson3', component: <Unit3_Lesson3 />, title: 'رصد الزلازل' },
    { id: 'u3-review', component: <Unit3_Review />, title: 'مراجعة الوحدة الثالثة' },
    
    { id: 'u4-intro', component: <Unit4_Intro />, title: 'مقدمة الوحدة الرابعة' },
    { id: 'u4-lesson1', component: <Unit4_Lesson1 />, title: 'المياه الجوفية' },
    { id: 'u4-lesson2', component: <Unit4_Lesson2 />, title: 'الخزانات الجوفية' },
    { id: 'u4-lesson3', component: <Unit4_Lesson3 />, title: 'تلوث المياه الجوفية' },
    { id: 'u4-review', component: <Unit4_Review />, title: 'مراجعة الوحدة الرابعة' },
    
    { id: 'glossary', component: <Glossary />, title: 'المصطلحات' }
  ];

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 min-h-screen relative transition-colors duration-200" dir="rtl">
      
      {activeView === 'dossier' && (
        <ProgressIndicator totalSections={sections.length} />
      )}
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-50 no-print flex gap-3 flex-col sm:flex-row">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="bg-sky-100 hover:bg-sky-200 text-sky-800 dark:bg-sky-900 dark:hover:bg-sky-800 dark:text-sky-100 p-4 rounded-full shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center group border border-sky-200 dark:border-sky-800"
          title={darkMode ? 'الوضع النهاري' : 'الوضع الليلي'}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2 font-bold text-base">
            {darkMode ? 'الوضع النهاري' : 'الوضع الليلي'}
          </span>
        </button>
        <button 
          onClick={handleLogout}
          className="bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-700 dark:hover:bg-gray-600 p-4 rounded-full shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center group border border-gray-700"
          title="تسجيل الخروج"
        >
          <LogOut size={24} />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2 font-bold text-base">
            تسجيل الخروج
          </span>
        </button>
        {activeView === 'dossier' && (
          <button 
            onClick={handlePrint}
            className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center group border border-emerald-700"
            title="طباعة إلى PDF"
          >
            <Printer size={28} />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2 font-bold text-lg">
              تحميل الدوسية بي دي اف
            </span>
          </button>
        )}
      </div>

      {activeView === 'dashboard' && (
        <div className="max-w-7xl mx-auto px-6 py-12 pt-20">
          <div className="mb-10 text-center sm:text-right">
            <h1 className="text-4xl font-extrabold text-emerald-700 dark:text-emerald-400 mb-2">مرحباً بك، {user.displayName || 'يا مبدع'}!</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">اختر القسم الذي تود دراسته اليوم</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              onClick={() => setActiveView('dossier')}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg cursor-pointer transition-all transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                <Book size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">دوسية البوصلة في علوم الأرض</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">دروس شاملة، أمثلة توضيحية، ومحتوى متكامل لضمان تفوقك في المادة.</p>
              <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-bold">
                <span>تصفح الدوسية</span>
                <ChevronRight className="mr-2" size={20} />
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800/40 p-8 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 opacity-70 flex flex-col items-center justify-center text-center">
              <GraduationCap size={48} className="text-gray-400 dark:text-gray-500 mb-4" />
              <h2 className="text-xl font-bold mb-2 text-gray-600 dark:text-gray-400">الاختبارات الإلكترونية</h2>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-bold mt-2">قريباً</span>
            </div>
          </div>
        </div>
      )}

      {activeView === 'dossier' && (
        <div className="print-container bg-gray-50 dark:bg-gray-900 print:bg-white overflow-hidden print:overflow-visible pb-20 pt-8">
          <div className="max-w-4xl mx-auto px-6 mb-8 no-print pb-4 border-b border-gray-200 dark:border-gray-800">
            <button 
              onClick={() => setActiveView('dashboard')}
              className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 font-bold transition-colors bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 w-fit"
            >
              <ChevronRight size={20} /> العودة للأقسام
            </button>
          </div>

          <div className="text-center no-print mb-12 space-y-4">
            <div className="inline-block bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-4 py-1.5 rounded-full font-bold text-sm mb-2">الدراسة الذاتية</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 dark:text-emerald-400">دوسية البوصلة</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400">في علوم الأرض والبيئة</p>
          </div>

          {sections.map((section) => (
            <SectionWrapper key={section.id} id={section.id} title={section.title}>
              {section.component}
            </SectionWrapper>
          ))}
          
          <Comments />
        </div>
      )}

      {/* Footer */}
      <footer className="z-10 relative mt-12 pb-8 border-t border-gray-200 dark:border-gray-800 pt-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md no-print">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
          <p className="text-gray-700 dark:text-gray-300 font-bold text-center text-lg">
            يسعدني زيارتكم ومتابعتكم لحساباتي!
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/taqi_eddin.aburezeq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-500 text-white rounded-2xl hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30 transition-all transform hover:-translate-y-1"
              aria-label="Instagram"
              title="حساب الانستغرام"
            >
              <Instagram size={28} />
            </a>
            <a 
              href="https://www.facebook.com/share/1CihPUVJk6/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#1877F2] text-white rounded-2xl hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
              aria-label="Facebook"
              title="حساب الفيسبوك"
            >
              <Facebook size={28} />
            </a>
          </div>
          <p className="text-center text-gray-500 dark:text-gray-500 text-sm mt-4">
            جميع الحقوق محفوظة &copy; منصة البوصلة التعليمية
          </p>
        </div>
      </footer>

      {/* Print/Download Modal */}
      {showPrintModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm no-print" dir="rtl">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 dark:border-gray-700 transform transition-all">
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-sky-100 dark:bg-sky-900/50 p-3 rounded-2xl text-sky-600 dark:text-sky-400">
                  <FileDown size={32} />
                </div>
                <button 
                  onClick={() => setShowPrintModal(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                تحميل الدوسية PDF
              </h3>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-4 mb-6">
                <div className="flex gap-3 text-amber-800 dark:text-amber-300 items-start">
                  <Info className="shrink-0 mt-0.5" size={20} />
                  <p className="text-sm leading-relaxed">
                    للحفاظ على جودة الخطوط العربية وتنسيقات الجداول والرسومات، يرجى استخدام <strong>خاصية الطباعة في المتصفح وحفظ الملف كـ PDF</strong> بدلاً من التحميل المباشر.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-8">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-800 dark:text-white">1</div>
                  <p className="mt-1">
                    {window.self !== window.top ? (
                      <span>قم بفتح التطبيق في <strong>نافذة جديدة</strong> إذا كنت داخل المعاينة.</span>
                    ) : (
                      <span className="line-through text-gray-400">قم بفتح التطبيق في نافذة جديدة (لقد قمت بذلك بالفعل ✅).</span>
                    )}
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-800 dark:text-white">2</div>
                  <p className="mt-1">اضغط على زر الطباعة بالأسفل، أو استخدم الاختصار <strong>Ctrl + P</strong>.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-800 dark:text-white">3</div>
                  <p className="mt-1">اختر <strong>"حفظ بتنسيق PDF" (Save as PDF)</strong> من قائمة الطابعات.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-800 dark:text-white">4</div>
                  <p className="mt-1">تأكد من تفعيل خيار <strong>"رسومات الخلفية" (Background graphics)</strong> في إعدادات الطباعة.</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {window.self !== window.top && (
                  <a 
                    href={window.location.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    فتح في نافذة جديدة
                    <ExternalLink size={18} />
                  </a>
                )}
                <button 
                  onClick={() => {
                    setShowPrintModal(false);
                    setTimeout(() => window.print(), 100);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-sky-600 text-white rounded-xl font-bold hover:bg-sky-700 transition-colors"
                >
                  الاستمرار للطباعة (حفظ كـ PDF)
                  <Printer size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

