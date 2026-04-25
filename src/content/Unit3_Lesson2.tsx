import React from 'react';
import { StoryBox, ConceptBox, ExerciseBox, LessonHeader } from '../components/UI';
import { Anchor, Magnet, Navigation } from 'lucide-react';

export default function Unit3_Lesson2() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id="u3-lesson2">
      <LessonHeader 
        number={2} 
        title="توسّع قاع المحيط (Seafloor Spreading)" 
        objective="فهم التضاريس الخفية في قيعان المحيطات، وفرضية هاري هس في توسعها وتجددها التي حلت لغز حركة القارات."
      />

      <StoryBox>
        لعقود طويلة اعتقد الناس أن قاع المحيط مجرد صحراء رملية مسطحة لا معالم لها. حتى أتت اختراعات الحرب العالمية الثانية (مثل أجهزة السونار) لتكشف المفاجأة المدوية! قاع المحيط مليء بالسلاسل الجبلية البركانية الشاهقة، والوديان العميقة جداً. وكأنها مصنع ضخم يعمل على مدار الساعة لإنتاج أراضٍ جديدة للقشرة الأرضية!
      </StoryBox>

      <ConceptBox title="استكشاف قاع المحيط واختراع السونار" icon={Navigation}>
        <p className="text-lg">استخدم العلماء تقنية <strong>السبر الصوتي (Sonar)</strong> لحساب عمق المحيطات عن طريق إرسال موجات صوتية وقياس الزمن اللازم لارتدادها عن القاع.</p>
        <p className="mt-4 text-sky-800 font-bold text-xl">بفضل السونار تم اكتشاف مظاهر هائلة:</p>
        <ul className="list-disc list-inside space-y-3 mt-3 mb-4 text-lg">
            <li><strong>ظَهْر المحيط (Ocean Ridge):</strong> سلسلة جبلية بركانية ضخمة وطويلة جداً تمتد في وسط قيعان المحيطات (يوجد في وسطها وادٍ عميق يسمى الوادي المتصدع).</li>
            <li><strong>الأخاديد البحرية (Trenches):</strong> وديان ضيقة وطويلة شديدة العمق تمثل حواف المحيطات! (مثل أخدود ماريانا بعمق 11 كم).</li>
        </ul>
      </ConceptBox>

      <ConceptBox title="فرضية توسع قاع المحيط" icon={Anchor}>
        <p className="text-gray-600 mb-4 text-lg">في الستينيات، قدم العالم <strong>(هاري هس - Harry Hess)</strong> فرضيته الجريئة التي كانت بمثابة المفتاح السحري الذي كان ينقص فغنر!</p>
        
        <div className="bg-sky-50 border border-sky-200 rounded-xl p-6">
            <h4 className="font-bold text-sky-900 border-b border-sky-200 pb-3 mb-4 text-2xl">نص فرضية هس (Seafloor Spreading):</h4>
            <p className="text-2xl font-medium leading-relaxed text-center italic text-emerald-800">
                "تُبنى القشرة المحيطية الجديدة عند ظَهْر المحيط وتتمدد وتتسع، بينما تُستهلك وتُدمر القشرة المحيطية الأقدم عند الأخاديد البحرية لتعود إلى باطن الأرض."
            </p>
        </div>

        <h4 className="font-bold mt-8 mb-4 text-rose-800 text-2xl">الآلية الميكانيكية للتوسع:</h4>
        <ol className="list-decimal list-inside space-y-3 text-gray-800 bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-lg">
            <li>تندفع الماغما (الصهارة) اللزجة من الستار إلى الأعلى عبر الصدع في وسط "ظهر المحيط".</li>
            <li>تبرد الماغما وتتصلب بمجرد ملامستها للماء مكونة <span className="font-bold text-emerald-600">قشرة محيطية جديدة</span>.</li>
            <li>استمرار تدفق الماغما يخلق ضغطاً يدفع القشرة التي تكونت قبلها للجانبين كالحزام الناقل!</li>
            <li>في الطرف الآخر البعيد من المحيط، وبعد ملايين السنين، تصل القشرة إلى أطراف المحيط وتنزلق لأسفل داخل <strong>الأخاديد البحرية</strong> لتنصهر مجدداً داخل الستار... وهكذا تبقى كتلة وحجم الأرض ثابتاً من دون أن تكبر!</li>
        </ol>
      </ConceptBox>

      <ConceptBox title="أدلة إثبات توسع قاع المحيط" icon={Magnet}>
        <div className="bg-amber-50 p-6 rounded-xl mb-4 border border-amber-200 border-r-8">
            <h4 className="text-2xl font-bold text-amber-900 mb-3">1. عُمُر صخور قاع المحيط (The Age of Rocks):</h4>
            <p className="text-gray-800 text-lg mb-3">قامت سفينة غلومار تشالنجر بحفر عينات من قاع المحيط. وكانت النتيجة المذهلة:</p>
            <ul className="list-disc list-inside mt-2 text-amber-950 font-medium text-lg space-y-2">
                <li>الصخور الواقعة في وســـــط "ظهر المحيط" مباشرة كانت هي <strong>الأحدث عمراً</strong> (مبردة حديثاً).</li>
                <li>كلما ابتعدنا عن المركز ومشينا باتجاه حواف القارات والأخاديد، كلما <strong>زاد عمر أقدمية الصخور</strong> بشكل متماثل على الجانبين!</li>
            </ul>
        </div>
        
        <div className="bg-emerald-50 p-6 rounded-xl mb-4 border border-emerald-200 border-r-8">
            <h4 className="text-2xl font-bold text-emerald-900 mb-3">2. الأشرطة المغناطيسية (Magnetic Strips):</h4>
            <p className="text-gray-800 text-lg mb-3">يحتوي لب الأرض الخارجي السائل على حديد ونيكل متحرك يولد <strong>المجال المغناطيسي للأرض</strong>. اكتشف العلماء باستخدام أجهزة قياس المغناطيسية (Magnetometers) نمطاً مدهشاً في قاع المحيط:</p>
            <ul className="list-disc list-inside mt-2 text-emerald-950 font-medium text-lg space-y-2">
                <li>عندما تبرد الماغما في ظهر المحيط، تترتب ذرات المعادن المغناطيسية (مثل الماغنيتيت) لتطابق اتجاه المجال المغناطيسي للأرض في ذلك الوقت <strong>(المغناطيسية القديمة Paleomagnetism)</strong>.</li>
                <li>ينعكس اتجاه المجال المغناطيسي للأرض كل فترة زمنية طويلة <strong>(الانقلاب المغناطيسي)</strong>. فنجد أشرطة صخرية ذات <strong>قطبية عادية</strong> (كاليوم) وأشرطة ذات <strong>قطبية مقلوبة</strong>.</li>
                <li>تترتب هذه الأشرطة بشكل <strong>متماثل تماماً</strong> (كصورة مرآة) على جانبي ظهر المحيط من حيث العمر، العرض، والقطبية! مما يثبت أن القاع كان ينشق ويبتعد عن المركز.</li>
            </ul>
        </div>

        <div className="bg-sky-50 p-6 rounded-xl mb-4 border border-sky-200 border-r-8">
            <h4 className="text-2xl font-bold text-sky-900 mb-3">3. مكونات صخور قاع المحيط:</h4>
            <p className="text-gray-800 text-lg mb-3">استكشفت الغواصة (ألفين Alvin) قاع المحيط ووجدت أن جميع الصخور هي <strong>صخور نارية بازلتية</strong>. وتظهر على شكل وسائد تسمى <strong>(اللابة الوسائدية Pillow Lava)</strong> لأن الماغما تبرد وتتصلب بمجرد ملامستها لمياه المحيط الباردة مكونة هذا الشكل الدائري.</p>
        </div>

        <p className="text-center font-bold text-gray-600 text-base italic mt-6">
            * هذا التدرج التماثلي في عمر الصخور والأشرطة المغناطيسية أثبت رياضياً وجيولوجياً أن قاع المحيط يتم توليده من المنتصف وشطره إلى نصفين متباعدين!
        </p>
      </ConceptBox>

      <ExerciseBox 
        type="activity"
        title="التجربة (2): الانقلابات المغناطيسية وتوسع قاع المحيط (ص 92)"
        question="استناداً إلى الأنشطة المتعلقة بالأشرطة المغناطيسية وتماثلها:"
        answer={
          <div className="space-y-2">
            <p><strong>1. العلاقة بين بعد الأشرطة وعمرها:</strong> كلما زادت المسافة عن ظهر المحيط، زاد عمر الأشرطة الصخرية.</p>
            <p><strong>2. التماثل:</strong> الأنماط المغناطيسية متماثلة جداً (كصورة مرآة) على جانبي صدع ظهر المحيط في أقطابها وأعمارها وعروضها.</p>
            <p><strong>3. الاستنتاج:</strong> هذا التماثل يدل على أن الصهارة تخرج من ظهر المحيط في المركز، وتبرد محتفظة بالاتجاه المغناطيسي السائد، ثم تُدفع للجانبين بالتساوي مع خروج صهارة جديدة، مما يثبت توسع قاع المحيط.</p>
          </div>
        }
      />

      <ExerciseBox 
        type="review"
        title="مراجعة الدرس الثاني (ص 94-95)"
        question="حل أسئلة نهاية الدرس:"
        answer={
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-indigo-700 mb-1">1. تشكّل القشرة المحيطية:</h5>
              <p>تندفع الماغما من الستار إلى الأعلى عبر الصدع في وسط ظهر المحيط، وبمجرد ملامستها للماء تبرد وتتصلب مكونة قشرة محيطية جديدة تدفع القديمة للجانبين.</p>
            </div>
            <div>
              <h5 className="font-bold text-indigo-700 mb-1">2. وصف ظَهْر المحيط:</h5>
              <p>سلسلة جبلية بركانية ضخمة وطويلة تحت الماء تمتد في وسط قيعان المحيطات يوجد في وسطها وادٍ متصدع تخرج منه الماغما.</p>
            </div>
            <div>
              <h5 className="font-bold text-indigo-700 mb-1">3. مقارنة القطبية العادية والمقلوبة:</h5>
              <p><strong>العادية:</strong> اتجاه المغناطيسية في المعادن يطابق اتجاه المجال المغناطيسي الحالي للأرض، وتتميز بشدة مغناطيسية عالية (+).<br/><strong>المقلوبة:</strong> عكس اتجاه المجال الحالي، وتتميز بشدة مغناطيسية منخفضة (-).</p>
            </div>
            <div>
              <h5 className="font-bold text-indigo-700 mb-1">6. لماذا كل صخور القيعان بازلتية؟</h5>
              <p>لأنها نتجت من تبريد وتصلب الماغما المندفعة من الستار (صهارة قاعدية غنية بالحديد والمغنيسيوم) عند ملامستها لمياه المحيط.</p>
            </div>

            <div className="mt-4 pt-4 border-t border-sky-100">
                <p className="text-lg mb-2"><strong>حل دوائر الصفحة (94-95):</strong></p>
                <ol className="list-decimal list-inside space-y-2 font-medium text-lg">
                    <li>أ (أكبر عمر للصخور يكون عند ظهر المحيط) - هذه العبارة خاطئة، لأن العكس صحيح (أحدث الصخور هناك).</li>
                    <li>جـ (3) - لأن الشريط 3 على الجانب الآخر يمتلك نفس المسافة والعمر للشريط (ص).</li>
                    <li>أ (لهما العمر نفسه) - الأشرطة متناظرة ومتماثلة تماماً كصورة مرآة.</li>
                    <li>جـ (بازلتي) - صخور القشرة المحيطية بازلتية مكونة من لابة وسائدية.</li>
                    <li>د (تُبنى القشرة المحيطية الجديدة عند ظهور المحيطات، وتُستهلك الأقدم عند الأخاديد).</li>
                </ol>
            </div>
          </div>
        }
      />

    </div>
  );
}
