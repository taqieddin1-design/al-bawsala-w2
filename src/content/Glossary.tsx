import React, { useState } from 'react';
import { BookMarked, Search } from 'lucide-react';
import { LessonHeader } from '../components/UI';

const glossaryData = [
  { term: 'الخريطة الكنتورية (Contour Map)', def: 'خريطة توضح تضاريس سطح الأرض بصورة مجسمة باستخدام خطوط الكنتور.' },
  { term: 'قطبية عادية (Normal Polarity)', def: 'اتجاه المغناطيسية القديمة للبلورات والصخور المتوافق مع اتجاه المجال المغناطيسي الحالي للأرض.' },
  { term: 'التأهيل البيئي (Remediation)', def: 'إزالة الخطر والمعدات من المناجم وتسوية المكان ليكون آمناً وعدم الإبقاء على ملوثات.' },
  { term: 'العتبة الجيوكيميائية (Threshold)', def: 'القيمة الفاصلة التي تفصل بين التركيز الطبيعي لعنصر كيميائي في منطقة ما والتراكيز الشاذة التي توحي بوجود خام.' },
  { term: 'الشذوذ الجيوفيزيائي (Anomaly)', def: 'قراءات قياسية لخواص فيزيائية كالموصلية أو الكثافة تكون متطرفة بشكل ملحوظ عن محيطها، مشيرة لوجود دفائن.' },
  { term: 'خطوط الكنتور (Contour Lines)', def: 'خطوط وهمية ترسم على الخريطة لتصل بين جميع النقاط التي تتساوى في ارتفاعها.' },
  { term: 'بانغيا (Pangaea)', def: 'القارة العظيمة القديمة التي تشكلت منها القارات.' },
  { term: 'الصدع (Fault)', def: 'كسر في الصخور الهشة للقشرة الأرضية ترافقه حركة انزلاق.' },
  { term: 'الطية (Fold)', def: 'تقوس أو اعوجاج في الطبقات.' },
  { term: 'المضرب (Strike)', def: 'خط أفقي يمثل امتداد الطبقة المائلة.' },
  { term: 'هالات التشتت (Dispersion Halos)', def: 'تمركز متدرج لتركيز المعادن حول المركز الأصلي للخام.' }
];

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = glossaryData.filter(item => 
    item.term.includes(searchTerm) || item.def.includes(searchTerm)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pb-20" id="glossary">
      <LessonHeader 
        number={0} 
        title="مسرد المصطلحات" 
        objective="قاموس مصطلحات الجيولوجيا."
      />

      <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100 mb-8 shadow-sm">
        <div className="flex items-center gap-3 w-full bg-white p-3 rounded-xl border border-sky-200">
          <Search className="text-sky-400" />
          <input 
            type="text" 
            placeholder="ابحث عن مصطلح أو تعريف..." 
            className="flex-grow outline-none bg-transparent text-lg font-medium text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredData.map((item, idx) => (
          <div key={idx} className="bg-white border-r-4 border-amber-500 rounded-lg p-5 shadow-sm">
            <h4 className="flex items-center gap-2 font-bold text-amber-900 text-xl border-b pb-2 mb-3">
              <BookMarked size={20} className="text-amber-500" /> 
              {item.term}
            </h4>
            <p className="text-gray-700 leading-relaxed font-medium">
              {item.def}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
