import React from 'react';
import { StoryBox, ConceptBox, ExerciseBox, LessonHeader } from '../components/UI';
import { ActivitySquare, Layers } from 'lucide-react';

export default function Unit2_Lesson2() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id="u2-lesson2">
      <LessonHeader 
        number={2} 
        title="الصدوع (Faults)" 
        objective="التعرف على ماهية الصدع الصخري وأجزاءه، وتفريق أنواع الصدوع بحسب الإجهاد والحركة، واستكشاف أنظمتها الجيولوجية."
      />

      <StoryBox>
        عندما تضغط على شريحة من البسكويت الجاف، أو تقسم لوحاً خشبياً بالضغط، فإنه لا ينثني بل <strong>ينكسر</strong> وتنزلق أجزاؤه لتخفيف الضغط. هذا التكسر المصحوب بانزلاق هو ما يسميه علماء الجيولوجيا <strong>الصدع (Fault)</strong>. وهو السجل الجيولوجي الدال على أن صخورنا الصلبة قاومت القوى الكبيرة حتى استسلمت للكسر والانزلاق لترسخ أشكالاً جديدة على القشرة.
      </StoryBox>

      <ConceptBox title="مفهوم الصدع وأجزاؤه" icon={ActivitySquare}>
        <p><strong>الصدع (Fault):</strong> كسر يحدث في الصخور الهشة (صخور القشرة الأرضية) وينتج عنه انزلاق وتحرك للكتل الصخرية على جانبي الكسر بشكل موازٍ لمستوى الكسر.</p>
        
        <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm mt-5">
            <h4 className="font-bold text-sky-800 mb-4 text-xl border-b pb-2">الأجزاء الثلاثة للصدع:</h4>
            <ul className="space-y-4">
            <li className="flex gap-3">
                <span className="bg-sky-100 text-sky-800 p-2 rounded shrink-0 h-fit">١</span>
                <div>
                    <strong className="text-lg">مستوى الصدع (Fault Plane):</strong> 
                    <p className="text-gray-600">هو السطح الفاصل الذي حدث عليه الانزلاق (الكسر نفسه). ويميل بزاوية تُعرف بـ (زاوية ميل الصدع) مع المستوى الأفقي.</p>
                </div>
            </li>
            <li className="flex gap-3">
                <span className="bg-rose-100 text-rose-800 p-2 rounded shrink-0 h-fit">٢</span>
                <div>
                    <strong className="text-lg">الجدار المعلَّق (Hanging Wall):</strong> 
                    <p className="text-gray-600">الكتلة الصخرية التي تقع <strong>فوق</strong> مستوى الصدع المائل.</p>
                </div>
            </li>
            <li className="flex gap-3">
                <span className="bg-amber-100 text-amber-800 p-2 rounded shrink-0 h-fit">٣</span>
                <div>
                    <strong className="text-lg">الجدار القَدَم (Foot Wall):</strong> 
                    <p className="text-gray-600">الكتلة الصخرية الثابتة نسبياً التي تقع <strong>أسفل</strong> مستوى الصدع المائل.</p>
                </div>
            </li>
            </ul>
        </div>
      </ConceptBox>

      <ConceptBox title="تصنيف الصدوع" icon={Layers}>
        <p className="mb-4">تصنف الصدوع حسب اتجاه القوة والحركة النسبية:</p>
        
        <div className="space-y-4">
          <div className="bg-sky-50 border-r-4 border-sky-500 p-5 rounded-l-lg shadow-sm">
            <h4 className="font-bold text-sky-800 text-xl inline-block">صدوع الحركة النسبية الرأسية:</h4>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-sky-100">
                    <strong className="text-lg text-sky-700 block mb-2">أ. الصدع العادي:</strong>
                    <p className="text-gray-700 text-sm">ينزلق الجدار المعلق <strong>للأسفل</strong> بالنسبة للجدار القدم.</p>
                    <p className="mt-2 text-sm font-bold text-gray-500">القوة المسببة: إجهاد الشد.</p>
                </div>
                <div className="bg-white p-4 rounded border border-sky-100">
                    <strong className="text-lg text-rose-700 block mb-2">ب. الصدع العكسي:</strong>
                    <p className="text-gray-700 text-sm">يندفع الجدار المعلق <strong>للأعلى</strong> متسلقاً الجدار القدم.</p>
                    <p className="mt-2 text-sm font-bold text-gray-500">القوة المسببة: إجهاد الضغط.</p>
                </div>
            </div>
          </div>

          <div className="bg-emerald-50 border-r-4 border-emerald-500 p-5 rounded-l-lg shadow-sm">
            <h4 className="font-bold text-emerald-800 text-xl inline-block mb-2">صدوع الحركة النسبية الأفقية:</h4>
            <p className="mt-1 text-gray-700">تُعرف بالصدوع <strong>الجانبية</strong>. تتحرك الكتل أفقياً بمحاذاة بعضها، مستوى الصدع يكون رأسياً تقريباً.</p>
            <p className="mt-3 text-sm font-bold text-gray-600 bg-white inline-block px-3 py-1 rounded">القوة المسببة: إجهاد القص</p>
            <p className="text-sm text-gray-500 mt-2">مثال: صدع البحر الميت التحويلي.</p>
          </div>
        </div>
      </ConceptBox>

      <ConceptBox title="أنظمة الصدوع المركبة">
        <ul className="list-disc list-inside space-y-4 text-gray-800 text-lg mt-4">
          <li><strong>الصدوع الدرجية (Step Faults):</strong> تشبه الدرج. سلسلة من الصدوع العادية. تهبط كتلة تلو الأخرى. (مثل وادي الموجب).</li>
          <li><strong>الأحواض الخسفية (Grabens):</strong> صدعان عاديان، يتكفلان بإسقاط كتلة مركزية للأسفل. (مثل غور الأردن).</li>
          <li><strong>الكتل الاندفاعية (Horsts):</strong> صدعان عاديان يسببان هبوط الكتل الطرفية وبقاء الكتلة المركزية صامدة لتبدو مرتفعة كالهضبة.</li>
        </ul>
      </ConceptBox>

      <ExerciseBox 
        type="activity"
        title="نشاط: صدوع الحركة النسبية للكتلتين الصخريتين (ص 59)"
        question="من خلال دراسة الأشكال لصدع عادي، صدع عكسي، وصدع جانبي، أجب عن الأسئلة:"
        answer={
          <div className="space-y-3">
            <p><strong>1. نوع الحركة:</strong> في الصدع العادي هبوط الكتلة فوق مستوى الصدع. في الصدع العكسي صعودها. في الصدع الجانبي انزلاق الكتلتين أفقياً.</p>
            <p><strong>2. الميل:</strong> مستوى الصدع يكون مائلاً في الصدع العادي والعكسي، وعمودياً (أو شبه عمودي) في الصدع الجانبي.</p>
            <p><strong>3. تحديد الجدار:</strong> الكتلة التي تستند فوق مستوى الصدع هي المعلق، والكتلة التي يقع مستوى الصدع فوقها هي القدم.</p>
            <p><strong>4. حركة المعلق:</strong> ينزل للأسفل في الصدع العادي، ويصعد للأعلى في الصدع العكسي بالنسبة للجدار القدم.</p>
            <p><strong>5. نوع الإجهاد:</strong> شد (العادي)، ضغط (العكسي)، قص (الجانبي).</p>
            <p><strong>6. تكرار الطبقات:</strong> نعم، في الصدع العكسي فقط (عند حفر بئر عمودي ستمر بالطبقة نفسها مرتين)، بينما في الصدع العادي قد تختفي طبقات من المقطع الرأسي.</p>
          </div>
        }
      />

      <ExerciseBox 
        type="review"
        title="مراجعة الدرس الثاني (ص 62-63)"
        question="حل أسئلة نهاية الدرس:"
        answer={
          <div className="space-y-4">
            <div><h5 className="font-bold text-indigo-700 mb-1">1. المخطط المفاهيمي:</h5>
            <p>الصدوع تُصنف إلى: صدوع الحركة النسبية <strong>الرأسية</strong>، وصدوع الحركة النسبية <strong>الأفقية</strong>.<br/>
            الرأسية تقسم إلى: صدع <strong>عادي</strong>، وصدع <strong>عكسي</strong>.<br/>
            والأفقية تقسم إلى: <strong>صدوع جانبية</strong>.</p></div>

            <div><h5 className="font-bold text-indigo-700 mb-1">3. تحليل الشكل (ص 62):</h5>
            <p>أ. <strong>أجزاء الصدع (س):</strong> مستوى الانزلاق المائل هو مستوى الصدع. الكتلة اليمنى هي المعلق، واليسرى هي القدم.<br/>
            ب. <strong>الأنواع:</strong> (س) و (ع) صدوع عادية (لهبوط المعلق).<br/>
            ج. <strong>(ص):</strong> حوض خسفي بين الصدعين س وع.<br/>
            د. الكتلة (1) <strong>كتلة اندفاعية</strong>، والكتلة (2) <strong>حوض خسفي</strong>.</p></div>

            <div className="bg-sky-50 p-4 rounded-xl border border-sky-100">
                <h5 className="font-bold text-sky-800 border-b border-sky-200 pb-2 mb-3">4. إجابات الاختيار من متعدد (ص 63):</h5>
                <ol className="list-decimal list-inside space-y-2 font-medium text-gray-700">
                <li><strong>ب. صدع عكسي.</strong> (السهام المتقاربة = إجهاد ضغط = صدع عكسي).</li>
                <li><strong>أ. مستوى الصدع، والجدار القدم.</strong> (A=المستوى المائل، Y=القدم، X=المعلق).</li>
                <li><strong>أ. صدع عادي.</strong> (إجهاد الشد يصنع صدعاً عادياً دوماً).</li>
                <li><strong>د. طيّة.</strong> (الضغط في الأعماق والحرارة يؤدي إلى طيات).</li>
                <li><strong>أ. عادي.</strong> (حركة المعلق للأسفل تعريف للصدع العادي).</li>
                </ol>
            </div>
          </div>
        }
      />
    </div>
  );
}
