import React from 'react';
import { ConceptBox, ExerciseBox, LessonHeader } from '../components/UI';
import { Building } from 'lucide-react';

export default function Unit2_Review() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 page-break" id="u2-review">
      <LessonHeader 
        number={4} 
        title="الإثراء ومراجعة الوحدة الثانية" 
        objective="التعرف على الجيولوجيا الهندسية، واختبار المعارف في التراكيب الجيولوجية."
      />

      <ConceptBox title="الإثراء والتوسع: الجيولوجيا الهندسية (Engineering Geology)" icon={Building}>
        <p>تُعرف الجيولوجيا الهندسية بأنها تطبيق عملي لعلم الجيولوجيا في مجال الهندسة. حيث تؤخذ العوامل الجيولوجية بعين الأهمية في اختيار موقع البناء، وتصميم المنشأ لتجنب الكوارث.</p>
        <p className="mt-2">تؤثر <strong>الصدوع والطيات</strong> بشكل مباشر على إقامة السدود والأنفاق والجسور الكبيرة، لأن وجودها يضعف قابلية التحمل للطبقات الصخرية، مما يؤدي لتفتت الصخور بفعل ثقل المنشآت المقامَة فوقها وانهيارها.</p>
      </ConceptBox>

      <ExerciseBox 
        type="review"
        title="حل السؤال الأول (ص 74-75) - دوائر:"
        question="أضع دائرة حول رمز الإجابة الصحيحة:"
        answer={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>1. ب (الطيات) تصنع بالضغط.</div>
            <div>2. ب (عكسية) حركة المعلق للأعلى.</div>
            <div>3. ب (المضطجعة) مستوى محوري أفقي.</div>
            <div>4. جـ (الصدع العادي) ينتج عن الشد.</div>
            <div>5. أ (المتماثلة).</div>
            <div>6. أ (صدع عادي) - حسب الشكل.</div>
            <div>7. أ (المحدبة).</div>
            <div>8. ب (العكسية) تكرر الطبقات رأسياً مع العمق.</div>
            <div>9. جـ (الصدع الجانبي) بفعل إجهاد القص.</div>
            <div>10. د (صدعين عاديين متباعدين يهبط بينهما حوض).</div>
            <div>11. جـ (مفصل الطية) الخط الوهمي لأقصى انحناء.</div>
            <div>12. د (المحدبة).</div>
          </div>
        }
      />

      <ExerciseBox 
        type="review"
        title="حل السؤال الثاني (ص 75) - إملاء الفراغ:"
        question="أملأ الفراغ بالمصطلحات المناسبة:"
        answer={
          <ul className="list-disc list-inside space-y-2 text-sky-800 font-medium">
            <li>1. الطيّة المتماثلة (سواء محدبة أو مقعرة).</li>
            <li>2. مَفْصَل الطية (Hinge).</li>
            <li>3. جناحا الطية، المستوى المحوري، مفصل الطية.</li>
            <li>4. الجدار القَدَم (Foot Wall).</li>
            <li>5. الصّدوع الجانبية (الأفقية).</li>
            <li>6. نوع الصخر، مقدار الإجهاد ونوعه، درجة الحرارة، الزمن.</li>
          </ul>
        }
      />

      <ExerciseBox 
        type="review"
        title="حل أسئلة التفكير والتحليل (ص 76):"
        question="إجابات مقالية مختصرة:"
        answer={
          <div className="space-y-4">
            <div><strong className="text-indigo-700">السؤال 3:</strong> يؤثر إجهاد الشد في الصخور الهشة بكسرها وتشكيل <strong>صدع عادي</strong> يهبط فيه الجدار المعلق.</div>
            <div><strong className="text-indigo-700">السؤال 4:</strong> تتكون الكتل الاندفاعية (Horsts) من تعرض الصخور لإجهاد شد يولد صدعين عاديين، فتهبط الكتل الجانبية وتبقى الكتلة المركزية مرتفعة كالهضبة.</div>
            <div><strong className="text-indigo-700">السؤال 5:</strong> إجهاد <strong>الضغط</strong>: قوتان متعاكستان باتجاه بعضهما. إجهاد <strong>الشد</strong>: قوتان متعاكستان تبتعدان عن بعضهما.</div>
            <div><strong className="text-indigo-700">السؤال 6:</strong> في <strong>العادي</strong>: المعلق ينزلق للأسفل على مستوى الصدع المستند على القدم. في <strong>العكسي</strong>: المعلق يتسلق ويرتفع للأعلى فوق القدم.</div>
            <div><strong className="text-indigo-700">السؤال 7:</strong> (الشكل يوضح صدع عكسي (ع) بجانبه صدع عكسي آخر (س)). أ. الأجزاء محددة كالسابق. ب. الإجهاد: ضغط. ج. النوع: عكسي. د. <strong>تكرار الطبقات</strong> يحدث في الصدع العكسي نعم.</div>
            <div><strong className="text-indigo-700">السؤال 8 (مخطط الإجهاد):</strong> صخر (أ) الهش ينكسر عند الحد. صخر (ب) اللدن ينطوي.</div>
            <div><strong className="text-indigo-700">السؤال 9:</strong> نعم قد تتشكل طيات في الصخور الهشة إذا تعرضت <strong>لحرارة عالية جداً</strong> أو ضغط بطيء على مدى <strong>زمن طويل جداً</strong> في باطن الأرض.</div>
            <div><strong className="text-indigo-700">السؤال 11 (الفرق بين القبة والحوض):</strong> القبة تميل طبقاتها مبتعدة عن المركز (أقدمها في الوسط). الحوض تميل طبقاتها نحو المركز (أحدثها في الوسط).</div>
          </div>
        }
      />
    </div>
  );
}
