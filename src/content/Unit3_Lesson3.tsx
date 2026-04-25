import React from 'react';
import { StoryBox, ConceptBox, ExerciseBox, LessonHeader } from '../components/UI';
import { Network, ActivitySquare, ArrowLeftRight, Navigation } from 'lucide-react';

export default function Unit3_Lesson3() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id="u3-lesson3">
      <LessonHeader 
        number={3} 
        title="نظرية تكتونية الصفائح (Plate Tectonics)" 
        objective="معرفة مبدأ نظرية تكتونية الصفائح وتمييز أنواع الحدود والظواهر الجيولوجية الناتجة عن حركة الصفائح."
      />

      <StoryBox>
        بعد أن أثبت العلماء أن قاع المحيط يتوسع ويتجدد، تم دمج أفكار "انجراف القارات" و"توسع قاع المحيط" في نظرية واحدة عملاقة شاملة غيرت علم الأرض بالكامل: إنها <strong>نظرية تكتونية الصفائح</strong>. الأرض ليست قشرة قاسية متصلة، بل هي مشققة إلى قطع كبرى كالسلاحف العملاقة تطفو وتتحرك وتتصادم فوق طبقة منصهرة لزجة!
      </StoryBox>

      <ConceptBox title="مبدأ نظرية تكتونية الصفائح" icon={Network}>
        <p className="text-lg leading-relaxed bg-sky-50 p-4 border-r-4 border-sky-400 rounded">
          تنص النظرية على أن <strong>الغلاف الصخري (Lithosphere)</strong> للأرض مقسم إلى قطع كبرى وصغرى تسمى <strong>الصفائح (Plates)</strong>، وهذه الصفائح تتحرك حركة مستمرة وبطيئة فوق <strong>الغلاف اللدن (Asthenosphere)</strong> بفعل تيارات الحمل في الستار.
        </p>

        <h4 className="font-bold text-gray-800 mt-6 mb-3 text-xl">أنواع الصفائح حسب المكونات:</h4>
        <ul className="list-disc list-inside space-y-3">
          <li><strong>صفيحة قارية (Continental Plate):</strong> صفيحة تحمل قارة (يابسة)، وغالباً تكون من صخور الجرانيت، وتمتاز بأن <strong>كثافتها منخفضة (2.7 g/cm³)</strong> وسمكها كبير.</li>
          <li><strong>صفيحة محيطية (Oceanic Plate):</strong> صفيحة تقع تحت قاع المحيط، وتتكون من صخور البازلت، وتمتاز بأن <strong>كثافتها عالية (3.0 g/cm³)</strong> وسمكها أقل.</li>
        </ul>
        <p className="mt-3 text-gray-500 italic text-sm">* معظم الصفائح الكبرى هي صفائح مختلطة (قارية-محيطية) معاً كالصفيحة الإفريقية.</p>
      </ConceptBox>

      <ConceptBox title="أنواع حدود الصفائح" icon={ArrowLeftRight}>
        <p className="mb-4">تتفاعل الصفائح عند حوافها (الحدود) بثلاث طرق رئيسية، وينتج عنها تضاريس مذهلة:</p>

        <div className="space-y-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-sky-800 text-xl border-b pb-2 mb-3">1. الحدود التباعدية (Divergent Boundaries)</h4>
            <p className="text-gray-700">تتحرك صفيحتان تبتعدان عن بعضهما. (حدود بنّاءة).</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-sky-900">
              <li><strong>في قاع المحيط:</strong> تكون "ظهر المحيط" وتوسع القاع.</li>
              <li><strong>على اليابسة:</strong> تكون "حفرة انهضام" (Rift Valley) وتنشق القارة مسببة بحراً ضيقاً (مثل البحر الأحمر الذي يفصل الصفيحة العربية عن الإفريقية). ومع الزمن يتحول لمحيط واسع.</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-rose-800 text-xl border-b pb-2 mb-3">2. الحدود التقاربية (Convergent Boundaries)</h4>
            <p className="text-gray-700">تتحرك صفيحتان تقتربان من بعضهما وتتصادمان. (حدود هدّامة). ولها 3 حالات:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-rose-900">
              <li><strong>محيطية مع محيطية:</strong> تغوص الأقدم (لأنها أبرد وأكثر كثافة) تحت الأحدث، وتنصهر لتكون <strong>جزر بركانية قوسية (Island Arcs)</strong> وأخاديد بحرية. (مثل جزر اليابان).</li>
              <li><strong>محيطية مع قارية:</strong> تغوص المحيطية (لأن كثافتها أعلى) تحت القارية. وينتج عن ذلك <strong>سلاسل جبلية بركانية</strong> على حافة القارة وأخاديد بحرية. (مثل جبال الأنديز).</li>
              <li><strong>قارية مع قارية:</strong> لا تغوص أي منهما لأن كثافتهما منخفضة، بل تتصادمان وتنطويان لتشكيل <strong>سلاسل جبلية قارية ضخمة</strong> (لا تكون بركانية عادة). (مثل جبال الهيمالايا وزاغروس).</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-emerald-800 text-xl border-b pb-2 mb-3">3. الحدود التحويلية/الجانبية (Transform Boundaries)</h4>
            <p className="text-gray-700">تنزلق صفيحتان بمحاذاة بعضهما أفقياً. لا يتم بناء ولا تدمير للغلاف الصخري. (حدود محافظة).</p>
            <p className="mt-2 text-emerald-900"><strong>الناتج:</strong> زلازل سطحية قوية وصدوع تحويلية (مثل صدع سان أندرياس، وصدع البحر الميت التحويلي الذي نعيش بمحاذاته في الأردن).</p>
          </div>
        </div>
      </ConceptBox>

      <ConceptBox title="القوى المحركة للصفائح (آلية الحركة)" icon={ActivitySquare}>
        <p className="mb-4">لم يكن فغنر يعرف هذه القوى المحركة، ولكن العلماء اليوم يقترحون آليات مبنية على <strong>تيارات الحمل الحراري</strong> في الستار اللدن:</p>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li><strong>الدفع عند الظهر (Ridge Push):</strong> لابة ساخنة تخرج عند الظهر وتنزلق بفعل الجاذبية بعيداً عن المركز المرتفع نحو الأخاديد المنخفضة.</li>
          <li><strong>سحب الشريحة (Slab Pull):</strong> عندما تصل القشرة المحيطية الباردة الكثيفة والثقيلة إلى الأخدود، تغوص في الستار وتسحب وراءها بقية الصفيحة كالمحتضِر الذي يسحب البطانية خلفه. <strong className="text-rose-700">وهذه هي القوة الأهم والأكبر.</strong></li>
        </ol>
      </ConceptBox>

      <ExerciseBox 
        type="review"
        title="مراجعة الدرس الثالث"
        question="حل أسئلة نهاية الدرس:"
        answer={
          <div className="space-y-4">
             <div><h5 className="font-bold text-indigo-700">1. نظرية تكتونية الصفائح:</h5>
             <p>أن الغلاف الصخري للأرض يتكون من قطع (صفائح) تتحرك بحركة مستمرة بسبب تيارات الحمل، وينتج عنها تفاعلات عند الحدود.</p></div>

             <div><h5 className="font-bold text-indigo-700">2. تفسير غوص الصفيحة المحيطية تحت القارية:</h5>
             <p>لأن الصفيحة المحيطية (البازلتية) أعلى كثافة (3.0 g/cm³) من الصفيحة القارية (الجرانيتية 2.7 g/cm³)، وبفعل الجاذبية تغوص لأسفل الغلاف اللدن.</p></div>

             <div><h5 className="font-bold text-indigo-700">3. سبب تكون حفرة الانهدام الإفريقي العظيم والبحر الأحمر:</h5>
             <p>نتيجة حركات <strong>تباعدية</strong> داخل الصفيحة القارية، أدت لترقق القشرة وتصدعها وتكون حفر انهدام تملأت بالماء مع الزمن.</p></div>

             <div><h5 className="font-bold text-indigo-700">4. مصير البحر الأحمر:</h5>
             <p>سيستمر بالاتساع مع استمرار تباعد الصفيحة العربية عن الإفريقية ليصبح يوماً ما <strong>محيطاً واسعاً</strong>.</p></div>
          </div>
        }
      />
    </div>
  );
}
