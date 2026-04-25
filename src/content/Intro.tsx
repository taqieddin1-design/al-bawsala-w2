import React from 'react';
import { Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function Intro() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-20 page-break">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex justify-center mb-8">
          <div className="bg-sky-600 text-white p-8 rounded-full shadow-2xl">
            <Compass size={100} strokeWidth={1.5} />
          </div>
        </div>
        
        <h1 className="text-6xl font-black text-gray-900 mb-6 tracking-tight">البوصلة في علوم الأرض</h1>
        <h2 className="text-3xl text-sky-700 font-bold mb-10">الصف الثاني عشر (التوجيهي) - المسار الأكاديمي</h2>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">الوحدة الأولى: الوقود الأحفوري والبيئة</h3>
          <p className="text-gray-600 text-xl leading-relaxed">
            إعداد المعلم: <span className="font-bold text-sky-600">تقي الدين جهاد أبو رزق</span>
          </p>
        </div>

        <div className="no-print bg-amber-50 border border-amber-200 text-amber-800 p-6 rounded-xl max-w-2xl mx-auto shadow-sm">
          <h4 className="font-bold text-xl mb-2 flex items-center justify-center gap-2">
            🖨️ طباعة الدوسية كملف PDF
          </h4>
          <p className="text-lg leading-relaxed">
            للحصول على أفضل نتيجة بصيغة PDF، اضغط على زر التصدير في الأعلى، وتأكد من تفعيل خيار 
            <span className="font-bold"> (Background graphics) أو (رسومات الخلفية) </span> 
            في إعدادات الطباعة بالمتصفح للحفاظ على الألوان والتنسيقات.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
