import React from 'react';
import { LessonHeader, MathBox } from '../components/UI';

export default function MathSolutions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 page-break mt-20" id="math-solutions">
      <LessonHeader 
        number={0} 
        title="ملحق: إجابات المسائل الحسابية" 
        objective="مكان مخصص لجمع الإجابات النموذجية لجميع المسائل الرياضية التي يتطلب حلها خطوات رياضية، وذلك لتسهيل مراجعتها بعد محاولة الحل في المساحات المخصصة."
      />

      <div className="space-y-8">
        
        <div className="bg-white rounded-xl shadow-md border border-sky-100 p-6">
          <h3 className="text-2xl font-bold text-sky-800 mb-4 border-b pb-2">الوحدة الأولى - الدرس الأول</h3>
          
          <div className="mb-6">
            <h4 className="font-bold text-lg text-emerald-700 mb-2">1. مثال 1 (ص 17): احتراق الديزل</h4>
            <MathBox>
              E = EF × A<br/>
              = 2.68 × 1000<br/>
              = 2680 kg
            </MathBox>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-lg text-emerald-700 mb-2">2. مثال 2 (ص 17): روث الأبقار</h4>
            <MathBox>
              E = EF × A<br/>
              = 100 × 50<br/>
              = 5000 kg
            </MathBox>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-lg text-emerald-700 mb-2">3. تمرين (ص 17): مزرعة أغنام</h4>
            <p className="mb-2"><strong>المعطيات:</strong> كمية المادة A = 1200 ، معامل الانبعاث EF = 15 kg/head</p>
            <MathBox>
              E = EF × A<br/>
              E = 15 × 1200<br/>
              E = 18,000 kg
            </MathBox>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-lg text-emerald-700 mb-2">4. مثال 3 (ص 19): مكافئ ثاني أكسيد الكربون</h4>
            <MathBox>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-bold opacity-75 mb-1">CO2e (CO2) = GWP × E</p>
                  = 1 × 50000 = 50000 kg
                </div>
                <div>
                  <p className="text-sm font-bold opacity-75 mb-1">CO2e (CH4) = GWP × E</p>
                  = 27 × 480 = 12960 g = 12.96 kg
                </div>
                <div>
                  <p className="text-sm font-bold opacity-75 mb-1">CO2e (N2O) = GWP × E</p>
                  = 273 × 150 = 40950 g = 40.95 kg
                </div>
                <div className="pt-2 border-t border-sky-100">
                  <p className="text-sm font-bold opacity-75 mb-1">مجموع مكافئات ثاني أكسيد الكربون (Total):</p>
                  CO2e (total) = 50000 + 12.96 + 40.95 = 50053.91 kg
                </div>
              </div>
            </MathBox>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-lg text-emerald-700 mb-2">5. تمرين (ص 19): أكسيد النيتروز</h4>
            <p className="mb-2"><strong>المعطيات:</strong> الانبعاث E = 50 tonnes ، الاحترار GWP = 265</p>
            <MathBox>
              CO2e = GWP × E<br/>
              CO2e = 265 × 50<br/>
              CO2e = 13,250 tonnes
            </MathBox>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-emerald-700 mb-2">6. أسئلة المراجعة سؤال 5 (ص 21): غاز CFC-11</h4>
            <MathBox>
              CO2e = 6230 × 75<br/>
              CO2e = 467,250 kg
            </MathBox>
          </div>
        </div>

      </div>
    </div>
  );
}
