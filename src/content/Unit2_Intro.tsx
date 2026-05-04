import React from 'react';
import { Mountain } from 'lucide-react';
import { motion } from 'motion/react';
import { ConceptBox } from '../components/UI';

export default function Unit2_Intro() {
  return (
    <div className="flex flex-col justify-center items-center py-12 mt-20">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center w-full max-w-4xl"
      >
        <div className="flex justify-center mb-8">
          <div className="bg-rose-600 text-white p-6 rounded-full shadow-xl">
            <Mountain size={80} strokeWidth={1.5} />
          </div>
        </div>
        
        <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">الوحدة الثانية: التراكيب الجيولوجية</h2>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto mb-10 mt-10 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-800 px-4 py-1 rounded-full font-bold text-sm">أفلا يتفكرون</div>
          <h3 className="text-3xl font-bold text-rose-800 mb-4 text-center !leading-relaxed" style={{fontFamily: "'Cairo', sans-serif"}}>
            {`" وَالْأَرْضِ ذَاتِ الصَّدْعِ "` }
          </h3>
          <p className="text-gray-500 text-center font-medium">(سورة الطارق: الآية 12)</p>
        </div>

        <div className="text-right">
          <ConceptBox title="الفكرة العامة للوحدة" icon={Mountain}>
            <p className="text-lg leading-relaxed">
              تنتج التراكيب الجيولوجية عند تعرض صخور القشرة الأرضية لقوى مختلفة، تؤدي لتشوهاتها عبر الزمن. وسنتعرف في هذه الوحدة على أهم الأمثلة على هذه التراكيب، وأكثرها إبهاراً في الطبيعة: <strong>الصدوع</strong> و<strong>الطيات</strong>.
            </p>
          </ConceptBox>
        </div>

      </motion.div>
    </div>
  );
}
