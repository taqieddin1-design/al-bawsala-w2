import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { ConceptBox } from '../components/UI';

export default function Unit4_Intro() {
  return (
    <div className="flex flex-col justify-center items-center py-12 mt-20" id="u4-intro">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center w-full max-w-4xl"
      >
        <div className="flex justify-center mb-8">
          <div className="bg-amber-600 text-white p-6 rounded-full shadow-xl">
            <MapPin size={80} strokeWidth={1.5} />
          </div>
        </div>
        
        <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">الوحدة الرابعة: الاستكشاف الجيولوجي</h2>
        <h3 className="text-2xl text-amber-700 font-bold mb-10">Geological Exploration</h3>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto mb-10 mt-10 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-sky-100 text-sky-800 px-4 py-1 rounded-full font-bold text-sm">أفلا يتفكرون</div>
          <h3 className="text-3xl font-bold text-amber-800 mb-4 text-center !leading-relaxed" style={{fontFamily: "'Cairo', sans-serif"}}>
            {`"فَأَمَّا الزَّبَدُ فَيَذْهَبُ جُفَاءً ۖ وَأَمَّا مَا يَنفَعُ النَّاسَ فَيَمْكُثُ فِي الْأَرْضِ"`}
          </h3>
          <p className="text-gray-500 text-center font-medium">(سورة الرعد: الآية 17)</p>
        </div>

        <div className="text-right">
          <ConceptBox title="الفكرة العامة للوحدة" icon={MapPin}>
            <p className="text-lg leading-relaxed">
              تحتوي الصخور على خامات معدنية غنية بأشكال متنوعة كالعروق والعدسات. في هذه الوحدة، سنتعلم كيف نستخدم الخرائط الجيولوجية، والمسوح الجيوفيزيائية، والجيوكيميائية كأدوات استكشاف للعثور على هذه الكنوز الثمينة واستثمارها بحكمة ومسؤولية مع الحفاظ على البيئة.
            </p>
          </ConceptBox>
        </div>

      </motion.div>
    </div>
  );
}
