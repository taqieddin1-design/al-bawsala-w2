import React from 'react';
import { StoryBox, ConceptBox, ExerciseBox, LessonHeader, MathBox } from '../components/UI';
import { Map, Compass, TrendingUp } from 'lucide-react';

export default function Unit4_Lesson1() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id="u4-lesson1">
      <LessonHeader 
        number={1} 
        title="الخرائط الجيولوجية (Geological Maps)" 
        objective="قراءة الخرائط الجيولوجية، والتعرف على خطوط الكنتور، والمضرب والميل، ورسم المقاطع التضاريسية."
      />

      <StoryBox>
        عزيزي الطالب، تخيل لو أردنا بناء نفق ضخم أو سد عملاق، هل نكتفي بالنظر لسطح الأرض؟ بالطبع لا! المهندسون والعلماء بحاجة لرؤية "أشعة سينية" للأرض لمعرفة أنواع الصخور المخبأة تحت السطح، والميلانات، والتراكيب المعقدة. هنا يأتي السحر الذي يقدمه الجيولوجيون: <strong>"الخريطة الجيولوجية"</strong>. دعنا نتعلم كيف نفك شيفرتها ونقرأها كخبراء!
      </StoryBox>

      <ConceptBox title="أنواع الخرائط وأهميتها" icon={Map}>
        <p className="text-lg mb-4">الخريطة تختصر آلاف الكلمات الوصفية إلى رسم دقيق ورموز. أهمها:</p>
        <ul className="list-disc list-inside space-y-3">
          <li><strong>الخريطة الطبوغرافية:</strong> خريطة توضح تضاريس الأرض (جبال، وديان) بصورة مجسمة، تضاف إليها المعالم الطبيعية والبشرية.</li>
          <li><strong>الخريطة الكُنتورية (Contour Map):</strong> خريطة الأساس! تعتمد على <strong>خطوط الكنتور</strong> وهي خطوط وهمية تصل بين النقاط المتساوية في الارتفاع عن مستوى سطح البحر.</li>
          <li><strong>الخريطة الجيولوجية:</strong> خريطة كنتورية/طبوغرافية، يُضاف إليها ألوان ورموز تمثل <strong>أنواع الصخور، والميل، والمضرب، والتراكيب الجيولوجية المختلفة</strong> للطبقات تحت وفوق السطح.</li>
        </ul>

        <div className="bg-sky-50 p-4 border border-sky-200 rounded-xl mt-4">
          <h4 className="font-bold text-sky-800 text-lg mb-2">مميزات خطوط الكنتور:</h4>
          <ul className="list-decimal list-inside">
            <li>لا تتقاطع مع بعضها البعض إطلاقاً (لأنه لا يمكن لنقطة أن يكون لها ارتفاعان مختلفان!).</li>
            <li>الفرق في الارتفاع بين أي خطين كنتوريين متتاليين يسمى <strong>الفترة الكنتورية (Contour Interval)</strong>، وهي ثابتة للخريطة الواحدة.</li>
            <li>تقارب الخطوط يدل على <strong>انحدار شديد (جرف مستدق)</strong>، وتباعدها يدل على انحدار لطيف أو سهول.</li>
          </ul>
        </div>
      </ConceptBox>

      <ConceptBox title="معالم الخريطة الجيولوجية وتحديد وضعية الصخور" icon={Compass}>
        <p className="mb-4">لتحديد وضعية طبقة صخرية مائلة بأبعادها الثلاثية، نستخدم 3 مؤشرات يقيسها البوصلة الجيولوجية:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border rounded shadow p-4">
            <h5 className="font-bold text-rose-700 text-lg mb-2 border-b pb-1">1. المَيْل (Dip)</h5>
            <p className="text-gray-700">الزاوية المحصورة بين سطح الطبقة المائل والمستوى الأفقي (تتراوح بين 0ْ للأفقية و 90ْ للرأسية).</p>
          </div>
          <div className="bg-white border rounded shadow p-4">
            <h5 className="font-bold text-sky-700 text-lg mb-2 border-b pb-1">2. اتجاه المَيْل</h5>
            <p className="text-gray-700">الاتجاه الجغرافي الذي تميل نحوه الطبقة نحو الأسفل. (مثلاً: تميل شمالاً، أو جنوب شرق).</p>
          </div>
          <div className="bg-white border rounded shadow p-4">
            <h5 className="font-bold text-emerald-700 text-lg mb-2 border-b pb-1">3. المَضْرِب (Strike)</h5>
            <p className="text-gray-700">الخط الناتج من تقاطع الطبقة المائلة مع المستوى الأفقي. <strong>وهو دائماً متعامد (يصنع زاوية 90 درجة) مع اتجاه المَيْل.</strong></p>
          </div>
        </div>

        <div className="mt-6 bg-amber-50 p-4 rounded-lg">
          <p className="font-bold text-amber-900">💡 تلميح رياضي للبوصلة الجيولوجية:</p>
          <p className="text-gray-800 mt-2">
            إذا عرفنا <strong>اتجاه الميل</strong>، يمكننا استخراج المضرب بسهولة! فالمضرب خط يمتد في اتجاهين متعاكسين وتعامد مع الميل (± 90ْ).<br/>
            مثال: إذا كان اتجاه الميل 135ْ (جنوب شرق).<br/>
            المضرب الصغير = 135 - 90 = 45ْ (شمال شرق).<br/>
            المضرب الكبير = 135 + 90 = 225ْ (جنوب غرب).<br/>
            وعادةً تُؤخذ القراءة الأصغر للمضرب للتعبير عنه.
          </p>
        </div>
      </ConceptBox>

      <ConceptBox title="مقياس الرسم (Map Scale)" icon={TrendingUp}>
        <p className="mb-2">النسبة بين طول بُعد على الخريطة والطول الحقيقي المقابل له على الأرض. وله أشكال:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>الكتابي:</strong> "1 سم لكل 1 كم".</li>
          <li><strong>الكسري/النسبي:</strong> 1/100,000 أو 1:100,000 (نفس الوحدة للطرفين، مثلاً 1سم على الخريطة لكل 100 ألف سم حقيقي).</li>
          <li><strong>الخطي (البياني):</strong> خط مقسم لمسافات حقيقية بصرية، وهو الأفضل لأنه لا يتأثر باختلاف حجم الطباعة للورقة.</li>
        </ul>
      </ConceptBox>

      <ExerciseBox 
        type="review"
        title="مراجعة الدرس الأول (ص 129-130)"
        question="أسئلة نهاية الدرس:"
        answer={
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-indigo-700 mb-1">1. عناصر الخريطة الجيولوجية:</h5>
              <p>يجب توافر 3 عناصر مهمة: عنوان الخريطة، مقياس الرسم، ودليل الخريطة (الرموز والألوان).</p>
            </div>
            <div>
              <h5 className="font-bold text-indigo-700 mb-1">2. المقارنة بين الكنتورية والطبوغرافية:</h5>
              <p><strong>الكنتورية:</strong> توضح تضاريس الارتفاع فقط بخطوط. <strong>الطبوغرافية:</strong> خريطة كنتورية مضاف إليها المظاهر الطبيعية والبشرية (كالأنهار والمباني والطرق).</p>
            </div>
            <div>
              <h5 className="font-bold text-indigo-700 mb-1">3. تحويل المقياس: (1 سم لكل 20 كم):</h5>
              <p>نحول 20 كم إلى سم (نضرب بـ 100,000). 20 × 100,000 = 2,000,000. إذن المقياس النسبي: <strong>1:2,000,000</strong>.</p>
            </div>
            <div>
              <h5 className="font-bold text-indigo-700 mb-1">4. تحديد الميل والمضرب لزاوية اتجاه ميل 225:</h5>
              <p><strong>اتجاه الميل:</strong> 225ْ (جنوب غرب).<br/><strong>قيمة الميل:</strong> 45ْ (من الرقم المكتوب على رمز الميل بالشكل).<br/><strong>المضرب:</strong> 225 - 90 = 135ْ (جنوب شرق) و 225 + 90 = 315ْ (شمال غرب).</p>
            </div>
            <div>
              <h5 className="font-bold text-indigo-700 mb-1">6. هل يوجد مضرب للطبقة الأفقية؟</h5>
              <p>لا، لأن الطبقة الأفقية موازية تماماً للسطح الأفقي وتتطابق معه، ولا تكوّن خط تقاطع مائل معه، بالتالي لا يوجد مضرب ولا زاوية ميل (الميل = صفر).</p>
            </div>
            <div>
              <h5 className="font-bold text-indigo-700 mb-1">7. استنتج المظهر الطبوغرافي:</h5>
              <p>في الشكل (ص 129)، الارتفاعات تتزايد باتجاه الداخل بقيم مغلقة (300 إلى 900)، وبالتالي فهي تمثل <strong>قمة جبل أو تل</strong>.</p>
            </div>

            <div className="mt-4 pt-4 border-t border-sky-100">
                <p className="text-lg mb-2"><strong>حل دوائر الصفحة (130):</strong></p>
                <ol className="list-decimal list-inside space-y-2 font-medium text-gray-700">
                <li>ب. الطبوغرافية.</li>
                <li>جـ. مقياس الرسم.</li>
                <li>ب. نسبي. (لأنه مكتوب 1سم = 5كم وهذا يعبر عن مقياس لفظي حول إلى نسبي). ولكن بالنظر للكتاب هو مقياس كتابي/لفظي (أ) لأنه مكتوب بالكلمات! <strong>الإجابة: أ (كتابي)</strong>.</li>
                <li>جـ. 90ْ. (المضرب يتعامد مع اتجاه الميل دائماً).</li>
                <li>ب. وجود منحدر شديد (تقارب خطوط الكنتور).</li>
                </ol>
            </div>
          </div>
        }
      />
    </div>
  );
}
