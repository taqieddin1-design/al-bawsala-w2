import React from 'react';
import { ExerciseBox, LessonHeader } from '../components/UI';

export default function Unit3_Review() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id="u3-review">
      <LessonHeader 
        number={4} 
        title="مراجعة الوحدة الثالثة" 
        objective="تثبيت المعلومات المكتسبة في الوحدة الثالثة: الانجراف، التوسع، والتكتونية."
      />

      <ExerciseBox 
        type="review"
        title="مراجعة الوحدة وإجابات مختارة"
        question="أبرز الأسئلة المتكررة من مراجعة الوحدة:"
        answer={
          <div className="space-y-6">
            <div>
              <h5 className="font-bold text-indigo-700">1. نظرية انجراف القارات، وتوسع قاع المحيط، وتكتونية الصفائح:</h5>
              <p><strong>انجراف القارات:</strong> تحرك القارات وابتعادها بعد أن كانت قارة واحدة.<br/>
              <strong>توسع قاع المحيط:</strong> بناء قشرة جديدة في المنتصف واستهلاك القديمة في الأخاديد.<br/>
              <strong>تكتونية الصفائح:</strong> النظرية الشاملة التي تبين أن الغلاف الصخري مقسم لصفائح تتحرك بسبب تيارات الحمل، وتحوي تباعد وتقارب وانزلاق.</p>
            </div>

            <div>
              <h5 className="font-bold text-indigo-700">2. تفسير ما يلي:</h5>
              <div className="border-r-2 border-indigo-200 pr-3 space-y-2 mt-2">
                <p><strong>أ. القشرة المحيطية متجددة باستمرار:</strong> بسبب خروج صهارة من ظهر المحيط تبرد وتكون قشرة جديدة تدفع القديمة باتجاه الأخاديد لتنصهر مجدداً.</p>
                <p><strong>ب. رفض العلماء فرضية فغنر بدايةً:</strong> لعجزه عن تقديم الآلية (القوة المحركة) المسؤولة عن تحريك القارات الضخمة.</p>
                <p><strong>ج. وجود جلاميد صخرية تراكمت بالجليديات في الهند وإفريقيا:</strong> يثبت أن هذه القارات كانت قديماً متصلة قريباً من القطب الجنوبي وتعرضت لنفس الحقبة الجليدية، وتناثرت بعد انجرافها.</p>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-indigo-700">3. المظاهر الجيولوجية الناتجة عن:</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>المحيطية + المحيطية (تقارب) ← جزر بركانية قوسية وأخاديد.</li>
                <li>المحيطية + القارية (تقارب) ← سلاسل جبلية بركانية وأخاديد.</li>
                <li>القارية + القارية (تقارب) ← سلاسل جبلية ضخمة غير بركانية (الهيمالايا).</li>
                <li>التباعد القاري ← حفرة انهدام (بحر ضيق).</li>
              </ul>
            </div>

            <div className="bg-sky-50 p-4 rounded-xl border border-sky-100 mt-4">
                <h5 className="font-bold text-sky-800 border-b border-sky-200 pb-2 mb-3">أسئلة الاختيار من متعدد:</h5>
                <ol className="list-decimal list-inside space-y-2 font-medium text-gray-700">
                    <li>أ (سحب الشريحة Slab Pull) هي القوة الأعظم لحركة الصفائح حسب النظريات الحديثة.</li>
                    <li>جـ (صخر قاعدي/بازلتي).</li>
                    <li>أ (سلاسل جبال قارية - اصطدام قاري).</li>
                    <li>ب (جبال الألب / الهيمالايا) ناتجة من تفاعل قاري-قاري.</li>
                    <li>د (تتكون جزر بركانية قوسية).</li>
                </ol>
            </div>
          </div>
        }
      />
    </div>
  );
}
