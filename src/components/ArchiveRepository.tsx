import { useState, useMemo } from 'react';
import { ARCHIVE_DOCUMENTS_DATA, ArchivalDocument } from '../data/heritageData';
import { ASSET_IMAGES } from '../assets/imagePaths';

interface ArchiveRepositoryProps {
  initialDistrictFilter?: string;
}

export function ArchiveRepository({ initialDistrictFilter }: ArchiveRepositoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [selectedEra, setSelectedEra] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDoc, setActiveDoc] = useState<ArchivalDocument>(ARCHIVE_DOCUMENTS_DATA[0]);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const categories = [
    'Tất cả',
    'Võ phái & Khẩu quyết',
    'Kịch bản Tuồng & Bản khắc',
    'Binh khí & Hiện vật',
    'Mặt nạ & Hóa trang',
    'Văn bia & Di cảo',
    'Băng ghi âm & Làn điệu'
  ];

  const eras = [
    'Tất cả',
    'Thời Tây Sơn (1778–1802)',
    'Thời Nguyễn (Thế kỷ XIX)',
    'Đầu thế kỷ XX',
    'Hiện đại (Sau 1975)'
  ];

  const filteredDocs = useMemo(() => {
    return ARCHIVE_DOCUMENTS_DATA.filter((doc) => {
      const matchCat = selectedCategory === 'Tất cả' || doc.category === selectedCategory;
      const matchEra = selectedEra === 'Tất cả' || doc.era === selectedEra;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        doc.title.toLowerCase().includes(q) ||
        doc.accessionCode.toLowerCase().includes(q) ||
        doc.originalScript.toLowerCase().includes(q) ||
        doc.districtOrigin.toLowerCase().includes(q) ||
        doc.excerptOrContent.toLowerCase().includes(q);

      return matchCat && matchEra && matchSearch;
    });
  }, [selectedCategory, selectedEra, searchQuery]);

  const handleCopyCitation = (doc: ArchivalDocument) => {
    const citation = `[Hồ sơ lưu trữ di sản Bình Định] Mã số: ${doc.accessionCode} - ${doc.title} (${doc.originalScript}). Niên đại: ${doc.era}. Nơi lưu giữ: ${doc.holderInstitution}. Xuất xứ: ${doc.districtOrigin}.`;
    navigator.clipboard.writeText(citation).then(() => {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    });
  };

  return (
    <section id="so-tu-lieu" className="py-12 border-b border-stone-200 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-stone-500 font-sans mb-1">
              Thư Viện Số Hóa Quốc Gia &middot; Di Sản Bình Định
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-stone-900">
              Kho Số Tư Liệu Hán Nôm, Hiện Vật &amp; Bản Thảo
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Hệ thống mã định danh lưu trữ số (Accession Code: BD-VT, BD-HB, BD-DC) chuẩn hóa từ các mộc bản,
              phú võ gia truyền, hiện vật binh khí và bản khắc tuồng Đào Tấn.
            </p>
          </div>

          <div className="text-xs font-mono text-stone-500 tabular-nums">
            {filteredDocs.length} / {ARCHIVE_DOCUMENTS_DATA.length} TƯ LIỆU TRONG KHO
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-3 mb-8 bg-[#F3ECE4] p-4 border border-stone-300">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            
            {/* Category Segmented Buttons */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              <span className="text-xs font-medium text-stone-500 uppercase tracking-wider mr-1.5 shrink-0">
                Thể loại:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-stone-900 text-white'
                      : 'bg-white/70 text-stone-700 hover:bg-white hover:text-stone-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="w-full sm:w-72">
              <input
                type="text"
                placeholder="Tìm mã BD-*, tên Nôm, nội dung..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-white border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-800"
              />
            </div>
          </div>

          {/* Era Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2 border-t border-stone-300/50">
            <span className="text-xs font-medium text-stone-500 uppercase tracking-wider mr-1.5 shrink-0">
              Niên đại:
            </span>
            {eras.map((era) => (
              <button
                key={era}
                onClick={() => setSelectedEra(era)}
                className={`px-2.5 py-1 text-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedEra === era
                    ? 'bg-amber-900 text-white font-medium'
                    : 'bg-stone-200/60 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {era}
              </button>
            ))}
          </div>
        </div>

        {/* Museum Accession Detail View (Pattern B) & Document Catalog List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Comprehensive Museum Accession Record */}
          <div className="lg:col-span-7 bg-white border border-stone-300 p-6 sm:p-8 shadow-sm">
            
            {/* Accession Header Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-amber-900 font-bold bg-[#F4EDE5] px-2 py-0.5 border border-stone-300">
                  {activeDoc.accessionCode}
                </span>
                <span className="text-stone-500">&middot;</span>
                <span className="text-stone-600">{activeDoc.documentType}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyCitation(activeDoc)}
                  className="px-3 py-1 text-xs text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-colors cursor-pointer"
                >
                  {copiedCode ? 'Đã sao chép trích dẫn!' : 'Sao chép trích dẫn'}
                </button>
              </div>
            </div>

            {/* Document Titles */}
            <div className="mb-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                {activeDoc.title}
              </h3>
              <div className="font-serif text-lg text-amber-900 mt-1 italic tracking-wide">
                {activeDoc.originalScript}
              </div>
            </div>

            {/* Structured Museum Accession Metadata Definition List */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-xs border-y border-stone-200 py-4 mb-6">
              <div>
                <dt className="text-stone-500 uppercase tracking-wider font-sans">Địa phương xuất xứ</dt>
                <dd className="font-medium text-stone-900 mt-0.5">{activeDoc.districtOrigin}</dd>
              </div>

              <div>
                <dt className="text-stone-500 uppercase tracking-wider font-sans">Niên đại hình thành</dt>
                <dd className="font-medium text-stone-900 mt-0.5">{activeDoc.era}</dd>
              </div>

              <div>
                <dt className="text-stone-500 uppercase tracking-wider font-sans">Đơn vị lưu giữ hiện vật gốc</dt>
                <dd className="font-medium text-stone-900 mt-0.5">{activeDoc.holderInstitution}</dd>
              </div>

              <div>
                <dt className="text-stone-500 uppercase tracking-wider font-sans">Tình trạng bảo quản</dt>
                <dd className="font-medium text-stone-900 mt-0.5">{activeDoc.condition}</dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-stone-500 uppercase tracking-wider font-sans">Quy cách vật lý &amp; Chất liệu</dt>
                <dd className="font-medium text-stone-800 mt-0.5">{activeDoc.physicalSpecifications}</dd>
              </div>
            </dl>

            {/* Excerpt / Raw Text in Classical Pull Quote */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-stone-500 mb-2 font-sans">
                Trích dẫn toàn văn tư liệu / Khẩu quyết
              </div>
              <blockquote className="p-4 bg-[#F8F5F0] border-l-2 border-amber-900 text-stone-800 font-serif italic text-sm sm:text-base leading-relaxed">
                {activeDoc.excerptOrContent}
              </blockquote>
            </div>

            {/* Translation & Notes */}
            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div>
                <span className="font-semibold text-stone-900 block font-sans uppercase text-xs tracking-wider mb-1">
                  Bản dịch nghĩa &middot; Chú thích văn bản học:
                </span>
                <p className="text-stone-700 bg-stone-50 p-3 border border-stone-200">
                  {activeDoc.translationNotes}
                </p>
              </div>

              <div>
                <span className="font-semibold text-stone-900 block font-sans uppercase text-xs tracking-wider mb-1">
                  Giá trị lịch sử &amp; Đánh giá khoa học:
                </span>
                <p className="text-stone-600">
                  {activeDoc.scholarlyAnalysis}
                </p>
              </div>
            </div>

            {/* Curatorial stamp */}
            <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 font-mono">
              <span>TRUNG TÂM LƯU TRỮ VĂN VÕ BÌNH ĐỊNH</span>
              <span>SỐ HÓA BẢO TỒN VĨNH VIỄN</span>
            </div>

          </div>

          {/* Right Column: List of All Catalog Entries + Archival Imagery */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Visual Archival Showcase Box */}
            <div className="bg-stone-900 border border-stone-300 p-4 text-white">
              <div className="relative aspect-[16/10] overflow-hidden mb-3">
                <img
                  src={ASSET_IMAGES.weaponryScroll}
                  alt="Hiện vật binh khí và bản thảo phú võ Bình Định"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs uppercase tracking-widest text-amber-400 font-sans">
                Hiện vật bảo tàng
              </div>
              <div className="font-serif text-sm text-stone-200 mt-1">
                Binh khí cổ truyền, roi dâu và bản thảo Hán Nôm thời Tây Sơn đang được lưu giữ phục vụ nghiên cứu.
              </div>
            </div>

            {/* List of Documents for Quick Selection */}
            <div className="bg-white border border-stone-300 divide-y divide-stone-200 max-h-[550px] overflow-y-auto">
              <div className="p-3 bg-[#EFE8DE] text-xs font-semibold uppercase tracking-wider text-stone-800">
                Danh mục tư liệu theo số hiệu lưu trữ ({filteredDocs.length})
              </div>

              {filteredDocs.map((doc) => {
                const isSelected = activeDoc.id === doc.id;
                return (
                  <div
                    key={doc.id}
                    onClick={() => setActiveDoc(doc)}
                    className={`p-4 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#F9F5EE] border-l-3 border-amber-900'
                        : 'hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                      <span className="font-mono text-amber-900 font-semibold">{doc.accessionCode}</span>
                      <span className="truncate max-w-[140px]">{doc.districtOrigin}</span>
                    </div>

                    <h4 className="font-serif text-sm font-bold text-stone-900 line-clamp-1">
                      {doc.title}
                    </h4>

                    <div className="text-xs text-stone-600 font-serif italic mt-0.5 line-clamp-1">
                      {doc.originalScript}
                    </div>

                    <div className="text-[11px] text-stone-500 mt-2 flex items-center justify-between">
                      <span>{doc.documentType}</span>
                      <span className="text-amber-950 font-medium">{doc.era.split(' ')[0]}</span>
                    </div>
                  </div>
                );
              })}

              {filteredDocs.length === 0 && (
                <div className="p-8 text-center text-xs text-stone-500">
                  Không tìm thấy tư liệu phù hợp với tiêu chí lọc.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
