import React, { useState } from 'react';
import { Compass, BookOpen, Globe2, TrendingUp, ArrowRight, Book, GraduationCap, Facebook, Instagram, Sun, Moon } from 'lucide-react';
import Auth from './Auth';

interface LandingProps {
  darkMode?: boolean;
  setDarkMode?: (val: boolean) => void;
}

export default function Landing({ darkMode, setDarkMode }: LandingProps) {
  const [showAuth, setShowAuth] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleProtectedAction = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg('');
      setShowAuth(true);
    }, 2000);
  };

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

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-rose-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold animate-float flex items-center gap-2">
          {toastMsg}
        </div>
      )}

      {/* Navbar */}
      <nav className="relative z-20 p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400">
           <Compass size={56} className="text-emerald-600 dark:text-emerald-400" />
           <span className="text-4xl font-extrabold tracking-tight">البوصلة</span>
        </div>
        <div className="flex items-center gap-3">
          {setDarkMode && (
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-700 rounded-full transition-all shadow-sm flex items-center justify-center"
              title={darkMode ? 'الوضع النهاري' : 'الوضع الليلي'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button 
            onClick={() => setShowAuth(true)}
            className="px-6 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-emerald-700 dark:text-emerald-400 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-gray-700 rounded-full font-bold transition-all shadow-sm"
          >
            تسجيل الدخول / إنشاء حساب
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10">
          <div className="inline-block px-6 py-2.5 bg-emerald-600 dark:bg-emerald-700 text-white rounded-full text-lg md:text-xl font-extrabold shadow-md shadow-emerald-500/30 animate-pulse-slow">
            المنصة التعليمية الأولى لمادة علوم الأرض
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            بوصلتك نحو <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">التفوق في مادة علوم الأرض</span>
          </h1>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gray-50 dark:bg-gray-800/80 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm">
            <span className="flex h-3 w-3 rounded-full bg-emerald-500"></span>
            <p className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200">
              بإشراف الأستاذ: <span className="text-emerald-600 dark:text-teal-400">تقي الدين جهاد أبو رزق</span>
            </p>
          </div>
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
            <div 
              onClick={() => handleProtectedAction('يرجى تسجيل الدخول أولاً للوصول إلى دوسية البوصلة.')}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col gap-4 transform translate-y-8 transition-all hover:-translate-y-2 cursor-pointer hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-xl group"
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                <Book size={24} />
              </div>
              <h3 className="font-bold text-lg dark:text-gray-100 leading-tight">دوسية البوصلة<br/>في علوم الأرض</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">محتوى متكامل وشامل لضمان تفوقك في المادة.</p>
            </div>
            
            <div 
              onClick={() => handleProtectedAction('يرجى تسجيل الدخول أولاً للوصول إلى الاختبارات الإلكترونية.')}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col gap-4 transition-all hover:-translate-y-2 cursor-pointer hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-xl group"
            >
              <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/40 rounded-xl flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-bold text-lg dark:text-gray-100 leading-tight">الاختبارات<br/>الإلكترونية</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">اختبر معلوماتك وقيم مستواك من خلال اختبارات تفاعلية.</p>
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

      {/* Platform Sections */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">أقسام المنصة</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">تصفح محتوى المنصة وابدأ رحلتك التعليمية. بعض الأقسام تتطلب تسجيل الدخول للوصول إليها.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div 
            onClick={() => handleProtectedAction('يرجى تسجيل الدخول أولاً للوصول إلى دوسية البوصلة.')}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-600/50 cursor-pointer transition-all transform hover:-translate-y-2 group"
          >
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-transform">
              <Book size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">دوسية البوصلة في علوم الأرض</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">دروس شاملة، أمثلة توضيحية، ومحتوى متكامل لضمان تفوقك في المادة مع تجربة قراءة ممتعة وتفاعلية.</p>
            <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-bold group-hover:translate-x-[-8px] transition-transform w-fit rtl:group-hover:translate-x-2">
              <span className="ml-2">تصفح الدوسية</span>
              <ArrowRight size={20} className="transform rotate-180" />
            </div>
          </div>

          <div 
            onClick={() => handleProtectedAction('يرجى تسجيل الدخول أولاً للوصول إلى الاختبارات الإلكترونية.')}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-sky-200 dark:hover:border-sky-600/50 cursor-pointer transition-all transform hover:-translate-y-2 group"
          >
            <div className="w-16 h-16 bg-sky-100 dark:bg-sky-900/50 rounded-2xl flex items-center justify-center mb-6 text-sky-600 dark:text-sky-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">الاختبارات الإلكترونية</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">اختبر معلوماتك وقيم مستواك من خلال مجموعة متنوعة من الاختبارات التفاعلية المصممة لقياس فهمك بدقة.</p>
            <div className="flex items-center text-sky-600 dark:text-sky-400 font-bold group-hover:translate-x-[-8px] transition-transform w-fit rtl:group-hover:translate-x-2">
              <span className="ml-2">ابدأ الاختبارات</span>
              <ArrowRight size={20} className="transform rotate-180" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="z-10 relative mt-12 pb-8 border-t border-gray-200 dark:border-gray-800 pt-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md">
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
    </div>
  );
}
