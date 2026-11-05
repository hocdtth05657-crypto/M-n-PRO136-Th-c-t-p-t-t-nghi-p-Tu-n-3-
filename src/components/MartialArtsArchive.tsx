import { useState } from 'react';
import { MARTIAL_FORMS_DATA, MartialForm } from '../data/heritageData';
import { ASSET_IMAGES } from '../assets/imagePaths';

export function MartialArtsArchive() {
  const [activeForm, setActiveForm] = useState<MartialForm>(MARTIAL_FORMS_DATA[0]);
  const [selectedWeaponTab, setSelectedWeaponTab] = useState<number>(0);

  const traditionalWeapons = [
    { name: 'Roi Mây / Côn Dâu Rừng', role: 'Đỉnh cao roi chiến Thuận Truyền, dẻo dai khó gãy, công thủ toàn diện.' },
    { name: 'Song Loan Kiếm', role: 'Vũ khí uyển chuyển của các nữ tướng Tây Sơn (Đô đốc Bùi Thị Xuân).' },
    { name: 'Siêu Đại Đao', role: 'Nặng từ 7–15kg, chém vát bổ đỉnh phá kỵ binh đối phương.' },
    { name: 'Độc Lư Thương', role: 'Ngọn giáo một đầu điểm huyệt chớp nhoáng, biến ảo khó lường.' },
    { name: 'Song Tô / Đoản Đao', role: 'Cận chiến trong không gian hẹp, lấy ngắn chế dài cực kỳ hiểm hóc.' },
    { name: 'Đinh Ba / Cào Sắt', role: 'Binh khí nông dân cải biến, chuyên khống chế gươm giáo đối phương.' }
  ];

  return (
    <section id="vo-co-truyen" className="py-12 border-b border-stone-200 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-sans mb-1">
            Võ Học Tây Sơn &middot; Di Sản Võ Thuật Dân Tộc
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-stone-900">
            Kho Quyền Thảo, Phú Võ &amp; Thập Bát Ban Binh Khí
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Người Bình Định xưa truyền khẩu các thế đánh bằng thơ ca lục bát và phú song thất lục bát.
            Học quyền là học đạo lý làm người, rèn luyện thân thể và bảo vệ non sông.
          </p>
        </div>

        {/* Martial Forms Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Form Selector Rail */}
          <div className="lg:col-span-4 bg-white border border-stone-300 divide-y divide-stone-200">
            <div className="p-3 bg-[#EFE8DE] text-xs font-semibold uppercase tracking-wider text-stone-800">
              Các bài thảo quyền chuẩn mực ({MARTIAL_FORMS_DATA.length})
            </div>
            
            {MARTIAL_FORMS_DATA.map((form) => {
              const isSelected = activeForm.id === form.id;
              return (
                <button
                  key={form.id}
                  onClick={() => setActiveForm(form)}
                  className={`w-full text-left p-4 transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#F7F2EA] border-l-3 border-amber-900'
                      : 'hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span className="font-medium text-stone-700">{form.weaponType}</span>
                    <span className="font-mono">{form.posturesCount} thế</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-stone-900">
                    {form.name}
                  </h4>
                  <div className="text-xs text-amber-900 font-serif italic mt-0.5 line-clamp-1">
                    Khởi tạo: {form.creatorOrOrigin}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center/Right: Comprehensive Deep Dive of Active Form */}
          <div className="lg:col-span-8 bg-white border border-stone-300 p-6 sm:p-8 shadow-sm">
            
            {/* Form Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4 mb-6">
              <div>
                <span className="text-xs font-mono uppercase text-amber-900 bg-amber-50 px-2 py-0.5 border border-amber-200">
                  {activeForm.weaponType} &middot; {activeForm.posturesCount} Đòn thế liên hoàn
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
                  {activeForm.name}
                </h3>
              </div>
              <div className="text-right text-xs text-stone-500 font-mono">
                <div>Niên đại: <strong className="text-stone-800">{activeForm.era}</strong></div>
                <div>Lò võ bảo tồn: <strong className="text-stone-800">{activeForm.representedSchool}</strong></div>
              </div>
            </div>

            {/* Classical Verse Reader (Thảo Bộ Phú Võ Khẩu Quyết) */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-stone-500 mb-2 font-sans">
                Lời ca khẩu quyết truyền khẩu (Thơ Nôm &amp; Dịch giải)
              </div>
              <div className="p-5 bg-[#FAF7F2] border border-stone-300/80 text-stone-800 font-serif text-sm sm:text-base leading-relaxed space-y-2">
                {activeForm.verseIntro.map((line, idx) => (
                  <p key={idx} className={line.startsWith('Dịch') ? 'text-xs sm:text-sm text-stone-600 italic font-sans pt-1 border-t border-stone-200/60' : 'font-medium'}>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Tactical Application & Philosophy */}
            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed mb-6">
              <div>
                <span className="font-semibold text-stone-900 block font-sans uppercase text-xs tracking-wider mb-1">
                  Nguyên lý chiến đấu &amp; Bộ pháp:
                </span>
                <p className="text-stone-700">
                  {activeForm.meaningAndApplication}
                </p>
              </div>

              <div>
                <span className="font-semibold text-stone-900 block font-sans uppercase text-xs tracking-wider mb-1">
                  Ý nghĩa văn hóa &amp; Chuẩn hóa quốc gia:
                </span>
                <p className="text-stone-600">
                  {activeForm.significance}
                </p>
              </div>
            </div>

            {/* Bottom Insight Strip */}
            <div className="p-4 bg-[#EFE9E1] border border-stone-300 text-xs text-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>Được lưu truyền qua nhiều thế hệ võ sư đất Bình Định</span>
              <span className="font-semibold text-amber-950 font-serif">Môn phái: {activeForm.representedSchool}</span>
            </div>

          </div>

        </div>

        {/* Thập Bát Ban Binh Khí Showcase */}
        <div className="p-6 bg-white border border-stone-300">
          <div className="mb-4">
            <span className="text-xs uppercase tracking-widest text-amber-900 font-medium">
              Vũ Khí Học
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
              Thập Bát Ban Binh Khí Bình Định
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Khác với võ học phương Bắc, hệ thống binh khí Bình Định có xuất xứ từ nông cụ gắn với đời sống lam lũ
              của cư dân nông nghiệp miền Trung được tôi luyện qua các cuộc kháng chiến vệ quốc.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {traditionalWeapons.map((w, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#FAF8F5] border border-stone-200 text-xs space-y-1"
              >
                <div className="font-serif font-bold text-stone-900 text-sm flex items-center justify-between">
                  <span>{w.name}</span>
                  <span className="font-mono text-stone-400 text-xs">0{idx + 1}</span>
                </div>
                <p className="text-stone-600 leading-relaxed">{w.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
