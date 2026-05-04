import React from 'react';
import { Compass, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function Intro() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[90vh] print:min-h-[100vh] print:-mt-20 print:pt-40">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center w-full"
        >
          <div className="flex justify-center mb-10">
            <div className="bg-sky-600 text-white p-10 rounded-full shadow-2xl">
              <Compass size={140} strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tight drop-shadow-sm">البوصلة في علوم الأرض</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-sky-700 dark:text-sky-400 font-bold mb-16 tracking-wide drop-shadow-sm">الصف الثاني عشر (التوجيهي) - المسار الأكاديمي</h2>
          
          <div className="mt-16 text-3xl md:text-4xl font-extrabold bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 py-8 px-16 rounded-full inline-block shadow-md print:bg-white print:border print:border-gray-200">
              إعداد الأستاذ: <span className="text-emerald-600 dark:text-teal-400 drop-shadow-sm">تقي الدين جهاد أبو رزق</span>
          </div>
        </motion.div>
      </div>

      <div className="page-break flex flex-col justify-center items-center py-20 mt-20 relative">
        <div className="flex justify-center mb-8">
          <div className="bg-emerald-600 text-white p-6 rounded-full shadow-xl">
            <BookOpen size={80} strokeWidth={1.5} />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-12 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 w-full max-w-4xl mx-auto mb-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 dark:bg-emerald-900/30 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-100 dark:bg-sky-900/30 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
          
          <h3 className="text-4xl md:text-5xl font-black text-emerald-800 dark:text-emerald-400 mb-6 drop-shadow-sm leading-normal">الوحدة الأولى: الوقود الأحفوري والبيئة</h3>
          <p className="text-gray-500 dark:text-gray-400 text-2xl font-bold">رحلة في مصادر الطاقة التي شكلت عالمنا</p>
        </div>

        <div className="no-print bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 p-8 rounded-2xl max-w-3xl mx-auto shadow-sm mt-12 w-full">
          <h4 className="font-bold text-2xl mb-4 flex items-center justify-center gap-3">
            🖨️ طباعة الدوسية كملف PDF
          </h4>
          <p className="text-xl leading-relaxed text-center font-medium bg-white/50 dark:bg-black/20 p-6 rounded-xl">
            للحصول على أفضل نتيجة بصيغة PDF، اضغط على زر <span className="font-bold text-sky-700 dark:text-sky-400">تحميل الدوسية</span> في الأعلى، وتأكد من تفعيل خيار 
            <span className="font-bold underline text-emerald-700 dark:text-emerald-400 mx-2"> (Background graphics - رسومات الخلفية) </span> 
            في إعدادات الطباعة بالمتصفح للحفاظ على الألوان والتنسيقات.
          </p>
        </div>
      </div>
    </>
  );
}
