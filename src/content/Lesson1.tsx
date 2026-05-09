import React from 'react';
import { StoryBox, ConceptBox, ExerciseBox, LessonHeader, MathBox } from '../components/UI';
import { Factory, Wind } from 'lucide-react';

export default function Lesson1() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id="lesson1">
      <LessonHeader 
        number={1} 
        title="الوقود الأحفوري وغازات الدفيئة" 
        mainIdea="ينتج كثير من غازات الدفيئة من القطاعات المختلفة، وخاصة تلك التي تعمل على احتراق الوقود الأحفوري ما يؤدي إلى تراكمها في البيئة، ما يستدعي حساب كمياتها؛ للحد من آثارها السلبية في البيئة."
        outcomes={[
          "أستنتج الفروق في انبعاثات غازات الدفيئة من قطاعات الطاقة والنقل والمياه والزراعة والصحة، وأبررها.",
          "أعدد الغازات الناتجة من عملية احتراق الوقود الأحفوري.",
          "أشرح كيفية تشكّل الغازات الناتجة من عملية احتراق الوقود الأحفوري مع معادلاتها الكيميائية.",
          "أوضح بأرقام معتمدة عالميًا كمية الوقود الأحفوري الذي يُستخدَم في المواصلات والصناعة.",
          "أحسب كميات غازات الدفيئة المنبعثة من القطاعات المختلفة.",
          "أرسم بيانيًا تزايد كميات الوقود الأحفوري المستهلك في السنوات العشر الماضية."
        ]}
      />

      <StoryBox>
        مرحباً بك في أولى محطاتنا! هل سألت نفسك يوماً كيف تتحرك السيارات، وتضاء المنازل، وتعمل المصانع الضخمة؟ السر يكمن غالباً في <strong>"الوقود الأحفوري"</strong>. لكن، هذا الصديق الذي يمنحنا الطاقة له وجهٌ آخر ينتج عنه ما نسميه <strong>"غازات الدفيئة"</strong>. في هذا الدرس، سنجيب معاً عن سؤال مهم: كيف نحسب مقدار هذا التلوث؟ وما هي القطاعات الأكثر تسبباً به؟ دعنا نكتشف ذلك!
      </StoryBox>

      <ConceptBox title="غازات الدفيئة (Greenhouse Gases)" icon={Wind}>
        <p>ارتفع تركيز غازات الدفيئة في الغلاف الجوي بشكل ملحوظ منذ الثورة الصناعية، وتُعد الأنشطة البشرية المصدر الأساسي لها. تشكل غازات الدفيئة الناتجة عن احتراق الوقود الأحفوري <strong>70% تقريباً</strong> من إجمالي الغازات الدفيئة في الجو.</p>
        <h4 className="font-bold text-sky-700 mt-4 mb-2">أبرز هذه الغازات ونسبتها تقريباً:</h4>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>ثاني أكسيد الكربون (CO2):</strong> يشكل النسبة الأكبر ويمكث طويلاً (من 200 سنة إلى آلاف السنين!).</li>
          <li><strong>الميثان (CH4):</strong> يمكث لفترة أقصر تقريباً 11.8 سنة.</li>
          <li><strong>أكسيد النيتروز (N2O)</strong> والغازات المفلورة (F-gases).</li>
        </ul>
        <h4 className="font-bold text-sky-700 mt-4 mb-2">أكثر القطاعات إنتاجاً لغازات الدفيئة:</h4>
        
        <div className="w-full bg-amber-50 border-2 border-dashed border-amber-300 rounded-lg flex flex-col items-center justify-center text-amber-700 my-4 text-center p-6">
          <span className="font-bold text-lg mb-2">الشكل (2): نسب غازات الدفيئة المنبعثة من الأنشطة البشرية بحسب القطاعات</span>
          <span className="text-sm opacity-75">(الطاقة 73.2٪، الزراعة 18.4٪، الصناعة 5.2٪، النفايات 3.2٪)</span>
        </div>

        <div className="flex flex-wrap gap-4 mt-2">
          <div className="bg-sky-100 p-3 rounded-lg flex-grow text-center"><span className="text-2xl font-bold block text-sky-700">73.2%</span> قطاع الطاقة</div>
          <div className="bg-emerald-100 p-3 rounded-lg flex-grow text-center"><span className="text-2xl font-bold block text-emerald-700">18.4%</span> الزرعة</div>
          <div className="bg-amber-100 p-3 rounded-lg flex-grow text-center"><span className="text-2xl font-bold block text-amber-700">5.2%</span> الصناعة</div>
          <div className="bg-rose-100 p-3 rounded-lg flex-grow text-center"><span className="text-2xl font-bold block text-rose-700">3.2%</span> النفايات</div>
        </div>
      </ConceptBox>

      <ConceptBox title="الغازات الناتجة من احتراق الوقود الأحفوري" icon={Factory}>
        <p>الاحتراق هو ببساطة: <strong>وقود أحفوري + أكسجين ← ثاني أكسيد الكربون + بخار ماء + طاقة</strong>.</p>
        <p className="mt-2">وعند احتراقها تنتج غازات ملوثة خطيرة:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>أكاسيد الكربون:</strong> مثل أول أكسيد الكربون (CO) السام القاتل، وثاني أكسيد الكربون (CO2). (معادلة احتراق الأوكتان تعطي CO2 وماز).</li>
          <li><strong>أكاسيد النيتروجين (NOx):</strong> تؤدي إلى تكوين الضباب الدخاني السام.</li>
          <li><strong>أكاسيد الكبريت (SOx):</strong> مثل SO2 و SO3 التي تتسبب في الهطل الحمضي الذي يدمر الصخور والمباني.</li>
        </ul>
      </ConceptBox>

      <ExerciseBox 
        type="check"
        question="لماذا يتم تكثيف بخار الماء في محطات توليد الطاقة الكهربائية التي تستخدم الفحم الحجري؟"
        answer="يُكثّف بخار الماء ليعود إلى الحالة السائلة (ماء) مرة أخرى، لكي تتم إعادة استخدامه في فرن التسخين للحصول على بخار من جديد، مما يقلل من الاستهلاك المفرط للمياه ويزيد من كفاءة المحطة."
      />

      <StoryBox title="محقق البيئة الصغير">
        بما أننا عرفنا الملوثات، كيف نحسب كميتها؟
        تستخدم الدول معادلة رياضية بسيطة لتقدير كمية انبعاثات غاز دفيئة من نشاط معين:
        <br/><br/>
        <strong className="text-2xl text-emerald-800 bg-white px-4 py-2 rounded-lg block text-center" dir="ltr">E = EF × A</strong>
        <br/>
        حيث (E) هي كمية الانبعاث، و (EF) هو معامل الانبعاث، و (A) هي كمية المادة المستهلكة.
        دعنا نطبق معاً!
      </StoryBox>

      <ExerciseBox 
        type="experiment"
        hasMath={true}
        title="مثال 1 (ص 17)"
        question="إذا علمت أن معامل انبعاث غاز ثاني أكسيد الكربون (CO2) الناتج من احتراق الديزل يساوي 2.68 kg CO2/L، فما كمية غاز ثاني أكسيد الكربون بوحدة (kg) المنبعثة من احتراق 1000 L من الديزل؟"
        answer={
           <>
            <MathBox>
              E = EF × A<br/>
              = 2.68 × 1000<br/>
              = 2680 kg
            </MathBox>
           </>
        }
      />

      <ExerciseBox 
        type="experiment"
        hasMath={true}
        title="مثال 2 (ص 17)"
        question="إذا علمت أن معامل انبعاث غاز الميثان (CH4) الناتج من روث الأبقار يساوي 100 kg من الميثان لكل بقرة سنوياً، فما كمية غاز الميثان المنبعثة من روث 50 بقرة؟"
        answer={
           <>
            <MathBox>
              E = EF × A<br/>
              = 100 × 50<br/>
              = 5000 kg
            </MathBox>
           </>
        }
      />

      <ExerciseBox 
        hasMath={true}
        question="تمرين (ص 17): تحتوي مزرعة أغنام على 1200 رأس من الغنم. إذا علمت أن معامل انبعاث الميثان (CH4) من روث الغنم الواحد يساوي 15 kg سنوياً، فما كمية غاز الميثان المنبعثة في السنة؟"
        answer={
           <>
            <p className="mb-2"><strong>المعطيات:</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>كمية المادة (عدد الأغنام) <span dir="ltr">A = 1200</span></li>
              <li>معامل الانبعاث <span dir="ltr">EF = 15 kg/head</span></li>
            </ul>
            <MathBox>
              E = EF × A<br/>
              E = 15 × 1200<br/>
              E = 18,000 kg
            </MathBox>
           </>
        }
      />

      <ConceptBox title="مكافئ ثاني أكسيد الكربون (CO2e)">
        <p>لأن الغازات الدفيئة تختلف في فداحة حبسها للحرارة، ابتكر العلماء مقياساً يوحدها جميعاً لمقارنتها بغاز CO2. سُمي هذا المقياس: <strong>القدرة على إحداث الاحترار العالمي (GWP)</strong>. فمثلاً، غاز الميثان (GWP=21) أي أنه أقوى بـ 21 مرة من CO2 في حبس الحرارة!</p>
        <MathBox>CO2e = GWP × E</MathBox>
      </ConceptBox>

      <ExerciseBox 
        type="experiment"
        hasMath={true}
        title="مثال 3 (ص 19)"
        question="استهلكت إحدى الشركات 20000 L من الديزل لتشغيل مولدات الطوارئ الخاصة بها. إذا نتج من احتراق مادة الديزل: 50000 kg من ثاني أكسيد الكربون، و 480 g من غاز الميثان، و 150 g من أكسيد النيتروجين، وإذا علمت أن إمكانية إحداث الاحترار العالمي لكل من CO2 و CH4 و N2O هي على التوالي 1 و 27 و 273، فأجد مجموع انبعاثات مكافئ ثاني أكسيد الكربون بوحدة الكيلوغرام (kg)."
        answer={
           <>
            <MathBox>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-bold opacity-75 mb-1">CO2e (CO2) = GWP × E</p>
                  = 1 × 50000<br/>
                  = 50000 kg
                </div>
                <div>
                  <p className="text-sm font-bold opacity-75 mb-1">CO2e (CH4) = GWP × E</p>
                  = 27 × 480<br/>
                  = 12960 g = 12.96 kg
                </div>
                <div>
                  <p className="text-sm font-bold opacity-75 mb-1">CO2e (N2O) = GWP × E</p>
                  = 273 × 150<br/>
                  = 40950 g = 40.95 kg
                </div>
                <div className="pt-2 border-t border-sky-100">
                  <p className="text-sm font-bold opacity-75 mb-1">مجموع مكافئات ثاني أكسيد الكربون (Total):</p>
                  CO2e (total) = CO2e (CO2) + CO2e (CH4) + CO2e (N2O)<br/>
                  = 50000 + 12.96 + 40.95 = 50053.91 kg
                </div>
              </div>
            </MathBox>
           </>
        }
      />

      <ExerciseBox 
        hasMath={true}
        question="تمرين (ص 19): يُطلق مصنع 50 طناً من أكسيد النيتروز (N2O) إلى الغلاف الجوي. إذا كانت إمكانية إحداث الاحترار العالمي له تساوي 265، فما كمية مكافئ ثاني أكسيد الكربون (CO2e) المنبعثة؟"
        answer={
           <>
            <p className="mb-2"><strong>المعطيات:</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>كمية الانبعاث <span dir="ltr">E = 50 tonnes</span></li>
              <li>إمكانية الاحترار <span dir="ltr">GWP = 265</span></li>
            </ul>
            <MathBox>
              CO2e = GWP × E<br/>
              CO2e = 265 × 50<br/>
              CO2e = 13,250 tonnes
            </MathBox>
           </>
        }
      />

      <ExerciseBox 
        type="review"
        title="مراجعة الدرس الأول (ص 21)"
        question="أسئلة مراجعة الدرس الأول كاملة:"
        answer={
          <div className="space-y-6">
            <div>
              <h5 className="font-bold text-indigo-700">1. أحدد ثلاثة غازات دفيئة تنتج من احتراق الوقود الأحفوري.</h5>
              <p>ثاني أكسيد الكربون (CO2)، أكسيد النيتروز (N2O)، وأكاسيد الكبريت (SOx).</p>
            </div>
            
            <div>
              <h5 className="font-bold text-indigo-700">2. أفسر سبب استخدامه على نطاق واسع.</h5>
              <p>بسبب سهولة تخزينه ونقله من مكان إلى آخر، وسهولة تحويله من حالة إلى أخرى، ورخص ثمنه مقارنة بمصادر أخرى، وكفاءته العالية في توليد الطاقة.</p>
            </div>
            
            <div>
              <h5 className="font-bold text-indigo-700">3. أرتب غازات الدفيئة بحسب نسب كمياتها المتراكمة:</h5>
              <p dir="ltr" className="text-right">CO2 {'>'} CH4 {'>'} N2O {'>'} CH2F2</p>
            </div>
            
            <div>
              <h5 className="font-bold text-indigo-700">4. يمر الشكل نسب غازات الدفيئة:</h5>
              <p><strong>أ. أي القطاعات تنتج غاز الميثان بصورة رئيسة؟</strong> قطاع الزراعة (الماشية، الأسمدة، المخلفات).</p>
              <p><strong>ب. أستنتج أي غازات الدفيئة تنبعث من قطاع الصناعة؟</strong> غاز ثاني أكسيد الكربون (CO2) والغازات المفلورة والفريونات وغيرها.</p>
              <p><strong>ج. أقارن بين قطاعي الطاقة والزراعة:</strong> قطاع الطاقة ينتج النسبة الأكبر جداً (73.2%) وأغلبها ثاني أكسيد الكربون. قطاع الزراعة ينتج كمية أقل (18.4%) وأغلبه غاز الميثان وأكسيد النيتروز.</p>
            </div>

            <div>
              <h5 className="font-bold text-indigo-700">5. حساب مكافئ ثاني أكسيد الكربون لتبريد 75 kg من غاز CFC-11 (GWP=6230).</h5>
              <div className="hidden print:block w-full h-48 bg-white border border-dashed border-gray-300 mt-2 p-2">
                 <p className="text-gray-400 text-sm italic">مساحة مخصصة للحل... (تم نقل الإجابة لملحق المسائل)</p>
              </div>
              <div className="print:hidden">
                <MathBox>
                  CO2e = 6230 × 75<br/>
                  CO2e = 467,250 kg
                </MathBox>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-indigo-700">6. أضع دائرة حول رمز الإجابة الصحيحة:</h5>
              <ul className="list-decimal list-inside space-y-1">
                <li>(أ) 6750 kg CO2e.</li>
                <li>(ب) ثاني أكسيد الكربون.</li>
                <li>(د) أول أكسيد الكربون.</li>
                <li>(د) الكلوروفلوروكربون.</li>
                <li>(جـ) يمثل كمية انبعاثات غاز دفيئة ناتج من نشاط معين.</li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
}
