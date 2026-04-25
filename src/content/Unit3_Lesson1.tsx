import React from 'react';
import { StoryBox, ConceptBox, ExerciseBox, LessonHeader } from '../components/UI';
import { Map, Puzzle, XCircle } from 'lucide-react';

export default function Unit3_Lesson1() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id="u3-lesson1">
      <LessonHeader 
        number={1} 
        title="انجراف القارات (Continental Drift)" 
        objective="فهم فرضية انجراف القارات التي قدمها العالم ألفرد فغنر، والأدلة الداعمة لها، وأسباب فشلها في إقناع العلماء في وقتها."
      />

      <StoryBox>
        إذا نظرت إلى خريطة العالم، وتأملت الساحل الشرقي لأمريكا الجنوبية والساحل الغربي لإفريقيا... ألا تلاحظ شيئاً مدهشاً؟ إنهما يبدوان وكأنهما قطعتان من لعبة تركيب الصور (Puzzle) انطوتا عن بعضهما! هذا التطابق المذهل لم يكن صدفة بالنسبة لعالم الأرصاد الألماني <strong>"ألفرد فغنر"</strong>، الذي أطلق لأجله فرضية غيرت وجه الجيولوجيا للأبد.
      </StoryBox>

      <ConceptBox title="فرضية انجراف القارات (Continental Drift Hypothesis)" icon={Map}>
        <p className="text-lg leading-relaxed">
          في عام <strong>1912م</strong>، اقترح العالم ألفريد فغنر فرضيته التي تنص على أن: 
          <br/>
          <span className="bg-sky-100 px-4 py-2 rounded-xl font-bold text-sky-900 mx-1 block text-center my-4 text-xl border border-sky-200">
            "جميع القارات الحالية كانت تشكل في الماضي قارة عظيمة واحدة، ثم انقسمت وأخذت تتباعد ببطء شديد حتى وصلت لمواقعها الحالية."
          </span>
        </p>
        <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="flex-1 bg-amber-50 p-5 rounded-xl border border-amber-200 shadow-sm text-center">
                <h4 className="font-bold text-amber-800 text-2xl mb-3">بانغيا (Pangaea)</h4>
                <p className="text-lg">اسم القارة العظيمة الأم، وتعني باليونانية "كل اليابسة". وبدأت بالانقسام قبل حوالي <strong>200 مليون سنة (m.y)</strong>.</p>
            </div>
            <div className="flex-1 bg-sky-50 p-5 rounded-xl border border-sky-200 shadow-sm text-center">
                <h4 className="font-bold text-sky-800 text-2xl mb-3">بانثاالسا (Panthalassa)</h4>
                <p className="text-lg">اسم المحيط العظيم الوحيد الذي كان يحيط بقارة بانغيا من جميع الجهات. (ويعني كل المحيط).</p>
            </div>
        </div>
      </ConceptBox>

      <ConceptBox title="أدلة إثبات فرضية فغنر" icon={Puzzle}>
        <p className="mb-4 text-lg">قدم فغنر قوة دفاعية من 4 أدلة لإثبات صحة فرضيته للعلماء المعارضين:</p>
        
        <div className="space-y-4">
          <div className="border-r-4 border-emerald-500 bg-white p-5 rounded shadow-sm">
            <h4 className="font-bold text-emerald-800 text-xl mb-2">1. تطابق حواف القارات (Fit of Continents Edges):</h4>
            <p className="text-gray-700 text-lg">تطابق شبه مثالي بين حواف قارة إفريقيا الغربية وحواف أمريكا الجنوبية الشرقية كقطعة البازل. التآكل والحت هو ما جعل التطابق غير كامل 100%.</p>
          </div>

          <div className="border-r-4 border-amber-500 bg-white p-5 rounded shadow-sm">
            <h4 className="font-bold text-amber-800 text-xl mb-2">2. تشابه الأحافير (Matching Fossils):</h4>
            <p className="text-gray-700 text-lg">إيجاد أحفورة لزاحف صغير يعيش بالمياه العذبة يسمى <strong>الميزوسورس (Mesosaurus)</strong> في كل من أمريكا الجنوبية وإفريقيا فقط! ولا يمكن لهذا الحيوان السباحة عبر المحيط الأطلسي المالح، مما يدل على اتصال القارتين قديماً.</p>
          </div>

          <div className="border-r-4 border-indigo-500 bg-white p-5 rounded shadow-sm">
            <h4 className="font-bold text-indigo-800 text-xl mb-2">3. تشابه أنواع الصخور والتراكيب (Rock Types):</h4>
            <p className="text-gray-700 text-lg">امتداد السلاسل الجبلية بنفس العمر ونفس نوع الصخور عبر القارات. (مثل: جبال الأبلاش في أمريكا الشمالية والجبال الكالدونية في أوروبا) يبدوان كسلسلة واحدة قُطعت.</p>
          </div>

          <div className="border-r-4 border-rose-500 bg-white p-5 rounded shadow-sm">
            <h4 className="font-bold text-rose-800 text-xl mb-2">4. المناخات القديمة (Ancient Climates):</h4>
            <p className="text-gray-700 text-lg">وجود رسوبيات ومسارات جليدية أثرية في قارات حارة جداً اليوم! (مثل الهند وإفريقيا). ووجود فحم حجري (الذي يتطلب مناخاً استوائياً غابياً) في قارات متجمدة حالياً! (مثل بعض مناطق أمريكا الشمالية وأوروبا).</p>
          </div>
        </div>
      </ConceptBox>

      <ConceptBox title="الرفض المأساوي! (Rejection)" icon={XCircle}>
        <div className="bg-rose-50 border border-rose-200 p-6 rounded-xl">
            <p className="font-bold text-rose-800 mb-3 text-2xl">لماذا رفض العلماء العظماء نظرية فغنر رغم كل هذه الأدلة؟</p>
            <p className="text-gray-1000 leading-relaxed text-lg">
            السبب القاصم كان عجز فغنر عن إيجاد أو تفسير <strong>"القوة المحركة" (آلية الحركة)</strong> المقنعة التي استطاعت دفع هذه الكتلة الهائلة من اليابسة. 
            <br/><br/>
            اقترح فغنر أن القوة هي (قوة الطرد المركزي) أو (جاذبية القمر). وسخر العلماء من ذلك لأن هذه القوى أضعف بملايين المرات من أن تحرك قارة صلبة تخترق قاع المحيط الصلب! مات فغنر دون أن يرى فرضيته تُتوّج كنظرية معتمدة.
            </p>
        </div>
      </ConceptBox>

      <ExerciseBox 
        type="activity"
        title="التجربة (1): تكوين القارة العظيمة بانغيا (ص 82)"
        question="استناداً إلى الأدلة التي جمعها فغنر عن الأحافير وأنواع الصخور، كيف يمكن إعادة تركيب حواف القارات؟"
        answer={
          <div className="space-y-2">
            <p><strong>الاستنتاج:</strong> تتطابق حواف القارات (مثل أمريكا الجنوبية وإفريقيا) بشكل كبير بناءً على امتداد أنواع الصخور والأحافير المشتركة (كحزام متصل) عبر القارات، مما يدل على أنها كانت متصلة معاً كقارة واحدة (بانغيا) قبل أن تتباعد بفعل الحركات التكتونية.</p>
          </div>
        }
      />

      <ExerciseBox 
        type="review"
        title="مراجعة الدرس الأول (ص 85-86)"
        question="حل أسئلة الدرس الأول (انتقائي):"
        answer={
          <div className="space-y-4">
            <p><strong>1. نص فرضية انجراف القارات:</strong> جميع القارات كانت تشكل قارة واحدة (بانغيا) قبل 200 مليون سنة، ثم انقسمت وتباعدت.</p>
            <p><strong>2. دليل الأحافير:</strong> زاحف الميزوسورس الذي يعيش في المياه العذبة، وجوده في أمريكا وإفريقيا معاً يستحيل إلا إذا كانتا متصلتين لعدم قدرته على عبور المحيط الأطلسي المالح.</p>
            <p><strong>3. مناخ إفريقيا قبل 200 م.س:</strong> كان مناخاً بارداً جليدياً (لأنها كانت تقع بالقرب من القطب الجنوبي ضمن قارة بانغيا وقتها).</p>
            <p><strong>4. ثبات موقع الأردن الجغرافي:</strong> (خاطئة) الأردن كجزء من الصفيحة العربية لا يزال يتحرك حتى اليوم نحو الشمال مبتعداً عن إفريقيا بصدع البحر الميت التحويلي وصفيحة سيناء ومسار البحر الأحمر.</p>
            <p><strong>5. الرفض:</strong> لعدم قدرة فغنر على إثبات الآلية الفيزيائية (المحرك) التي تستطيع شق المحيطات بكتل قارية صلبة هائلة.</p>
            <div className="mt-4 pt-4 border-t border-sky-100">
                <p className="text-lg mb-2"><strong>حل دوائر الصفحة (86):</strong></p>
                <ol className="list-decimal list-inside space-y-2 font-medium text-lg">
                    <li>أ (ستزداد بعد 35 عام بمقدار 175 سم) لأن 35 × 0.5 = 17.5 سم = 175 ملم. الإجابة (أ. بمقدار 175 سم) حسب خيارات الكتاب.</li>
                    <li>جـ (جانبي) صدع البحر الميت تحويلي جانبي.</li>
                    <li>جـ (الجبال الكالدونية) تتطابق مع جبال الأبلاش.</li>
                    <li>جـ (عدم قدرة فغنر على تفسير الآلية والقوى المسببة لحركتها).</li>
                </ol>
            </div>
          </div>
        }
      />
    </div>
  );
}
