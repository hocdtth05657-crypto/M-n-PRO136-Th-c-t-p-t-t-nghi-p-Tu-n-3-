import { useState } from 'react';
import { ASSET_IMAGES } from '../assets/imagePaths';
import { HERO_METRICS } from '../data/heritageData';

interface HeroProps {
  onExploreArchive: () => void;
  onExploreLocalities: () => void;
  onPlaySound: () => void;
}

export function Hero({ onExploreArchive, onExploreLocalities, onPlaySound }: HeroProps) {
  const [activeVisual, setActiveVisual] = useState<'martial' | 'tuong'>('martial');

  return (
    <section className="relative pt-8 pb-12 border-b border-stone-200 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header Tagline */}
        <div className="text-xs uppercase tracking-widest text-stone-500 font-sans mb-3 flex items-center gap-2">
          <span>Di Sản Văn Hóa Quốc Gia & UNESCO</span>
          <span aria-hidden="true">·</span>
          <span>Bình Định Địa Linh Nhân Kiệt</span>
          <span aria-hidden="true">·</span>
          <span>Kho Tư Liệu Số Hóa 2026</span>
        </div>

        {/* 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Curatorial Essay & Manifesto */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 leading-[1.15] text-balance">
                Võ Cổ Truyền &amp; Hát Bội Bình Định
              </h1>

              <div className="mt-3 text-sm uppercase tracking-wider text-amber-900 font-serif italic">
                “Trai Tây Sơn ngàn dặm xông pha · Gái Tây Sơn múa roi đi quyền”
              </div>

              <div className="w-16 h-px bg-stone-300 my-5" />

              <div className="text-stone-700 leading-relaxed space-y-3.5 text-base max-w-prose">
                <p>
                  Đất Bình Định ba bước gặp người biết võ, năm bước gặp nghệ nhân hát tuồng.
                  Nơi đây đã đúc kết nên một hiện tượng văn hóa độc nhất vô nhị: <strong className="font-semibold text-stone-900">Võ thuật và Tuồng (Hát Bội) hòa quyện hữu cơ</strong>.
                  Võ vào tuồng thành vũ đạo uy phong lẫm liệt, tuồng mượn võ để thắp sáng cốt cách trung trinh ái quốc.
                </p>
                <p className="text-stone-600 text-sm">
                  Từ cái nôi nghĩa quân Tây Sơn Tam Kiệt, làng võ Thuận Truyền, An Vinh, An Thái
                  cho đến Học bộ đình của Hậu tổ Tuồng Đào Tấn tại Tuy Phước, hệ thống tư liệu
                  Hán Nôm, bài phú võ khẩu quyết và mặt nạ tuồng đã được số hóa lưu giữ trọn vẹn.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-6 mt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreArchive}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
              >
                Khám Phá Kho Số Tư Liệu
              </button>
              
              <button
                onClick={onExploreLocalities}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-[#EFE9E1] hover:bg-[#E5DDCF] transition-colors border border-stone-300 cursor-pointer"
              >
                Bản Đồ Lò Võ &amp; Gánh Hát
              </button>

              <button
                onClick={onPlaySound}
                className="px-4 py-2.5 text-xs font-medium text-amber-950 hover:text-amber-800 transition-colors flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
              >
                Âm vang Trống trận Tây Sơn
              </button>
            </div>
          </div>

          {/* Right Column: Visual Presentation with High-Fidelity Asset */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="relative bg-stone-900 aspect-[16/10] overflow-hidden border border-stone-300 shadow-sm">
              <img
                src={activeVisual === 'martial' ? ASSET_IMAGES.martialHero : ASSET_IMAGES.tuongPerformer}
                alt={activeVisual === 'martial' ? 'Võ sư võ cổ truyền Bình Định' : 'Nghệ nhân Hát Bội Tuồng Bình Định'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Visual Mode Selector Tabs */}
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm p-1 border border-white/15">
                <button
                  onClick={() => setActiveVisual('martial')}
                  className={`px-2.5 py-1 text-xs font-medium tracking-wide transition-colors ${
                    activeVisual === 'martial'
                      ? 'bg-amber-900 text-white'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Võ Cổ Truyền
                </button>
                <button
                  onClick={() => setActiveVisual('tuong')}
                  className={`px-2.5 py-1 text-xs font-medium tracking-wide transition-colors ${
                    activeVisual === 'tuong'
                      ? 'bg-amber-900 text-white'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Hát Bội (Tuồng)
                </button>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="text-[11px] uppercase tracking-widest text-amber-300 font-sans">
                  {activeVisual === 'martial' ? 'Tư liệu hình ảnh: Võ đường Tây Sơn' : 'Tư liệu hình ảnh: Sân khấu tuồng truyền thống'}
                </div>
                <div className="font-serif text-sm sm:text-base text-stone-100 mt-0.5">
                  {activeVisual === 'martial'
                    ? 'Thế tấn Roi dâu Thuận Truyền và bài thảo quyền tại sân gạch cổ truyền.'
                    : 'Nghệ nhân tuồng trong mão giáp mãng xà, điểm mặt trung dũng và đao thép khai trường.'}
                </div>
              </div>
            </div>

            {/* Sub-strip archival note */}
            <div className="text-xs font-serif text-stone-500 italic mt-2.5 flex items-center justify-between">
              <span>Hình 1 &middot; Ghi nhận hiện trường di sản tại Tây Sơn &amp; Tuy Phước</span>
              <span>Bảo tàng Quang Trung &amp; Nhà hát Đào Tấn</span>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column KPI Metric Strip below split */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-8 border-t border-stone-200">
          {HERO_METRICS.map((kpi, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 tabular-nums">
                {kpi.value}
              </div>
              <div className="text-xs font-medium text-amber-950 uppercase tracking-wider">
                {kpi.label}
              </div>
              <div className="text-xs text-stone-500 leading-normal">
                {kpi.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
