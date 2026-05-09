import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { ConceptBox, ExerciseBox, MathBox } from '../components/UI';

export default function Unit3_Intro() {
  return (
    <div className="flex flex-col justify-center py-12 mt-20" id="u3-intro">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center w-full max-w-4xl mx-auto"
      >
        <div className="flex justify-center mb-8">
          <div className="bg-emerald-600 text-white p-6 rounded-full shadow-xl">
            <Globe size={80} strokeWidth={1.5} />
          </div>
        </div>
        
        <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">الوحدة الثالثة: الصفائح التكتونية</h2>
        <h3 className="text-2xl text-emerald-700 font-bold mb-10">Plate Tectonics</h3>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto mb-10 mt-10">
          <p className="text-gray-700 text-xl leading-relaxed text-center">
            تتشكل العديد من المظاهر الجيولوجية ومنها: السلاسل الجبلية، والجبال البركانية، وظهور المحيطات، بفعل <strong>حركات الصفائح الأرضية</strong> المختلفة.
          </p>
        </div>

      </motion.div>


    </div>
  );
}
