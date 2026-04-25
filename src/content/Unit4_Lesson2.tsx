import React from 'react';
import { StoryBox, ConceptBox, ExerciseBox, LessonHeader, MathBox } from '../components/UI';
import { Activity, Microscope, Search, Radar } from 'lucide-react';

export default function Unit4_Lesson2() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id="u4-lesson2">
      <LessonHeader 
        number={2} 
        title="طرائق الاستكشاف الجيولوجي" 
        objective="معرفة كيفية التفتيش عن الثروات المعدنية المخفية باستخدام المسوح الجيوفيزيائية والجيوكيميائية كأدوات خفية."
      />

      <StoryBox>
        عزيزي الطالب، هل تعتقد أن المهندسين يحفرون الأرض عشوائياً للعثور على الذهب والحديد واليورانيوم؟ بالطبع لا! إنها عملية مكلفة وتستغرق وقتاً. لذا يبدأ العلماء بـ <strong>التنقيب (Prospecting)</strong> وهي عملية استكشاف أولية من السطح والجو، ثم ينتقلون لـ <strong>الاستكشاف (Exploration)</strong> الدقيق عبر طرق فيزيائية وكيميائية متطورة جداً للعثور على مناطق التجمع العالية للخامات.
      </StoryBox>

      <ConceptBox title="الخامات المعدنية (Ore Minerals)" icon={Microscope}>
        <p className="text-lg leading-relaxed">
          هي تجمعات معدنية توجد بأشكال وحجوم متعددة في صخور القشرة الأرضية <strong>بتراكيز تسمح باستثمارها اقتصادياً</strong>. 
          وهي إما خامات فلزية (كالذهب والحديد والنحاس) أو لافلزية (كالفوسفات والصخر الزيتي). 
          وتزخر أردننا الحبيبة بكلا النوعين!
        </p>
      </ConceptBox>

      <ConceptBox title="الاستكشاف الجيوفيزيائي (Geophysical Exploration)" icon={Radar}>
        <p className="mb-4">نستخدم فيه <strong>الخصائص الفيزيائية</strong> للصخور للتمييز بين الخام المخبأ والصخور المحيطة به. وأهم هذه الطرق:</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-sky-600 text-white">
              <tr>
                <th className="p-3 border-b border-sky-700">الخاصية/المسح</th>
                <th className="p-3 border-b border-sky-700">المادة المراد استكشافها</th>
                <th className="p-3 border-b border-sky-700">الأعماق المقيسة</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 divid-y divide-gray-200">
              <tr className="hover:bg-sky-50 transition-colors">
                <td className="p-3 font-bold text-sky-800 align-top">المسح المغناطيسي</td>
                <td className="p-3">المعادن المغناطيسية (الماغنيتيت)، والصخور فوق القاعدية الغنية بالحديد.</td>
                <td className="p-3" dir="ltr">0 - 20 km</td>
              </tr>
              <tr className="hover:bg-sky-50 transition-colors">
                <td className="p-3 font-bold text-sky-800 align-top">المسح الكهربائي والكهرومغناطيسي</td>
                <td className="p-3">الكبريتيدات، الجرافيت، والمياه المالحة في التشققات.</td>
                <td className="p-3" dir="ltr">0 - 0.01 km</td>
              </tr>
              <tr className="hover:bg-sky-50 transition-colors">
                <td className="p-3 font-bold text-sky-800 align-top">المسح الجاذبي (الكثافة)</td>
                <td className="p-3">المعادن ذات الكثافة العالية كالكبريتيدات، والباريت، والسلفايت.</td>
                <td className="p-3">عدة مئات من الأمتار</td>
              </tr>
              <tr className="hover:bg-sky-50 transition-colors">
                <td className="p-3 font-bold text-sky-800 align-top">المسح الإشعاعي</td>
                <td className="p-3">العناصر المشعة كاليورانيوم، الثوريوم، والبوتاسيوم في الفلسبار.</td>
                <td className="p-3" dir="ltr">0 - 0.30 km</td>
              </tr>
              <tr className="hover:bg-sky-50 transition-colors">
                <td className="p-3 font-bold text-sky-800 align-top">المسح الزلزالي (سرعة الموجات)</td>
                <td className="p-3">تستخدم للكبريتيدات الكتلية واكتشاف التراكيب والنفط/الغاز.</td>
                <td className="p-3" dir="ltr">0 - 10 km</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ConceptBox>

      <ConceptBox title="الاستكشاف الجيوكيميائي (Geochemical Exploration)" icon={Activity}>
        <p className="text-lg mb-3">يعتمد على جمع عينات من (الصخور، التربة، رسوبيات الأنهار، المياه الجوفية) وتحليلها <strong>كيميائياً</strong> للبحث عن تراكيز شاذة للخامات.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-emerald-50 p-4 border border-emerald-200 rounded-lg">
            <h5 className="font-bold text-emerald-800 text-xl border-b border-emerald-200 pb-2 mb-2">العتبة (Threshold) والتشتت</h5>
            <p className="text-gray-700">
              <strong>العتبة:</strong> هي القيمة التي تفصل بين التراكيز "الطبيعية العادية" والتراكيز "الشاذة" لوجود الخام.<br/><br/>
              <strong>هالات التشتت (Dispersion Halos):</strong> انتقال الخام حول المصدر الأساسي عبر التجوية والمياه الحرمائية مكوناً تدرجاً دائرياً بالتراكيز. تفيدنا كـ"دليل تتبع" ضخم يدل على مكان المركز.
            </p>
          </div>
          
          <div className="bg-rose-50 p-4 border border-rose-200 rounded-lg">
            <h5 className="font-bold text-rose-800 text-xl border-b border-rose-200 pb-2 mb-2">القيم الشاذة (Anomalies)</h5>
            <p className="text-gray-700">
              إذا حللنا العينات وصادفنا تراكيز عالية غير معتادة (أعلى من العتبة بكثير)، فهذه تسمى <strong>شذوذ جيوكيميائي موجب</strong> ويدل على وجود خام! <br/><br/>
              <strong>العناصر الدالة:</strong> بعض العناصر تكون أوضح للرصد وتدلنا على الذهب الثمين. وجود (الزئبق، أو الزرنيخ، أو النحاس) بتراكيز شاذة هو <strong>دليل</strong> غير مباشر على وجود הذهب!
            </p>
          </div>
        </div>
      </ConceptBox>

      <ExerciseBox 
        type="review"
        title="مراجعة الدرس الثاني (ص 140-141)"
        question="حل أسئلة نهاية الدرس:"
        answer={
          <div className="space-y-4">
            <div><h5 className="font-bold text-indigo-700 mb-1">1. طرائق الاستكشاف:</h5>
            <p>الاستكشاف الجيوفيزيائي (مغناطيسي، كهربائي، جاذبي، زلزالي، إشعاعي). والاستكشاف الجيوكيميائي (تحليل العينات).</p></div>
            
            <div><h5 className="font-bold text-indigo-700 mb-1">2. توضيح المفاهيم:</h5>
            <p><strong>العتبة:</strong> القيمة الفاصلة التي تتغير عندها القيم الطبيعية العادية إلى قيم شاذة.<br/>
            <strong>هالات التشتت:</strong> النمط الذي تتخذه العناصر المتشتتة والمنتشرة من مركز الخام إلى الصخور المحاذية مكونة هالة متدرجة التركيز.<br/>
            <strong>الشواذ الجيوفيزيائية:</strong> هي القيم غیر الطبيعية (الأعلى أو الأقل) الخصائص الفيزيائية الناتجة أثناء المسح وتدل على وجود خام مختلف عن بيئته.</p></div>

            <div><h5 className="font-bold text-indigo-700 mb-1">3. أفرق بين الاستكشاف والتنقيب:</h5>
            <p><strong>التنقيب (Prospecting):</strong> مرحلة أولية وسطحية وخارجية غير مفصلة لتحديد المناطق المحتملة عبر الصور الجوية والمؤشرات السطحية.<br/>
            <strong>الاستكشاف (Exploration):</strong> مرحلة لاحقة وتفصيلية متقدمة في الحقل، تركز على أخذ القراءات الفيزيائية وعينات التحليل لتقييم جدوى وتحديد أماكن تواجد الخام بدقة وعمقه وجدواه الاقتصادية.</p></div>

            <div><h5 className="font-bold text-indigo-700 mb-1">4. الشاذة الجيوفيزيائية الموجبة:</h5>
            <p>توصف بأنها موجبة إذا كانت القيمة المقاسة "أعلى وأكبر" من القيم الطبيعية للمنطقة المجاورة.</p></div>

            <div><h5 className="font-bold text-indigo-700 mb-1">5. تحليل شكل القبة الملحية (مسح جاذبي):</h5>
            <p>
            أ. <strong>أحدد:</strong> القيم الطبيعية هي الخط المستقيم المستقر (عالي)، والقيم الشاذة هي المنحنى المقعر للأسفل.<br/>
            ب. <strong>نوع الشاذة:</strong> شاذة "سالبة" (القيم انخفضت).<br/>
            ج. <strong>سبب التكون:</strong> وجود القبة الملحية ذات <strong>الكثافة المنخفضة</strong> والمقاومة مقارنة بالصخور المحيطة أدى لنقص في الجاذبية الموضعية وسجل الجهاز شذوذاً سالباً.<br/>
            د. <strong>أتوقع:</strong> نعم قد يجب حفر بئر استكشافي حقيقي في النهاية، فالمسوح الجيوفيزيائية تعطي مؤشرات قوية ولكن التأكيد بالعين المجردة وتحليل العينة جوهري لقرار التعدين النهائي.
            </p></div>

            <div className="mt-4 pt-4 border-t border-sky-100">
              <h5 className="font-bold text-sky-800 mb-2">6. حل دوائر الصفحة (141):</h5>
              <ol className="list-decimal list-inside space-y-1 font-medium text-gray-700">
                <li>جـ. الفوسفات (موجود بكثرة في الأردن وهو لافلزي).</li>
                <li>جـ. الطرق الجيوفيزيائية (لأنها في مرحلة الاستكشاف وليس التنقيب الأولي).</li>
                <li>أ. قيم موجبة طبيعية ... كلا، الخطأ في أ ب، الإجابة هي: <strong>جـ. قيم أكبر من القيم الطبيعية الموجودة في المنطقة.</strong></li>
                <li>د. عينات التربة (لأن الجيوكيميائي يدرس العينات الكيميائية كالصخور والتربة والمياه وليس الأمواج الفيزيائية).</li>
                <li>ب. الجيرية (صخور الحسا وسواقة الفوسفاتية والجيرية تحوي يورانيوم).</li>
              </ol>
            </div>
          </div>
        }
      />
    </div>
  );
}
