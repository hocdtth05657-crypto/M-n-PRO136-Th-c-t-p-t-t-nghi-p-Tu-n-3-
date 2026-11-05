import { useState } from 'react';
import { TUONG_MASKS_DATA, TUONG_PLAYS_DATA, TuongMask, TuongPlay } from '../data/heritageData';
import { ASSET_IMAGES } from '../assets/imagePaths';

export function TuongMaskExplorer() {
  const [activeMask, setActiveMask] = useState<TuongMask>(TUONG_MASKS_DATA[0]);
  const [activePlay, setActivePlay] = useState<TuongPlay>(TUONG_PLAYS_DATA[0]);

  return (
    <section id="hat-boi" className="py-12 border-b border-stone-200 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-sans mb-1">
            Nghệ Thuật Sân Khấu Bác Học Dân Tộc
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-stone-900">
            Hát Bội Bình Định &middot; Kỹ Thuật Điểm Mặt &amp; Tuồng Đào Tấn
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Tuồng Bình Định là đỉnh cao của nghệ thuật sân khấu cổ điển Việt Nam.
            Thông qua từng đường nét cọ vẽ trên khuôn mặt, khán giả biết ngay lòng dạ trung - gian,
            thiện - ác của nhân vật trước khi cất lời ca xưng danh.
          </p>
        </div>

        {/* Section 1: Interactive Face Mask Explorer (Kỹ Thuật Điểm Mặt Tuồng) */}
        <div className="bg-white border border-stone-300 p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs font-mono uppercase text-amber-900 bg-amber-50 px-2 py-0.5 border border-amber-200">
                Mỹ Thuật Hóa Trang Cổ Truyền
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                Khám Phá Kỹ Thuật Điểm Mặt Nạ Tuồng
              </h3>
            </div>
            
            {/* Mask Selection Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {TUONG_MASKS_DATA.map((mask) => (
                <button
                  key={mask.id}
                  onClick={() => setActiveMask(mask)}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    activeMask.id === mask.id
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {mask.name.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Mask Visual + Meaning Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* SVG Mask Schematic Drawing */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-[#F5EFEB] border border-stone-300">
              <div className="w-52 h-64 relative select-none">
                <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-md">
                  <defs>
                    <radialGradient id="maskShine" cx="50%" cy="40%" r="50%">
                      <stop offset="0%" stopColor="#FFF" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#000" stopOpacity="0.15" />
                    </radialGradient>
                  </defs>

                  {/* Face base contour */}
                  <path
                    d="M 50 40 C 30 70, 20 120, 40 180 C 60 220, 140 220, 160 180 C 180 120, 170 70, 150 40 C 130 15, 70 15, 50 40 Z"
                    fill={activeMask.colorHex}
                    stroke="#1C1917"
                    strokeWidth="3"
                  />
                  <path
                    d="M 50 40 C 30 70, 20 120, 40 180 C 60 220, 140 220, 160 180 C 180 120, 170 70, 150 40 C 130 15, 70 15, 50 40 Z"
                    fill="url(#maskShine)"
                  />

                  {/* Forehead markings based on mask type */}
                  {activeMask.id.includes('ran') && (
                    <g stroke="#FFF" strokeWidth="2.5" fill="none">
                      <path d="M 80 50 Q 100 25 120 50" />
                      <path d="M 100 30 L 100 70" />
                      <path d="M 70 70 Q 100 90 130 70" />
                    </g>
                  )}
                  {activeMask.id.includes('quan-cong') && (
                    <g stroke="#FDE047" strokeWidth="2" fill="none">
                      <path d="M 90 45 Q 100 30 110 45" />
                      <path d="M 100 35 L 100 65" />
                    </g>
                  )}
                  {activeMask.id.includes('moc') && (
                    <g fill="#44403C" opacity="0.6">
                      <circle cx="85" cy="55" r="4" />
                      <circle cx="115" cy="55" r="4" />
                      <path d="M 80 65 Q 100 75 120 65" stroke="#292524" strokeWidth="2" fill="none" />
                    </g>
                  )}

                  {/* Eyebrows */}
                  <path
                    d={
                      activeMask.id.includes('quan-cong')
                        ? "M 55 85 Q 80 65 95 80"
                        : activeMask.id.includes('ran')
                        ? "M 50 75 L 75 60 L 95 85"
                        : activeMask.id.includes('moc')
                        ? "M 60 85 Q 80 88 95 85"
                        : "M 55 80 Q 75 70 95 80"
                    }
                    stroke={activeMask.id.includes('den') ? '#FFF' : '#111827'}
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d={
                      activeMask.id.includes('quan-cong')
                        ? "M 145 85 Q 120 65 105 80"
                        : activeMask.id.includes('ran')
                        ? "M 150 75 L 125 60 L 105 85"
                        : activeMask.id.includes('moc')
                        ? "M 140 85 Q 120 88 105 85"
                        : "M 145 80 Q 125 70 105 80"
                    }
                    stroke={activeMask.id.includes('den') ? '#FFF' : '#111827'}
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Eyes */}
                  <g fill="#FFF" stroke="#111827" strokeWidth="2">
                    <ellipse cx="75" cy="95" rx="14" ry="7" />
                    <ellipse cx="125" cy="95" rx="14" ry="7" />
                    <circle cx="75" cy="95" r="4.5" fill="#000" />
                    <circle cx="125" cy="95" r="4.5" fill="#000" />
                  </g>

                  {/* Eye eyeliner wings */}
                  <path d="M 60 95 L 45 90" stroke="#111827" strokeWidth="2.5" />
                  <path d="M 140 95 L 155 90" stroke="#111827" strokeWidth="2.5" />

                  {/* Nose */}
                  <path
                    d="M 100 85 L 100 135 L 90 140 Q 100 145 110 140 Z"
                    fill={activeMask.id.includes('ran') ? '#FFF' : '#E2E8F0'}
                    stroke="#111827"
                    strokeWidth="1.5"
                  />

                  {/* Mouth */}
                  <path
                    d={
                      activeMask.id.includes('moc')
                        ? "M 80 170 Q 100 160 120 168"
                        : "M 75 168 Q 100 185 125 168 Q 100 175 75 168"
                    }
                    fill="#991B1B"
                    stroke="#111827"
                    strokeWidth="2"
                  />

                  {/* Beard / Cheeks styling */}
                  {activeMask.id.includes('quan-cong') && (
                    <path
                      d="M 75 185 Q 100 240 125 185"
                      stroke="#0F172A"
                      strokeWidth="12"
                      strokeLinecap="round"
                      fill="none"
                    />
                  )}
                  {activeMask.id.includes('den') && (
                    <path
                      d="M 60 180 Q 100 235 140 180"
                      stroke="#FFF"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="4 3"
                      fill="none"
                    />
                  )}
                </svg>
              </div>

              <div className="mt-4 text-center">
                <span className="font-serif font-bold text-stone-900 text-lg block">
                  {activeMask.name}
                </span>
                <span className="text-xs text-stone-600 font-mono">
                  Sắc màu chủ đạo: {activeMask.baseColor}
                </span>
              </div>
            </div>

            {/* Mask Cultural Meaning & Psychology */}
            <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="p-4 bg-[#F8F5F0] border-l-2 border-amber-900">
                <div className="text-xs uppercase tracking-wider text-amber-950 font-medium">
                  Đặc trưng tính cách &middot; {activeMask.characterArchetype}
                </div>
                <div className="font-serif text-base sm:text-lg text-stone-900 font-semibold mt-1">
                  Nhân vật điển hình: {activeMask.exampleCharacter}
                </div>
              </div>

              <div>
                <span className="font-semibold text-stone-900 block font-sans uppercase text-xs tracking-wider mb-1">
                  Ý nghĩa đạo đức &amp; Triết lý thẩm mỹ:
                </span>
                <p className="text-stone-700">
                  {activeMask.moralSignificance}
                </p>
              </div>

              <div>
                <span className="font-semibold text-stone-900 block font-sans uppercase text-xs tracking-wider mb-1">
                  Đặc điểm họa tiết &amp; Nét vẽ:
                </span>
                <p className="text-stone-600">
                  {activeMask.facialFeatures}
                </p>
              </div>

              <div>
                <span className="font-semibold text-stone-900 block font-sans uppercase text-xs tracking-wider mb-1">
                  Bí quyết kỹ thuật pha chế bột màu:
                </span>
                <p className="text-stone-600">
                  {activeMask.techniqueNotes}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Section 2: Giao Thoa Văn & Võ (Sự Kết Hợp Giữa Võ Thuật và Tuồng) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 bg-[#FAF7F2] border border-stone-300 p-6 sm:p-8">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-900 font-medium font-sans">
              Triết Lý "Văn Võ Song Toàn"
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Võ Vào Tuồng Thành Vũ Đạo, Tuồng Mượn Võ Đúc Cốt Cách
            </h3>
            <div className="w-12 h-px bg-stone-300 my-2" />
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Các nghệ nhân tuồng Bình Định xưa hầu hết đều là những võ sĩ thâm hậu của lò võ Tây Sơn,
              An Thái, An Vinh. Khi lên sàn gỗ đình làng, các đòn thế võ thực chiến được cách điệu hóa thành:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-800 pt-1">
              <li className="flex items-start gap-2">
                <span className="font-bold text-amber-950 font-serif shrink-0">&bull; Điệu Loan Mã:</span>
                <span>Diễn viên quất roi ngựa bằng cán cờ hoặc đoản roi, kết hợp bộ tấn chữ đinh mô phỏng cảnh kỵ binh phi nước đại.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-amber-950 font-serif shrink-0">&bull; Múa Đoản Đao &amp; Siêu:</span>
                <span>Áp dụng trọn vẹn bài đao Siêu Xung Thiên và đòn chém phạt của tướng sĩ nghĩa quân.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-amber-950 font-serif shrink-0">&bull; Bộ Vó &amp; Điểm Tấn:</span>
                <span>Hạ bàn vững chãi như bàn thạch, mỗi nhịp trống chiến gõ là một thế thủ né đòn hiểm.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/11] border border-stone-300 overflow-hidden shadow-sm">
              <img
                src={ASSET_IMAGES.daoTanVillage}
                alt="Khu lưu niệm Học Bộ Đình Đào Tấn tại Vinh Thạnh"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="text-[11px] uppercase tracking-wider text-amber-300 font-mono">
                  Di tích lịch sử &middot; Vinh Thạnh, Tuy Phước
                </div>
                <div className="font-serif text-sm text-stone-100">
                  Khuôn viên Học Bộ Đình nơi Hậu tổ Đào Tấn truyền dạy nghệ thuật hát bội cách mạng.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Classical Tuong Plays Directory */}
        <div className="bg-white border border-stone-300 p-6 sm:p-8">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-sans">
              Kho Kịch Bản Kinh Điển
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
              Các Pho Tuồng Cổ Tiêu Biểu Của Đất Bình Định
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TUONG_PLAYS_DATA.map((play) => (
              <div
                key={play.id}
                onClick={() => setActivePlay(play)}
                className={`p-5 border transition-all cursor-pointer flex flex-col justify-between ${
                  activePlay.id === play.id
                    ? 'border-amber-900 ring-1 ring-amber-900 bg-[#FAF7F2]'
                    : 'border-stone-200 hover:border-stone-400 bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span className="font-medium text-stone-700">{play.genre}</span>
                    <span className="font-mono text-[11px]">{play.era.split(' ')[0]}</span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">
                    {play.title}
                  </h4>

                  <div className="text-xs text-amber-900 font-serif italic mb-2">
                    Tác giả: {play.author}
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-3 mb-3">
                    {play.synopsis}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 text-xs">
                  <span className="text-stone-500 block">Võ thuật sân khấu:</span>
                  <span className="text-stone-800 line-clamp-2 italic">{play.martialMovementIntegration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
