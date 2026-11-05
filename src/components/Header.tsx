interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenContribute: () => void;
}

export function Header({ activeTab, setActiveTab, onOpenContribute }: HeaderProps) {
  const navItems = [
    { id: 'tong-quan', label: 'Tổng Quan' },
    { id: 'vo-co-truyen', label: 'Võ Cổ Truyền' },
    { id: 'hat-boi', label: 'Hát Bội (Tuồng)' },
    { id: 'dia-phuong', label: 'Địa Phương & Lò Võ' },
    { id: 'so-tu-lieu', label: 'Số Tư Liệu' },
    { id: 'cong-dong', label: 'Cộng Đồng' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark in display face, single text element */}
        <button
          onClick={() => setActiveTab('tong-quan')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-900 transition-colors whitespace-nowrap shrink-0">
            Văn Võ Bình Định
          </span>
        </button>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`whitespace-nowrap shrink-0 text-sm transition-colors cursor-pointer py-1 relative ${
                  isActive
                    ? 'text-stone-950 font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-800 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContribute}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-amber-900 hover:bg-amber-800 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-sm rounded-none border border-amber-950"
          >
            Đóng Góp Tư Liệu
          </button>
        </div>
      </div>

      {/* Mobile navigation row */}
      <div className="lg:hidden flex items-center overflow-x-auto px-4 py-2.5 border-t border-stone-200/70 gap-2 bg-[#F5EFEB]/50 no-scrollbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-3 py-1 text-xs whitespace-nowrap shrink-0 transition-colors ${
              activeTab === item.id
                ? 'bg-amber-900 text-white font-medium'
                : 'text-stone-700 hover:bg-stone-200/60'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
