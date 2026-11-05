import { useState, useMemo } from 'react';
import { LOCALITIES_DATA, LocalityItem } from '../data/heritageData';

interface LocalityExplorerProps {
  onSelectDocumentForLocality?: (localityName: string) => void;
}

export function LocalityExplorer({ onSelectDocumentForLocality }: LocalityExplorerProps) {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Tất cả');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeLocality, setActiveLocality] = useState<LocalityItem | null>(LOCALITIES_DATA[0]);
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false);

  const districts = ['Tất cả', 'Tây Sơn', 'TX. An Nhơn', 'Tuy Phước', 'TP. Quy Nhơn'];
  const categories = ['Tất cả', 'Lò võ cổ truyền', 'Làng tuồng & Gánh hát', 'Di tích lịch sử văn võ', 'Nhà hát & Trung tâm bảo tồn'];

  const filteredLocalities = useMemo(() => {
    return LOCALITIES_DATA.filter((item) => {
      const matchDistrict = selectedDistrict === 'Tất cả' || item.district === selectedDistrict;
      const matchCategory = selectedCategory === 'Tất cả' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.exactAddress.toLowerCase().includes(q) ||
        item.masterOrFounder.toLowerCase().includes(q) ||
        item.coreTradition.toLowerCase().includes(q);

      return matchDistrict && matchCategory && matchSearch;
    });
  }, [selectedDistrict, selectedCategory, searchQuery]);

  return (
    <section id="dia-phuong" className="py-12 border-b border-stone-200 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-stone-500 font-sans mb-1">
              Bản Đồ Địa Hạt Di Sản
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-stone-900">
              Địa Phương, Lò Võ &amp; Gánh Hát Cụ Thể
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Khảo sát mạng lưới các cái nôi văn võ dọc triền sông Côn: từ cội nguồn Tây Sơn Thượng đạo,
              vương triều xưa An Nhơn đến Học bộ đình Đào Tấn tại Tuy Phước và Quy Nhơn.
            </p>
          </div>
          
          <div className="text-xs font-mono text-stone-500 tabular-nums">
            {filteredLocalities.length} / {LOCALITIES_DATA.length} ĐỊA ĐIỂM ĐÃ LẬP HỒ SƠ
          </div>
        </div>

        {/* Filter Controls: Segmented Buttons and Search */}
        <div className="space-y-3 mb-8 bg-[#F3ECE4] p-4 border border-stone-300/80">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            
            {/* District Filter Buttons */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              <span className="text-xs font-medium text-stone-500 uppercase tracking-wider mr-1.5 shrink-0">
                Huyện/TX:
              </span>
              {districts.map((dist) => (
                <button
                  key={dist}
                  onClick={() => setSelectedDistrict(dist)}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    selectedDistrict === dist
                      ? 'bg-stone-900 text-white'
                      : 'bg-white/70 text-stone-700 hover:bg-white hover:text-stone-900'
                  }`}
                >
                  {dist}
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="w-full sm:w-64">
              <input
                type="text"
                placeholder="Tìm tên làng võ, võ sư, gánh hát..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-800"
              />
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-stone-300/50">
            <span className="text-xs font-medium text-stone-500 uppercase tracking-wider mr-1.5 shrink-0">
              Phân loại:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-amber-900 text-white font-medium'
                    : 'bg-stone-200/60 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Cultural Geography Layout: Map Canvas + Selected Locality Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-stretch">
          
          {/* Interactive Geographical Schematic of Sông Côn & Binh Dinh */}
          <div className="lg:col-span-7 bg-[#EFEBE4] border border-stone-300 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-sans uppercase tracking-widest text-stone-600 font-semibold">
                  Sơ Đồ Địa Lý Văn Võ Dọc Triền Sông Côn
                </span>
                <span className="text-[11px] text-stone-500 italic">
                  Nhấp chọn điểm để đối chiếu hồ sơ
                </span>
              </div>
              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                Dòng sông Côn bắt nguồn từ non cao Tây Sơn Thượng đạo chảy về hạ lưu Tuy Phước là huyết mạch
                kết nối các võ phái lừng danh và những học bộ đình tuồng cổ truyền kỳ.
              </p>
            </div>

            {/* Stylized SVG Map Representation */}
            <div className="relative w-full aspect-[16/9] bg-[#E5DFD5] border border-stone-300/80 overflow-hidden my-2">
              <svg viewBox="0 0 800 450" className="w-full h-full select-none">
                <defs>
                  <linearGradient id="riverGrad" x1="0%" y1="30%" x2="100%" y2="80%">
                    <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#64748B" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#475569" stopOpacity="0.7" />
                  </linearGradient>
                  <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.2" />
                  </filter>
                </defs>

                {/* Mountain Ridge (Tây Sơn Thượng Đạo) */}
                <path
                  d="M 20 40 L 70 120 L 120 70 L 180 160 L 220 90 L 280 180 L 150 250 L 30 220 Z"
                  fill="#D4C8B8"
                  opacity="0.6"
                />
                <text x="50" y="80" fill="#786B59" fontSize="11" fontFamily="serif" fontStyle="italic">
                  Dãy Tây Sơn Thượng Đạo
                </text>

                {/* Sea / Đầm Thị Nại Coastline */}
                <path
                  d="M 680 0 Q 720 180 710 320 Q 700 400 800 450 L 800 0 Z"
                  fill="#CBD5E1"
                  opacity="0.5"
                />
                <text x="710" y="100" fill="#475569" fontSize="11" fontFamily="serif" fontStyle="italic">
                  Biển Đông &middot; Đầm Thị Nại
                </text>

                {/* Sông Côn (Huyết mạch Võ học & Tuồng) */}
                <path
                  d="M 80 190 Q 220 220 330 250 T 480 270 T 630 310 Q 690 320 710 330"
                  fill="none"
                  stroke="url(#riverGrad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M 80 190 Q 220 220 330 250 T 480 270 T 630 310 Q 690 320 710 330"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.6"
                />
                <text x="340" y="240" fill="#334155" fontSize="11" fontFamily="serif" fontWeight="bold">
                  Dòng Sông Côn ~~~
                </text>

                {/* Region Zones Labeling */}
                <text x="140" y="320" fill="#78350F" fontSize="13" fontFamily="serif" fontWeight="bold">
                  [ Huyện Tây Sơn ]
                </text>
                <text x="360" y="340" fill="#78350F" fontSize="13" fontFamily="serif" fontWeight="bold">
                  [ TX. An Nhơn ]
                </text>
                <text x="540" y="240" fill="#78350F" fontSize="13" fontFamily="serif" fontWeight="bold">
                  [ Tuy Phước ]
                </text>
                <text x="630" y="420" fill="#78350F" fontSize="13" fontFamily="serif" fontWeight="bold">
                  [ TP. Quy Nhơn ]
                </text>

                {/* Interactive Location Nodes */}
                {LOCALITIES_DATA.map((loc, idx) => {
                  // Coordinate approximations on SVG canvas
                  const posMap: Record<string, { x: number; y: number }> = {
                    'lang-vo-thuan-truyen': { x: 120, y: 220 },
                    'lang-vo-an-vinh': { x: 180, y: 190 },
                    'bao-tang-quang-trung': { x: 150, y: 260 },
                    'lang-vo-an-thai': { x: 380, y: 280 },
                    'lo-vo-ly-xuan-hy': { x: 420, y: 230 },
                    'lang-tuong-vinh-thanh': { x: 570, y: 290 },
                    'chua-long-phuoc': { x: 590, y: 230 },
                    'nha-hat-tuong-dao-tan': { x: 670, y: 390 },
                  };

                  const pos = posMap[loc.id] || { x: 200 + idx * 60, y: 200 };
                  const isSelected = activeLocality?.id === loc.id;
                  const isTuong = loc.category.includes('tuồng') || loc.category.includes('Nhà hát');

                  return (
                    <g
                      key={loc.id}
                      className="cursor-pointer transition-transform"
                      onClick={() => setActiveLocality(loc)}
                    >
                      {/* Halo if selected */}
                      {isSelected && (
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r="16"
                          fill={isTuong ? '#DC2626' : '#B45309'}
                          opacity="0.25"
                        />
                      )}
                      
                      {/* Main Node */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={isSelected ? "9" : "7"}
                        fill={isTuong ? '#991B1B' : '#78350F'}
                        stroke="#FFF"
                        strokeWidth="2"
                        filter="url(#shadow)"
                      />

                      {/* Icon mark */}
                      <text
                        x={pos.x}
                        y={pos.y + 3.5}
                        textAnchor="middle"
                        fill="#FFF"
                        fontSize="8"
                        fontWeight="bold"
                        pointerEvents="none"
                      >
                        {isTuong ? '🎭' : '⚔️'}
                      </text>

                      {/* Label */}
                      <text
                        x={pos.x}
                        y={pos.y - 12}
                        textAnchor="middle"
                        fill={isSelected ? '#1C1917' : '#44403C'}
                        fontSize={isSelected ? "11" : "9.5"}
                        fontWeight={isSelected ? "bold" : "normal"}
                        fontFamily="sans-serif"
                        className="bg-white/80"
                      >
                        {loc.name.replace('Làng Võ ', '').replace('Làng Tuồng ', '').replace('Võ Đường ', '')}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map Legend */}
            <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-300">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#78350F]" /> Lò võ cổ truyền / Di tích võ
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#991B1B]" /> Làng tuồng &middot; Nhà hát Đào Tấn
                </span>
              </div>
              <span className="text-[11px] text-stone-500 font-mono">Trục văn hiến sông Côn</span>
            </div>
          </div>

          {/* Active Locality Profile Card */}
          {activeLocality ? (
            <div className="lg:col-span-5 bg-white border border-stone-300 p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="text-xs uppercase tracking-widest text-amber-900 font-medium mb-1">
                  Hồ Sơ Địa Điểm &middot; {activeLocality.district}
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  {activeLocality.name}
                </h3>
                <div className="text-xs text-stone-500 font-mono mt-1 mb-4 flex items-center gap-2">
                  <span>Khởi lập: {activeLocality.establishedYear}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>Tọa độ: {activeLocality.coordinatesLabel}</span>
                </div>

                <div className="space-y-3.5 text-xs text-stone-700 leading-relaxed">
                  <div>
                    <span className="font-semibold text-stone-900 block">Địa chỉ cụ thể:</span>
                    <span className="text-stone-600">{activeLocality.exactAddress}</span>
                  </div>

                  <div>
                    <span className="font-semibold text-stone-900 block">Bậc tiền bối / Sáng lập dòng phái:</span>
                    <span className="text-stone-800 font-medium">{activeLocality.masterOrFounder}</span>
                  </div>

                  <div>
                    <span className="font-semibold text-stone-900 block">Cội nguồn &amp; Lịch sử truyền thừa:</span>
                    <p className="text-stone-600 mt-0.5 line-clamp-4">{activeLocality.lineageHistory}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-stone-900 block">Thế võ / Vở tuồng / Tuyệt kỹ bảo tồn:</span>
                    <p className="text-amber-950 font-serif italic mt-0.5">{activeLocality.coreTradition}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-stone-900 block mb-1">Hiện vật &amp; Di cảo lưu giữ:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-stone-600">
                      {activeLocality.preservedArtifacts.map((art, idx) => (
                        <li key={idx}>{art}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs font-medium text-stone-700">
                  Tình trạng: <strong className="text-stone-900">{activeLocality.status}</strong>
                </span>

                <button
                  onClick={() => setShowDetailModal(true)}
                  className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Xem Toàn Bộ Ký Sự
                </button>
              </div>
            </div>
          ) : (
            <div className="lg:col-span-5 bg-white border border-stone-300 p-8 flex items-center justify-center text-stone-500 text-sm">
              Chọn một địa điểm để xem hồ sơ lưu trữ chi tiết.
            </div>
          )}

        </div>

        {/* Directory Grid of All Filtered Localities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocalities.map((item) => {
            const isSelected = activeLocality?.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveLocality(item)}
                className={`p-5 bg-white border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-amber-900 ring-1 ring-amber-900 shadow-md'
                    : 'border-stone-200 hover:border-stone-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                    <span className="font-medium text-stone-700">{item.district}</span>
                    <span className="font-mono text-[11px]">{item.establishedYear}</span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-1.5">
                    {item.name}
                  </h4>

                  <p className="text-xs text-stone-600 line-clamp-2 mb-3">
                    {item.lineageHistory}
                  </p>

                  <div className="text-xs text-amber-900 font-medium font-serif italic line-clamp-1 mb-2">
                    {item.coreTradition}
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500 truncate max-w-[170px]">{item.masterOrFounder}</span>
                  <span className="text-stone-900 font-semibold hover:underline">
                    Chi tiết &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Dossier Modal */}
      {showDetailModal && activeLocality && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FAF8F5] border border-stone-400 max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 shadow-xl">
            <div className="flex items-start justify-between border-b border-stone-300 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-stone-500 font-sans">
                  Di Tích &middot; Hồ Sơ Lưu Trữ Địa Phương
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  {activeLocality.name}
                </h3>
                <div className="text-xs text-stone-600 mt-1">
                  {activeLocality.exactAddress}
                </div>
              </div>
              <button
                onClick={() => setShowDetailModal(false)}
                className="text-stone-500 hover:text-stone-900 p-1 text-xl font-bold cursor-pointer"
                aria-label="Đóng"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4 text-sm text-stone-800 leading-relaxed">
              <div>
                <h4 className="font-serif text-base font-semibold text-stone-900">
                  Lịch Sử Khởi Dựng &amp; Bậc Tiền Bối
                </h4>
                <p className="text-stone-700 mt-1">{activeLocality.lineageHistory}</p>
                <div className="mt-2 text-xs text-stone-500">
                  Chưởng môn / Nghệ nhân tiêu biểu: <strong>{activeLocality.masterOrFounder}</strong>
                </div>
              </div>

              <div className="p-4 bg-[#EFE8DE] border border-stone-300">
                <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-amber-950 mb-1">
                  Tuyệt Kỹ &amp; Tinh Hoa Văn Võ
                </h4>
                <p className="text-stone-800 italic">{activeLocality.coreTradition}</p>
              </div>

              <div>
                <h4 className="font-serif text-base font-semibold text-stone-900 mb-1.5">
                  Hiện Vật &amp; Binh Khí / Kịch Bản Bảo Tồn
                </h4>
                <ul className="list-disc list-inside space-y-1 text-stone-700 text-xs sm:text-sm">
                  {activeLocality.preservedArtifacts.map((art, idx) => (
                    <li key={idx}>{art}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-stone-200 text-xs">
                <div>
                  <span className="text-stone-500 block">Tình trạng bảo tồn:</span>
                  <span className="font-medium text-stone-900">{activeLocality.status}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Tọa độ vệ tinh:</span>
                  <span className="font-mono text-stone-900">{activeLocality.coordinatesLabel}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-300 flex items-center justify-end gap-3">
              {onSelectDocumentForLocality && (
                <button
                  onClick={() => {
                    setShowDetailModal(false);
                    onSelectDocumentForLocality(activeLocality.district);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-stone-900 bg-stone-200 hover:bg-stone-300 transition-colors"
                >
                  Tìm Tư Liệu Thuộc Vùng Này
                </button>
              )}
              <button
                onClick={() => setShowDetailModal(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors"
              >
                Đóng Hồ Sơ
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
