import React from 'react';
import { StoryBox, ConceptBox, ExerciseBox, LessonHeader } from '../components/UI';
import { Pickaxe, ShieldAlert, RefreshCcw, HandHandshake } from 'lucide-react';

export default function Unit4_Lesson3() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id="u4-lesson3">
      <LessonHeader 
        number={3} 
        title="تعدين الخامات المعدنية وأثره على البيئة" 
        objective="معرفة طرق استخراج المعادن من الأرض (التعدين) وأثره المدمر والسلبي على البيئة وكيفية إدارة وتخفيف هذه المخاطر."
      />

      <StoryBox>
        عزيزي الطالب، الجيولوجي البارع قد وجد الكنز المخفي باستخدام علمه الواسع من المسوح، ولكن! هنا تأتي مرحلة الحسم، استخراج الذهب والحديد إلى السطح. هذه العملية تسمى <strong>"التعدين (Mining)"</strong>. وبرغم أهميتها لاقتصاد الدول، إلا أنها عبارة عن ندبة عميقة وتدمير مرعب لبيئتنا الطرية إن لم نتعامل معها بحرص ومسؤولية لإعادة الحياة للمكان بعد الانتهاء!
      </StoryBox>

      <ConceptBox title="طرق التعدين (Mining Methods)" icon={Pickaxe}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="border border-sky-200 bg-sky-50 rounded-xl p-5 shadow-sm">
            <h4 className="font-bold text-2xl text-sky-800 mb-3 border-b border-sky-200 pb-2">1. التعدين السطحي (Surface Mining)</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>متى يستخدم؟</strong> عندما يكون الخام قريباً جداً من السطح والمنطقة غير مأهولة بالسكان.</li>
              <li><strong>الآلية:</strong> إزالة التربة والصخور العلوية المكشوفة، واستخدام آليات وجرافات ضخمة للوصول للخام وتحميله لشاحنات.</li>
              <li>يُطلق عليه أيضاً <strong>التعدين المفتوح</strong>، وتكلفته منخفضة نسبياً مقارنة بغيره.</li>
            </ul>
          </div>
          
          <div className="border border-rose-200 bg-rose-50 rounded-xl p-5 shadow-sm">
            <h4 className="font-bold text-2xl text-rose-800 mb-3 border-b border-rose-200 pb-2">2. التعدين تحت السطحي (Subsurface Mining)</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>متى يستخدم؟</strong> عندما يتواجد الخام على أعماق تزيد عن 50 متراً وتصعب إزالة التغطيات الصخرية الهائلة.</li>
              <li><strong>الآلية:</strong> حفر أنفاق مائلة أو أفقية، أو أعمدة رأسية ومصاعد للوصول للخام تحت الأرض.</li>
              <li>يرفع هذا النوع من <strong>تكلفة التعدين</strong> وتزداد مخاطره على العمال، ويحتاج لدراسات جيولوجية دقيقة وقوية لتجنب انهيار الأنفاق.</li>
            </ul>
          </div>
        </div>
      </ConceptBox>

      <ConceptBox title="الأثر البيئي المروع للتعدين" icon={ShieldAlert}>
        <p className="text-lg mb-4 text-gray-800">أثناء عمليات التعدين، تتعرض البيئة إلى صدمة قاتلة بسبب عمليات الحفر. من أبرز هذه الأضرار:</p>
        <ul className="space-y-3">
          <li className="flex gap-2 items-start"><span className="text-rose-600 font-black">✗</span> <div><strong>فقدان موطن الكائنات (التنوع الحيوي):</strong> إزالة التربة والغابات تدمر المواطن الأساسية للحيوانات والنباتات في منطقة التعدين.</div></li>
          <li className="flex gap-2 items-start"><span className="text-rose-600 font-black">✗</span> <div><strong>تلوث المياه:</strong> تسرب مواد كيميائية سامة وغسل الخامات (كالزرنيخ والرصاص والسيانيد) قد يلوث الموارد السطحية القريبة وتتسرب للمياه الجوفية!</div></li>
          <li className="flex gap-2 items-start"><span className="text-rose-600 font-black">✗</span> <div><strong>تلوث الهواء:</strong> الآليات والحفر تملأ الجو بأطنان من الغبار الخانق. وتعدين البيريت (FeS2) مثلاً يطلق الكبريت المسبب للتسمم والأمطار الحمضية.</div></li>
          <li className="flex gap-2 items-start"><span className="text-rose-600 font-black">✗</span> <div><strong>تعرية التربة:</strong> تنجرف أكوام الركام بفعل الرياح والأمطار لتترسب وتخنق مياه الأنهار وترفع منسوبها وتسبب الفيضانات ودمار البيئة المائية.</div></li>
          <li className="flex gap-2 items-start"><span className="text-rose-600 font-black">✗</span> <div><strong>التلوث البصري والضوضائي:</strong> الضجيج المرعب للآليات يؤثر صحياً على العمال والسكان، ويطرد الحيوانات، ويعكر صفو الحياة بتشويه المناظر الليلية والنهارية.</div></li>
        </ul>
      </ConceptBox>

      <ConceptBox title="إدارة التأثير البيئي (الالتزام الأخلاقي)" icon={RefreshCcw}>
        <p className="mb-4">قبل البدء بأي خطوة، يجب تقديم <strong>تقرير تقييم الأثر البيئي (EIA)</strong>. وعلاج الأمر يشمل:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border rounded shadow-sm p-4">
            <h5 className="font-bold text-emerald-700 text-lg mb-2">1. التأهيل البيئي (Remediation)</h5>
            <p className="text-gray-700">هدم المنشآت بعد التعدين، تثبيت التربة لتجنب التعرية، والتخلص الآمن والعميق للأنابيب والنفايات السامة (أو المعالجة البيولوجية بالبكتيريا).</p>
          </div>
          <div className="bg-white border rounded shadow-sm p-4">
            <h5 className="font-bold text-emerald-700 text-lg mb-2">2. الترميم (Restoration)</h5>
            <p className="text-gray-700">إعادة المكان والنظام البيئي إلى ما كان عليه قبل التخريب الجائر من خلال زراعة الأشجار وتحويله لمحميات.</p>
          </div>
          <div className="bg-white border rounded shadow-sm p-4">
            <h5 className="font-bold text-emerald-700 text-lg mb-2">3. إعادة الاستخدام (Re-Use)</h5>
            <p className="text-gray-700">تحويل الفجوة القبيحة إلى منطقة جذب سياحي (مثل حدائق بوتشارت) أو مزارع تربية مواشي لاستدامة نفع المكان.</p>
          </div>
        </div>
      </ConceptBox>

      <ExerciseBox 
        type="review"
        title="مراجعة الدرس الثالث (ص 149)"
        question="حل أسئلة نهاية الدرس:"
        answer={
          <div className="space-y-4">
            <div><h5 className="font-bold text-indigo-700 mb-1">1-4. أسئلة التفسير والربط:</h5>
            <p><strong>1. التفسير للتأثيرات:</strong> التعدين يزيل التربة والغابات، يلوث الهواء بالغبار والمعادن السامة، ويلوث المياه بالسيانيد والرصاص ويدمر الحياة البرية بالضجيج.<br/>
            <strong>2. التغير المناخي والتعدين:</strong> قطع الأشجار الكثيف أثناء تعدين الغابات يزيل مصفيات ثاني أكسيد الكربون الطبيعية. غبار الآليات وغازات حرق الفحم يزيد من غازات الدفيئة لترفع حرارة الجو، فتتغير حرارة المناطق المتأثرة ومناخها.<br/>
            <strong>3. أثر الترميم:</strong> يساهم في إرجاع العجلة البيئية لمكانها السليم وعودة التنوع الحيوي وإبطال التسمم.<br/>
            <strong>4. أثر الضجيج:</strong> يربك نمط حياة الحيوانات، يطردها من مساكنها ويجبرها على الهجرة للمجهول وإلغاء الاستقرار الطبيعي لها.</p></div>

            <div className="bg-sky-50 mt-4 p-4 rounded-xl border border-sky-200">
              <h5 className="font-bold text-sky-800 mb-3 border-b border-sky-300 pb-2">5. إجابات الدوائر (اختر رمز الإجابة):</h5>
              <ol className="list-decimal list-inside space-y-2 font-medium text-gray-800">
                <li><span className="text-sky-900 font-bold">ب.</span> إعادة بناء النظام البيئي. (أو إنشاء بنية، حسب الكتاب: إعادة بناء النظام البيئي).</li>
                <li><span className="text-sky-900 font-bold">ب.</span> التعدين بالأعمدة الرأسية (أو الأنفاق). بما أن الخام أعمق من 40م وهو نحاس صلب، فالأنسب هو التعدين المحكم بالمصاعد والأعمدة. <strong>الأصح حسب خيارات الكتاب:</strong> جـ. أو ب. (الكتاب يذكر الأعمدة السطحية أم الأنفاق المائلة؟ لا، يذكر الأنفاق للظروف والأعمدة للوصول الرأسي. إذا كان الخام على أعماق و "صلب" وتحته طبقات، الجواب الأرجح <strong>التعدين تحت سطحي، بالأنفاق أو الأعمدة الرأسية.</strong> إذا كان يتعذر الحفر المائل. الجواب الأقرب لمنهجية الكتاب: التعدين في الأعماق (تحت السطحي) ولأن التغطية صخرية صلبة قد تُستخدم الأعمدة الرأسية أو المائلة.</li>
                <li><span className="text-sky-900 font-bold">ب.</span> عمق الخامات المعدنية. (هو العامل الحاسم بين السطحي وتحت السطحي).</li>
                <li><span className="text-sky-900 font-bold">أ.</span> ضمان أمان الموقع بعد إيقاف التعدين. (وهذا جزء من عملية التأهيل).</li>
                <li><span className="text-sky-900 font-bold">ب.</span> التخلص من النفايات الخطرة. (الأهم ضمن التأهيل البيئي Remediation).</li>
              </ol>
            </div>
          </div>
        }
      />

    </div>
  );
}
