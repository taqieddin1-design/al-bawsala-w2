import React, { useState } from 'react';
import { Compass, BookOpen, Globe2, TrendingUp, ArrowRight } from 'lucide-react';
import Auth from './Auth';

export default function Landing() {
  const [showAuth, setShowAuth] = useState(false);

  if (showAuth) {
    return (
      <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <button 
          onClick={() => setShowAuth(false)}
          className="absolute top-6 right-6 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors z-10 font-bold bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm"
          dir="rtl"
        >
          <ArrowRight size={20} /> العودة للرئيسية
        </button>
        <Auth onSuccess={() => {}} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-200 overflow-hidden" dir="rtl">
      
      {/* Animated Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-x-0 -top-40 -bottom-40 opacity-15 dark:opacity-20 animate-pan-bg"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518002054494-3a6f943e5710?q=80&w=2670&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            mixBlendMode: 'luminosity'
          }}
        ></div>
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-sky-600/10 to-transparent dark:from-emerald-900/40 dark:via-sky-900/20 mix-blend-multiply dark:mix-blend-color"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-20 p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
           <Compass size={36} className="text-emerald-600 dark:text-emerald-400" />
           <span className="text-2xl font-extrabold tracking-tight">البوصلة</span>
        </div>
        <button 
          onClick={() => setShowAuth(true)}
          className="px-6 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-emerald-700 dark:text-emerald-400 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-gray-700 rounded-full font-bold transition-all shadow-sm"
        >
          تسجيل الدخول / إنشاء حساب
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-bold border border-emerald-200 dark:border-emerald-800/50">
            المنصة التعليمية الأولى لعلوم الأرض
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            اكتشف أسرار <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">الأرض والبيئة</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
            رحلة ممتعة وتفاعلية لفهم الظواهر الجيولوجية، التغير المناخي، والبيئة المحيطة بك من خلال دروس مبسطة، صور توضيحية، وتمارين تفاعلية متطورة.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => setShowAuth(true)}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg flex items-center gap-2"
            >
              ابدأ رحلة التعلم الآن
            </button>
          </div>
        </div>
        
        {/* Decorative Graphic/Cards */}
        <div className="relative z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200 to-sky-100 dark:from-emerald-900/40 dark:to-sky-800/40 rounded-3xl transform rotate-3 scale-105 opacity-60 blur-2xl animate-float"></div>
          <div className="relative grid grid-cols-2 gap-4 animate-float">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col gap-4 transform translate-y-8 transition-transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/40 rounded-xl flex items-center justify-center text-sky-600 dark:text-sky-400">
                <Globe2 size={24} />
              </div>
              <h3 className="font-bold text-lg dark:text-gray-100">علوم الأرض</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">تعرف على تشوه الصخور، الصدوع، الطيات والزلازل والمزيد.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col gap-4 transition-transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/40 rounded-xl flex items-center justify-center text-rose-600 dark:text-rose-400">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-bold text-lg dark:text-gray-100">التغير المناخي</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">اكتشف أثر الأنشطة البشرية على مناخ كوكبنا وحساب الانبعاثات.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col gap-4 transform translate-y-4 transition-transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400">
                <BookOpen size={24} />
              </div>
              <h3 className="font-bold text-lg dark:text-gray-100">دروس تفاعلية</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">محتوى غني بالصور، المقارنات، وأمثلة محلولة خطوة بخطوة.</p>
            </div>
            
            <div className="bg-emerald-600 dark:bg-emerald-700 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center text-white gap-3 transition-transform hover:-translate-y-2">
              <Compass size={48} className="opacity-90" />
              <h3 className="font-bold text-xl tracking-wide">بوصلتك للنجاح</h3>
              <div className="w-12 h-1 bg-emerald-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="text-center text-gray-500 dark:text-gray-400 pb-8 mt-12 text-sm z-10 relative">
        جميع الحقوق محفوظة &copy; منصة البوصلة التعليمية
      </footer>
    </div>
  );
}
