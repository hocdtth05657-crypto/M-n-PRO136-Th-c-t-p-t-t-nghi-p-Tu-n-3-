interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenScholar: () => void;
}

export function Footer({ onSelectTab, onOpenScholar }: FooterProps) {
  return (
    <footer className="bg-[#1C1917] text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Pull Quote */}
        <div className="text-center max-w-2xl mx-auto pb-10 border-b border-stone-800">
          <blockquote className="font-serif italic text-lg sm:text-xl text-stone-200">
            “Đất có văn hiến mới sinh hào kiệt, người có võ đức mới giữ non sông.”
          </blockquote>
          <div className="text-xs uppercase tracking-widest text-amber-500 font-sans mt-2">
            Khẩu Quyết Truyền Đời Đất Võ Xứ Nẫu &middot; Hậu Tổ Đào Tấn
          </div>
        </div>

        {/* 3-Zone Clean Links Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-stone-800 text-xs">
          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-2">
              Văn Võ Bình Định
            </h4>
            <p className="text-stone-400 leading-relaxed max-w-sm">
              Cơ sở dữ liệu số hóa bảo tồn Võ cổ truyền và Hát Bội (Tuồng) Bình Định.
              Hợp tác bảo tồn cùng các dòng họ võ phái, nghệ nhân dân gian và cơ quan lưu trữ di sản.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-2">
              Các Hạt Nhân Di Sản
            </h4>
            <ul className="space-y-1 text-stone-400">
              <li>&bull; Làng võ Thuận Truyền &middot; Roi Hồ Ngư (Tây Sơn)</li>
              <li>&bull; Làng võ An Vinh &middot; Võ sư Phan Thọ (Tây Sơn)</li>
              <li>&bull; Làng võ An Thái &middot; Quyền Tàu Sáu (An Nhơn)</li>
              <li>&bull; Làng tuồng Vinh Thạnh &middot; Đào Tấn (Tuy Phước)</li>
              <li>&bull; Lò võ Chùa Long Phước &middot; Thiền võ (Tuy Phước)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-2">
              Công Cụ Tra Cứu
            </h4>
            <div className="flex flex-col gap-1.5 text-stone-400">
              <button
                onClick={() => onSelectTab('so-tu-lieu')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                &rarr; Tra cứu mã lưu trữ BD-VT &amp; BD-HB
              </button>
              <button
                onClick={() => onSelectTab('dia-phuong')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                &rarr; Sơ đồ địa lý văn võ sông Côn
              </button>
              <button
                onClick={onOpenScholar}
                className="text-left text-amber-400 hover:text-amber-300 transition-colors cursor-pointer font-medium"
              >
                &rarr; Học giả khảo cứu tri thức di sản
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <div>
            &copy; 2026 Dự Án Số Hóa Di Sản Văn Võ Bình Định. Bảo tồn di sản văn hóa phi vật thể quốc gia.
          </div>
          <div className="flex items-center gap-4">
            <span>Tây Sơn</span>
            <span>&middot;</span>
            <span>An Nhơn</span>
            <span>&middot;</span>
            <span>Tuy Phước</span>
            <span>&middot;</span>
            <span>Quy Nhơn</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
