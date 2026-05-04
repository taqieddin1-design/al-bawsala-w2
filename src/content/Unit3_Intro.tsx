import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { ConceptBox, ExerciseBox } from '../components/UI';

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

      <div className="max-w-4xl mx-auto w-full px-4">
        <ExerciseBox 
          type="experiment"
          title="التجربة الاستهلالية: صدع البحر الميت التحويلي (ص 79)"
          question="يفصل صدع البحر الميت التحويلي بين الصفيحة العربية في الشرق وصفيحة سيناء في الغرب. ويمتد لمسافة 1000km تقريباً. السرعة التقديرية للحركة الأفقية للصفيحتين هي (0.47 ± 0.07 cm/y). كيف نحسب المدة اللازمة لتحركها 300km؟"
          answer={
            <div className="space-y-4">
              <p><strong>1. المعطيات:</strong> المسافة المراد قطعها = 300 كم (أي 30,000,000 سم). معدل الحركة السنوي للصدع ≈ 0.5 سم/سنة.</p>
              <p><strong>2. حساب المدة (الزمن = المسافة / السرعة):</strong></p>
              <div className="bg-gray-800 text-emerald-400 p-4 rounded-xl font-mono text-left my-2" dir="ltr">
                Time = 30,000,000 cm / 0.5 cm/year<br/>
                Time = 60,000,000 years (60 مليون سنة!)
              </div>
              <p>استنتاج: العمليات الجيولوجية وحركة الصفائح تحتاج لعشرات بل مئات الملايين من السنين لتحدث تغييراً هائلاً (كفتح محيط أو تشكيل سلسلة جبلية).</p>
              <p><strong>القوى المسببة:</strong> قوى "القص" الأفقية الناتجة عن حركة الصفائح المتعاكسة أو المتفاوتة السرعة على طول الصدع.</p>
            </div>
          }
        />
      </div>
    </div>
  );
}
