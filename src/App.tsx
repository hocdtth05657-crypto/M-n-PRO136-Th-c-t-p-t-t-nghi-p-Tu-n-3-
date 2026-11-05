import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LocalityExplorer } from './components/LocalityExplorer';
import { ArchiveRepository } from './components/ArchiveRepository';
import { MartialArtsArchive } from './components/MartialArtsArchive';
import { TuongMaskExplorer } from './components/TuongMaskExplorer';
import { SoundHeritage } from './components/SoundHeritage';
import { CommunityHub } from './components/CommunityHub';
import { AIHeritageScholar } from './components/AIHeritageScholar';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('tong-quan');
  const [isScholarOpen, setIsScholarOpen] = useState<boolean>(false);
  const [archiveDistrictFilter, setArchiveDistrictFilter] = useState<string>('Tất cả');

  const handleSelectDocumentForLocality = (district: string) => {
    setArchiveDistrictFilter(district);
    setActiveTab('so-tu-lieu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSound = () => {
    const el = document.getElementById('sound-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('tong-quan');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-amber-900 selection:text-white">
      {/* 3-Zone Top Navigation Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenContribute={() => {
          setActiveTab('cong-dong');
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* TAB: TỔNG QUAN (All-in-one curated flow) */}
        {activeTab === 'tong-quan' && (
          <div>
            <Hero
              onExploreArchive={() => {
                setActiveTab('so-tu-lieu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreLocalities={() => {
                setActiveTab('dia-phuong');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onPlaySound={handleScrollToSound}
            />

            {/* Sound Heritage Banner */}
            <div id="sound-section">
              <SoundHeritage />
            </div>

            {/* Quick Access Grid / Overview of the 4 Pillars */}
            <section className="py-12 border-b border-stone-200 bg-[#FAF8F5]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-xs uppercase tracking-widest text-stone-500 font-sans">
                    Cấu Trúc Di Sản
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                    Bốn Trụ Cột Văn Hiến Bình Định
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-2">
                    Khám phá chi tiết từng phân hệ từ kho quyền thảo Tây Sơn đến nghệ thuật sân khấu Đào Tấn
                    và các làng nghề văn võ cụ thể.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Card 1 */}
                  <div
                    onClick={() => {
                      setActiveTab('vo-co-truyen');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-6 bg-white border border-stone-300 hover:border-amber-900 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-mono text-amber-900 font-semibold mb-2">
                        01 / VÕ HỌC
                      </div>
                      <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                        Võ Cổ Truyền Tây Sơn
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed mb-4">
                        Khảo cứu các bài quyền thảo: Hùng Kê Quyền, Ngọc Trản, Bạch Hổ và thập bát ban binh khí roi mây, siêu đao.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-stone-900 flex items-center gap-1">
                      Xem Quyền Thảo &rarr;
                    </span>
                  </div>

                  {/* Card 2 */}
                  <div
                    onClick={() => {
                      setActiveTab('hat-boi');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-6 bg-white border border-stone-300 hover:border-amber-900 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-mono text-amber-900 font-semibold mb-2">
                        02 / HÁT BỘI
                      </div>
                      <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                        Hát Bội (Tuồng Đào Tấn)
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed mb-4">
                        Nghệ thuật điểm mặt nạ tuồng (mặt đỏ, mặt mốc, mặt rằn) và các vở tuồng kinh điển Hộ Sanh Đàn, Sơn Hậu.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-stone-900 flex items-center gap-1">
                      Khám Phá Mặt Nạ &rarr;
                    </span>
                  </div>

                  {/* Card 3 */}
                  <div
                    onClick={() => {
                      setActiveTab('dia-phuong');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-6 bg-white border border-stone-300 hover:border-amber-900 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-mono text-amber-900 font-semibold mb-2">
                        03 / ĐỊA PHƯƠNG
                      </div>
                      <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                        Địa Phương &amp; Lò Võ Cụ Thể
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed mb-4">
                        Bản đồ sông Côn kết nối Làng võ Thuận Truyền, An Vinh, An Thái, Chùa Long Phước và Học bộ đình Tuy Phước.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-stone-900 flex items-center gap-1">
                      Mở Bản Đồ Lò Võ &rarr;
                    </span>
                  </div>

                  {/* Card 4 */}
                  <div
                    onClick={() => {
                      setActiveTab('so-tu-lieu');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-6 bg-white border border-stone-300 hover:border-amber-900 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-mono text-amber-900 font-semibold mb-2">
                        04 / LƯU TRỮ
                      </div>
                      <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                        Kho Số Tư Liệu Hán Nôm
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed mb-4">
                        Hệ thống mã BD-VT &amp; BD-HB với bản chép tay, khẩu quyết, mộc bản và ghi âm giọng hát tuồng cổ chuẩn hóa.
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-stone-900 flex items-center gap-1">
                      Tra Cứu Mã Số &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Locality Showcase Preview on Home */}
            <LocalityExplorer onSelectDocumentForLocality={handleSelectDocumentForLocality} />

            {/* Archive Preview on Home */}
            <ArchiveRepository initialDistrictFilter={archiveDistrictFilter} />

            {/* Floating Quick Scholar Button */}
            <div className="fixed bottom-6 right-6 z-30">
              <button
                onClick={() => setIsScholarOpen(true)}
                className="px-4 py-2.5 bg-amber-900 hover:bg-amber-800 text-white font-medium text-xs tracking-wider uppercase shadow-lg border border-amber-950 flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95"
              >
                <span>Học Giả Di Sản</span>
                <span className="text-amber-200">&rarr;</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB: VÕ CỔ TRUYỀN */}
        {activeTab === 'vo-co-truyen' && (
          <div>
            <div className="bg-[#EFE8DE] border-b border-stone-300 py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-stone-600 font-sans">
                  Chuyên Đề Võ Học
                </span>
                <button
                  onClick={() => setIsScholarOpen(true)}
                  className="text-xs text-amber-900 font-semibold underline underline-offset-4"
                >
                  Hỏi học giả về thế võ &rarr;
                </button>
              </div>
            </div>
            <MartialArtsArchive />
            <SoundHeritage />
          </div>
        )}

        {/* TAB: HÁT BỘI (TUỒNG) */}
        {activeTab === 'hat-boi' && (
          <div>
            <div className="bg-[#EFE8DE] border-b border-stone-300 py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-stone-600 font-sans">
                  Chuyên Đề Tuồng &middot; Sân Khấu Bác Học
                </span>
                <button
                  onClick={() => setIsScholarOpen(true)}
                  className="text-xs text-amber-900 font-semibold underline underline-offset-4"
                >
                  Hỏi học giả về mặt nạ &rarr;
                </button>
              </div>
            </div>
            <TuongMaskExplorer />
            <SoundHeritage />
          </div>
        )}

        {/* TAB: ĐỊA PHƯƠNG & LÒ VÕ */}
        {activeTab === 'dia-phuong' && (
          <div>
            <div className="bg-[#EFE8DE] border-b border-stone-300 py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-xs uppercase tracking-widest text-stone-600 font-sans">
                  Mạng Lưới Địa Lý Di Sản Bình Định
                </span>
              </div>
            </div>
            <LocalityExplorer onSelectDocumentForLocality={handleSelectDocumentForLocality} />
          </div>
        )}

        {/* TAB: SỐ TƯ LIỆU */}
        {activeTab === 'so-tu-lieu' && (
          <div>
            <div className="bg-[#EFE8DE] border-b border-stone-300 py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-stone-600 font-sans">
                  Thư Viện Số Hóa Hiện Vật &amp; Thư Tịch Cổ
                </span>
                <span className="text-xs font-mono text-stone-500">Mã chuẩn: BD-VT / BD-HB / BD-DC</span>
              </div>
            </div>
            <ArchiveRepository initialDistrictFilter={archiveDistrictFilter} />
          </div>
        )}

        {/* TAB: CỘNG ĐỒNG */}
        {activeTab === 'cong-dong' && (
          <div>
            <div className="bg-[#EFE8DE] border-b border-stone-300 py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-xs uppercase tracking-widest text-stone-600 font-sans">
                  Cộng Đồng Võ Lâm &amp; Nghệ Nhân Tuồng Bình Định
                </span>
              </div>
            </div>
            <CommunityHub />
          </div>
        )}
      </main>

      {/* AI Cultural Scholar Modal */}
      <AIHeritageScholar
        isOpen={isScholarOpen}
        onClose={() => setIsScholarOpen(false)}
      />

      {/* Curatorial Restrained Footer */}
      <Footer
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenScholar={() => setIsScholarOpen(true)}
      />
    </div>
  );
}
