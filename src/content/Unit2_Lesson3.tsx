import React from 'react';
import { StoryBox, ConceptBox, ExerciseBox, LessonHeader } from '../components/UI';
import { Waves, View } from 'lucide-react';

export default function Unit2_Lesson3() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id="u2-lesson3">
      <LessonHeader 
        number={3} 
        title="الطيات (Folds)" 
        objective="التعرف على الطيات كاستجابة لدنة للصخور عند تعرضها للإجهاد، وتمييز أنواعها وأجزائها."
      />

      <StoryBox>
        لماذا تبدو بعض الجبال وكأنها سجادة مطوية؟ أو كأمواج متجمدة في الصخر؟ يعود هذا السحر لظاهرة <strong>"الطي"</strong>. فعلى عكس الصدوع التي تكسر الصخور الهشة، تتعامل الصخور <strong>اللدنة</strong> (أو الهشة الواقعة في أعماق حارة) بطريقة سلمية ومرنة مع الإجهاد، فتنثني وتتقوس بانسجام مشكلة <strong>الطيات</strong> الرهيبة التي تسحر الناظرين!
      </StoryBox>

      <ConceptBox title="مفهوم الطية (Concept of Fold)" icon={Waves}>
        <p><strong>الطية (Fold):</strong> هي أحد التراكيب الجيولوجية التي تنشأ في الصخور اللدنة (أو في الصخور الهشة التي تتعرض لدرجات حرارة مرتفعة عند وجودها في أعماق كبيرة) نتيجة تعرضها لإجهاد <strong>الضغط (Compression)</strong>.</p>
        
        <div className="bg-sky-50 p-4 mt-4 rounded-lg border border-sky-200">
          <p className="text-sky-900 font-medium leading-relaxed">
            عند تعرض الصخور الرسوبية (وبعض الصخور البركانية) لقوى ضغط من الجانبين، فإنها لا تنكسر، بل <strong>تنثني أو تتقوس</strong> دون أن تتكسر بحيث تميل باتجاهين متعاكسين. قد تكون الطية صغيرة نرى جميع أجزائها بوضوح، وقد تكون ضخمة جداً تشكل جبلاً كاملاً فلا نرى منها سوى جزء بسيط!
          </p>
        </div>
      </ConceptBox>

      <ConceptBox title="أجزاء الطية (Fold Parts)" icon={View}>
        <p className="mb-4">تتكون الطية من مجموعة من الأجزاء الهامة لتمييزها وتصنيفها:</p>
        <ul className="list-disc list-inside space-y-3">
          <li><strong>جناحا الطية (Fold Limbs):</strong> هما طبقات الصخور المائلة على جانبي الطية. تلتقيان عند المحور.</li>
          <li><strong>مَفْصَل الطية (Fold Hinge):</strong> الخط الوهمي الذي يقع على طول أقصى نقطة تقوس/انحناء في الطية.</li>
          <li><strong>المستوى المحوري (Axial Plane):</strong> مستوى وهمي يمر في محور الطية، ويقسمها إلى قسمين. (قد يقسمها لنصفين متماثلين، أو يكون مائلاً).</li>
          <li><strong>محور الطية (Fold Axis):</strong> خط وهمي يقع على المستوى المحوري، ويمر بأقصى تكور لطبقة ما.</li>
        </ul>
      </ConceptBox>

      <ConceptBox title="تصنيف الطيات" icon={Waves}>
        <p className="mb-4">تُصنّف الطيات بناءً على اتجاه تقوسها وزاوية ميل مستواها المحوري:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50 p-4 border border-amber-200 rounded-lg">
            <h5 className="font-bold text-amber-800 text-lg border-b pb-2 mb-2 border-amber-200">حسب اتجاه التقوس:</h5>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>طية محدبة (Anticline):</strong> تتقوس الطبقات نحو الأعلى. الجناحان يميلان <strong>بعيداً</strong> عن المحور. الطبقات <strong>الأقدم</strong> في المركز.</li>
              <li><strong>طية مقعرة (Syncline):</strong> تتقوس الطبقات نحو الأسفل. الجناحان يميلان <strong>باتجاه</strong> المحور. الطبقات <strong>الأحدث</strong> في المركز.</li>
            </ol>
          </div>
          <div className="bg-sky-50 p-4 border border-sky-200 rounded-lg">
            <h5 className="font-bold text-sky-800 text-lg border-b pb-2 mb-2 border-sky-200">حسب زاويَة المستوى المحوري:</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>متماثلة (Symmetrical):</strong> المستوى المحوري عمودي (زاوية 90ْ).</li>
              <li><strong>غير متماثلة (Asymmetrical):</strong> المستوى المحوري مائل، الجناحان بهما زوايا مختلفة.</li>
              <li><strong>مقلوبة (Overturned):</strong> زاوية ميل أحد الأجنحة تزيد عن 90ْ فتنقلب الطبقات.</li>
              <li><strong>مضطجعة (Recumbent):</strong> المستوى المحوري أفقي تقريباً والكثير من أجزائها مائل بنفس الاتجاه نحو الأفق.</li>
            </ul>
          </div>
        </div>

        <div className="bg-emerald-50 p-4 border border-emerald-200 rounded-lg mt-4">
          <h5 className="font-bold text-emerald-800 text-lg mb-2">القبة والحوض (Dome and Basin):</h5>
          <p className="text-gray-700">
            <strong>القبة (Dome):</strong> طيّة محدبة متماثلة تميل أجنحتها في جميع الاتجاهات عن المركز (كالقبة). الطبقات <strong>الأقدم</strong> في المركز بسبب الحت والتجوية للقمة.<br/>
            <strong>الحوض (Basin):</strong> طية مقعرة متماثلة تميل أجنحتها نحو المركز. الطبقات <strong>الأحدث</strong> في المركز (مثال: حوض البقعة في الأردن الذي كان أصلاً قبة وتآكلت لتشكل حوضاً!).
          </p>
        </div>
      </ConceptBox>

      <ExerciseBox 
        type="activity"
        title="نشاط: أجزاء الطية (ص 65)"
        question="ادرس شكل الطية ثم حدد أجزاءها واستنتج كيف يقسم المستوى المحوري الطية."
        answer={
          <div className="space-y-2">
            <p>1+2. تحوي الطية جناحين يفصل بينهما المستوى المحوري.</p>
            <p>3. الخط الذي يصل بين النقاط بأكبر تكور يسمى <strong>مفصل الطية</strong>.</p>
            <p>4. المستوى المحوري يقسم الطية إلى <strong>نصفين/قسمين</strong>.</p>
            <p>5. تتقوس هذه الطية <strong>نحو الأعلى</strong> فهي محدبة.</p>
          </div>
        }
      />

      <ExerciseBox 
        type="review"
        title="مراجعة الدرس الثالث (ص 71-72)"
        question="حل أسئلة المراجعة:"
        answer={
          <div className="space-y-4">
            <div><h5 className="font-bold text-indigo-700">1. الأساس في تصنيف الطيات:</h5>
            <p>اتجاه التقوس للطبقات، وزاوية ميل المستوى المحوري.</p></div>

            <div><h5 className="font-bold text-indigo-700">3. المقارنة بين القبة والحوض:</h5>
            <p><strong>القبة:</strong> ميل الطبقات يكون في جميع الاتجاهات نحو الخارج (بعيداً عن المركز). الأقدم في المركز والأحدث على الأطراف.<br/>
            <strong>الحوض:</strong> ميل الطبقات يكون في جميع الاتجاهات نحو الداخل (نحو المركز). الأحدث في المركز والأقدم على الأطراف.</p></div>

            <div><h5 className="font-bold text-indigo-700">4. تحليل الطية المقلوبة (ص 71):</h5>
            <p>أ. الأجزاء: (1) مستوى محوري (مائل بقوة)، (2) مفصل، (3) جناح مقلوب.<br/>
            ب. (أ) طية مقعرة (تقوس للأسفل)، (ب) طية محدبة (تقوس للأعلى).<br/>
            ج. في المحدبة (ب) الأقدم في المركز. في المقعرة (أ) الأحدث في المركز.<br/>
            هـ. قوة الإجهاد هي <strong>الضغط</strong>.<br/>
            و. توقع تركيب رافقها: <strong>صدع عكسي</strong>! (لأنه ينتج عن إجهاد الضغط الكبير في الطيات المقلوبة الشديدة قد يتجاوز الأمر حد المرونة لينكسر مكوناً صدعاً عكسياً).</p></div>

            <div className="mt-4 pt-4 border-t border-sky-100">
                <p className="text-lg mb-2"><strong>حل دوائر الصفحة (72):</strong></p>
                <ol className="list-decimal list-inside space-y-2 font-medium text-gray-700">
                <li>جـ (جناح الطية). الحرف (D).</li>
                <li>ب (المستوى المحوري). الحرف (C).</li>
                <li>جـ (مقعرة وغير متماثلة).</li>
                <li>ب (أוضغط غير متساوٍ على كلا الجانبين) – لأنها أصبحت غير متماثلة لو كان متساوياً لكانت متماثلة.</li>
                <li>د (مقلوبة).</li>
                </ol>
            </div>
          </div>
        }
      />
    </div>
  );
}
