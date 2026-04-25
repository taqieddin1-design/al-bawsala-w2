import React from 'react';
import { StoryBox, ConceptBox, ExerciseBox, LessonHeader } from '../components/UI';
import { Hammer, ThermometerSun, Clock, Layers } from 'lucide-react';

export default function Unit2_Lesson1() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id="u2-lesson1">
      <LessonHeader 
        number={1} 
        title="تشوق الصخور (Deformation of Rocks)" 
        objective="توضيح المقصود بتشوه الصخور، وتمييز أنواع الإجهادات وتأثير العوامل المختلفة في استجابة الصخور."
      />

      <StoryBox>
        تخيل أنك تمسك بقطعة من المعجون وتضغط عليها، ماذا يحدث؟ سيتغير شكلها لتتكيف مع الضغط. هذا بالضبط ما يحدث للصخور في الطبيعة! فرغم صلابتها وقوتها، إلا أنها عندما تتعرض لقوى هائلة في باطن الأرض، فإنها إما أن تنكسر أو تنحني وتطوى. هذا التغير في شكلها أو حجمها هو ما نسميه <strong>التشوه (Deformation)</strong> والذي ينتج لنا أشكالاً مذهلة تسمى <strong>التراكيب الجيولوجية</strong>.
      </StoryBox>

      <ExerciseBox 
        type="experiment"
        title="التجربة الاستهلالية: كيف تؤثر القوى في الصخور؟ (ص 47)"
        question={
          <div className="space-y-2">
            <p>عند ثني عصا خشبية ببطء، ثم ثنيها بقوة وسرعة.. ومقارنة ذلك بثني قطعة من المعجون (الصلصال):</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>قارن بين التغير الذي حصل على العصا الخشبية في الحالتين.</li>
              <li>استنتج نوع القوة التي أثرت بها في العصا والمعجون.</li>
              <li>فسر سبب اختلاف سلوك العصا عن المعجون.</li>
            </ol>
          </div>
        }
        answer={
          <div className="space-y-3">
            <p><strong>1. المقارنة:</strong> عند الثني ببطء قد تنحني العصا قليلاً مرونة قبل الكسر، وعند الثني بقوة وسرعة تنكسر فوراً لعدم إعطاءها طاقة لتحمل الإجهاد.</p>
            <p><strong>2. نوع القوة:</strong> قوة ضغط أدت لتقوس الأطراف وانحنائها أو كسرها (إجهاد).</p>
            <p><strong>3. التفسير:</strong> العصا الخشبية مادة <strong>هشة (Brittle)</strong> تنكسر عند تجاوز قوة احتمالاتها لغياب اللدونة، بينما المعجون مادة <strong>لدنة (Ductile)</strong> تتشكل وتطوى دون أن تنكسر.</p>
            <p className="font-bold text-emerald-700 mt-2">هكذا تسلك صخور القشرة الأرضية في الطبيعة، بعضها يتكسر كالخشب (صخور هشة) وبعضها يطوى كالمعجون (صخور لدنة)!</p>
          </div>
        }
      />

      <ConceptBox title="الإجهاد (Stress) والمطاوعة (Strain)" icon={Hammer}>
        <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 space-y-3">
                <p><strong>الإجهاد (Stress):</strong> هو القوة المؤثرة في وحدة المساحة من الصخر، ويقاس بوحدة (N/m²) أي پاسكال.</p>
                <p><strong>المطاوعة (Strain):</strong> هي <u>استجابة</u> الصخر لهذا الإجهاد بالتغير الفعلي في شكله أو حجمه أو كليهما معاً.</p>
                
                <div className="bg-sky-50 border border-sky-200 p-4 rounded-lg mt-4 shadow-sm">
                <h4 className="font-bold text-sky-800 mb-2">حد المرونة (Elastic Limit):</h4>
                <p>كما للمطاط حد ينقطع بعده، للصخور "حد مرونة". قبل هذا الحد، يعود الصخر لشكله الأصلي إذا زال الإجهاد (سلوك مرن). ولكن بمجرد <strong>تجاوز حد المرونة</strong> يحدث ما يلي:</p>
                <ul className="list-disc list-inside mt-2 text-sky-900 font-medium">
                    <li><strong>الصخور الهشة:</strong> تنكسر بصورة فجائية (نقطة الكسر).</li>
                    <li><strong>الصخور اللدنة:</strong> تنثني وتتشوه مشكلة طيات دون أن تنكسر. (وقد تنكسر لاحقاً إذا زاد الإجهاد بشكل هائل جداً).</li>
                </ul>
                </div>
            </div>
            <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-xl text-center shadow-inner">
                <span className="text-6xl mb-2 block">🪨</span>
                <span className="font-bold text-gray-700">الإجهاد = السبب</span>
                <br />
                <span className="font-bold text-emerald-600">المطاوعة = النتيجة</span>
            </div>
        </div>

        <div className="w-full bg-sky-50 border-2 border-dashed border-sky-300 rounded-lg flex flex-col items-center justify-center text-sky-700 my-6 text-center p-6">
          <span className="font-bold text-lg mb-2">الشكل (2): الإجهاد والمطاوعة في الصخور الهشة واللدنة</span>
          <span className="text-sm opacity-75">(يرجى إرفاق الرسم البياني للإجهاد والمطاوعة للصخور الهشة واللدنة)</span>
        </div>

      </ConceptBox>

      <ConceptBox title="العوامل المحددة لتشوه الصخور" icon={Layers}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
            <h4 className="font-bold text-lg text-amber-800 mb-2">1. نوع الصخور:</h4>
            <p>تختلف الصخور بمطاوعتها؛ فالصخور <strong>الهشة</strong> (كالبازلت والصوان) تنكسر عند تجاوز حد المرونة مكونة التركيب المسمى "صدوع". أما الصخور <strong>اللدنة</strong> (كالصخور الطينية والغضار) فتنثني وتكوّن "طيات".</p>
            
            <div className="w-full bg-amber-100 border-2 border-dashed border-amber-300 rounded-lg flex flex-col items-center justify-center text-amber-800 mt-4 text-center p-4">
              <span className="font-bold text-md mb-1">الشكل (3): صخور رسوبية يظهر فيها التشوه الهش</span>
              <span className="text-xs opacity-75">(يرجى إرفاق صورة الصخور الرسوبية المكسرة)</span>
            </div>
          </div>

          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-lg text-indigo-800 mb-2">2. أنواع الإجهاد:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>الضغط:</strong> قوتان متعاكستان مجابهتان (تؤديان لتقصير).</li>
              <li><strong>الشد:</strong> قوتان متعاكستان متباعدتان (تؤديان لاستطالة).</li>
              <li><strong>القص:</strong> قوتان متعاكستان تنزلقان بصورة متوازية (تؤديان للتمزق).</li>
            </ul>

            <div className="w-full bg-indigo-100 border-2 border-dashed border-indigo-300 rounded-lg flex flex-col items-center justify-center text-indigo-800 mt-4 text-center p-4">
              <span className="font-bold text-md mb-1">صورة: أنواع الإجهاد (القص، الشد، الضغط)</span>
              <span className="text-xs opacity-75">(يرجى إرفاق رسم الإجهادات الثلاثة)</span>
            </div>
          </div>

          <div className="bg-rose-50 p-5 rounded-xl border border-rose-200">
            <h4 className="font-bold text-lg text-rose-800 flex items-center gap-2 mb-2">
              <ThermometerSun size={20} /> 3. درجة الحرارة:
            </h4>
            <p>الحرارة العالية (كالموجودة عميقاً في باطن الأرض أو قرب الماغما) تساهم في تعديل سلوك الصخور الهشة لتسلك <strong className="text-rose-600">سلوكاً لدناً</strong>! فتنطوي بدلاً من أن تنكسر.</p>
          </div>

          <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
            <h4 className="font-bold text-lg text-emerald-800 flex items-center gap-2 mb-2">
              <Clock size={20} /> 4. الزمن:
            </h4>
            <p>الضغط المستمر لمدد زمنية طويلة جداً يعدل سلوك الصخر الهش ليجعله يتصرف كالمواد اللدنة ويتطوى ببطء شديد دون الانكسار، حتى لو كان الإجهاد المطبق دون حد المرونة!</p>
          </div>
        </div>
      </ConceptBox>

      <ExerciseBox 
        type="activity"
        title="نشاط: أثر أنواع الإجهاد في الصخور المختلفة (ص 52)"
        question="ادرس المخطط في الكتاب ثم حدد ما هو السلوك المتوقع للصخور الهشة واللدنة عند تعرضها للضغط، الشد، أو القص؟"
        answer={
          <div className="space-y-4">
            <p><strong>عند إجهاد الضغط:</strong> الهشة تنكسر بالانضغاط (س)، واللدنة تنطوي (ل) مكونة طية متقعرة أو محدبة.</p>
            <p><strong>عند إجهاد الشد:</strong> الهشة تنكسر وتتباعد كتلها (ص)، واللدنة يتسع محيطها وينتفض باطنها ويقل سمكها بالوسط (م).</p>
            <p><strong>عند إجهاد القص:</strong> الهشة تنكسر أفقياً بالتوازي (ع)، واللدنة تلتوي وتطوى جانبياً (ن).</p>
            <div className="bg-white p-3 rounded border border-gray-200 text-center font-bold text-emerald-800">
              القاعدة الذهبية: الصخور الهشة تنتهي بكسر (صدع)، والصخور اللدنة تنتهي بتمايل (انسحاب/تطوي/طية).
            </div>
            <p>بالتالي التراكيب الناتجة من إجهاد الضغط للصخور الهشة هي: صدوع (عكسية). ולلصخور اللدنة: طيات.</p>
          </div>
        }
      />

      <ExerciseBox 
        type="review"
        title="مراجعة الدرس الأول (ص 54-55)"
        question="حل أسئلة مراجعة الدرس الأول حول الإجهادات والعوامل:"
        answer={
          <div className="space-y-5">
            <div><h5 className="font-bold text-indigo-700">1. العوامل التي يعتمد عليها تشوه الصخور:</h5>
            <p>تتمثل في: نوع الصخور، نوع الإجهاد، درجة الحرارة المحيطة، والزمن.</p></div>

            <div><h5 className="font-bold text-indigo-700">2. توضيح المفاهيم:</h5>
            <div className="pr-4 border-r-2 border-indigo-200 mt-2 space-y-2">
                <p><strong>الإجهاد:</strong> القوة المؤثرة في وحدة المساحة من الصخر استجابة للقوى.</p>
                <p><strong>المطاوعة:</strong> استجابة هذا الصخر للإجهاد بالتغير في شكله أو حجمه أو كليهما.</p>
                <p><strong>التراكيب الجيولوجية:</strong> التشوهات (كالصدوع والطيات) الحاصلة في الصخور كنتيجة لاستجابتها للقوى المتنوعة على شكل مطاوعة ثابتة.</p>
            </div>
            </div>

            <div><h5 className="font-bold text-indigo-700">3. أثر إجهاد الشد الفعلي في الصخور اللدنة:</h5>
            <p>يسبب اتساع رقعتها، وتقليل السُمك في الوسط مع انتفاخ الأطراف في الصخور دون أن تتعرض للكسر العميق.</p></div>

            <div><h5 className="font-bold text-indigo-700">4. تأثير درجة الحرارة في الصخور الهشة:</h5>
            <p>تعمل درجة الحرارة المرتفعة على تعديل الخصائص البنيوية للصخر الهش ليميل للتشوه اللدن ببطء بدلاً من الانكسار الفوري السريع.</p></div>

            <div><h5 className="font-bold text-indigo-700">5. الشكل (ص 54):</h5>
            <ul className="list-disc list-inside space-y-1">
                <li><strong>أ. نوع الإجهاد:</strong> إجهاد قص (Shear Stress).</li >
                <li><strong>ب. نوع التشوه:</strong> تشوه هش (لأن الصخر انكسر وانقسم لكتلتين).</li>
                <li><strong>ج. نوع التركيب الجيولوجي الناتج:</strong> صدع جانبي (انزياحي).</li>
            </ul>
            </div>

            <div><h5 className="font-bold text-indigo-700">6. اختيار الإجابة الصحيحة (ص 54-55):</h5>
            <ul className="list-decimal list-inside space-y-2">
              <li><strong>د.</strong> يتغير شكلها ثم تنكسر ولا تعود إلى وضعها الأصلي (تخطي حد المرونة يعطل السلوك المرن بالكامل لمادة هشة).</li>
              <li><strong>ب.</strong> عمر الصخر. (ليس معياراً فيزیائياً للتأثير، المهم وقت التعرض وتكوين المعادن).</li>
              <li><strong>أ.</strong> لا تتجاوز حد المرونة أثناء تعرضها للإجهاد. (هذا هو تعريف المرونة بالضبط).</li>
              <li><strong>ب.</strong> يتغير شكلها ولا تعود إلى وضعها الأصلي. (السلوك اللدن يحفظ الشكل المطوي ولا يرد للوراء).</li>
              <li><strong>د.</strong> عمر الصخر. (المطاوعة تعتمد على نوع الصخر ومقدار الإجهاد).</li>
            </ul></div>
          </div>
        }
      />
    </div>
  );
}
