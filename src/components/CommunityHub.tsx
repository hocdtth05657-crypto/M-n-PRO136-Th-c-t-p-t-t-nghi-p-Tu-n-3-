import { useState, useEffect } from 'react';
import { INITIAL_COMMUNITY_POSTS, CommunityContribution } from '../data/heritageData';

interface CommunityHubProps {
  onOpenContributeModal?: () => void;
}

export function CommunityHub({ onOpenContributeModal }: CommunityHubProps) {
  const [posts, setPosts] = useState<CommunityContribution[]>(() => {
    try {
      const saved = localStorage.getItem('binhdinh_community_contributions');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_COMMUNITY_POSTS;
  });

  const [authorName, setAuthorName] = useState('');
  const [locality, setLocality] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<CommunityContribution['category']>('Ký ức làng võ');
  const [content, setContent] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('binhdinh_community_contributions', JSON.stringify(posts));
    } catch {
      // ignore
    }
  }, [posts]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !title.trim() || !content.trim()) return;

    const newPost: CommunityContribution = {
      id: `post-${Date.now()}`,
      contributorName: authorName.trim(),
      locality: locality.trim() || 'Bình Định',
      title: title.trim(),
      category,
      content: content.trim(),
      dateSubmitted: new Date().toISOString().split('T')[0],
      verifiedByElder: true
    };

    setPosts([newPost, ...posts]);
    setAuthorName('');
    setLocality('');
    setTitle('');
    setContent('');
    setSubmittedSuccess(true);
    setTimeout(() => setSubmittedSuccess(false), 4000);
  };

  const festivals = [
    {
      name: 'Lễ Hội Kỷ Niệm Chiến Thắng Ngọc Hồi - Đống Đa',
      time: 'Mùng 4 & 5 tháng Giêng âm lịch',
      place: 'Bảo tàng Quang Trung, TT. Phú Phong, Tây Sơn',
      desc: 'Tái hiện hội thao võ trận, biểu diễn dàn trống trận Tây Sơn 12 chiếc, thi đấu võ đài cổ truyền.'
    },
    {
      name: 'Hội Đổ Giàn Chùa Bà An Thái',
      time: 'Rằm tháng Giêng âm lịch',
      place: 'Chùa Bà, xã Nhơn Phúc, thị xã An Nhơn',
      desc: 'Hội so tài bộ pháp võ thuật tranh cướp heo quay giữa các võ đường danh tiếng đất An Nhơn và Tây Sơn.'
    },
    {
      name: 'Lễ Giỗ Hậu Tổ Tuồng Đào Tấn',
      time: 'Rằm tháng 7 âm lịch hàng năm',
      place: 'Khu lưu niệm Đào Tấn, xã Phước Lộc, Tuy Phước',
      desc: 'Nghệ nhân, nghệ sĩ tuồng khắp ba miền hội tụ dâng hương tưởng niệm và diễn xướng các vở tuồng kinh điển.'
    },
    {
      name: 'Liên Hoan Quốc Tế Võ Cổ Truyền Việt Nam',
      time: 'Định kỳ 2 năm một lần (Mùa Hè)',
      place: 'TP. Quy Nhơn & các làng võ Tây Sơn, An Nhơn, Tuy Phước',
      desc: 'Quy tụ hơn 60 đoàn võ thuật quốc tế và hàng ngàn võ sinh về đất Tổ giao lưu, so tài binh khí và quyền thuật.'
    }
  ];

  return (
    <section id="cong-dong" className="py-12 border-b border-stone-200 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-sans mb-1">
            Cộng Đồng &middot; Ký Ức Dân Gian Sống
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-stone-900">
            Ký Ức Làng Võ, Gánh Hát &amp; Sổ Tay Di Sản
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl">
            Di sản không chỉ nằm trong sách bảo tàng mà sống trong ký ức của các vị cao niên, võ sư và người dân xứ Nẫu.
            Nơi kết nối và lưu giữ những câu chuyện truyền khẩu chưa từng ghi trên văn bản.
          </p>
        </div>

        {/* 2-Column Grid: Form + Post Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left: Contribution Submission Form */}
          <div className="lg:col-span-5 bg-white border border-stone-300 p-6 shadow-sm">
            <div className="border-b border-stone-200 pb-3 mb-4">
              <span className="text-xs uppercase tracking-widest text-amber-900 font-sans font-semibold">
                Đóng Góp Tư Liệu Mới
              </span>
              <h3 className="font-serif text-xl font-bold text-stone-900 mt-0.5">
                Ghi Nhận Ký Ức &amp; Dị Bản
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Gia đình bạn có lưu giữ câu chuyện về lò võ, gánh hát hoặc một bài thơ phú gia truyền? Hãy gửi vào đây.
              </p>
            </div>

            {submittedSuccess && (
              <div className="mb-4 p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs">
                Cảm ơn bạn! Tư liệu đã được lưu giữ vào kho ký ức cộng đồng thành công.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Họ và tên người đóng góp / Võ sư / Nghệ nhân:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Võ sư Trần Văn Nam..."
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAF8F5] border border-stone-300 text-stone-900 focus:outline-none focus:border-amber-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Địa phương cụ thể (Thôn, xã, huyện):
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Thôn An Vinh, Tây Vinh, Tây Sơn..."
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAF8F5] border border-stone-300 text-stone-900 focus:outline-none focus:border-amber-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Chủ đề di sản:
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as CommunityContribution['category'])}
                  className="w-full px-3 py-2 bg-[#FAF8F5] border border-stone-300 text-stone-900 focus:outline-none focus:border-amber-900"
                >
                  <option value="Ký ức làng võ">Ký ức làng võ</option>
                  <option value="Kỷ niệm gánh hát">Kỷ niệm gánh hát</option>
                  <option value="Dị bản thơ phú">Dị bản thơ phú võ</option>
                  <option value="Hiện vật gia đình">Hiện vật &amp; Binh khí gia đình</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Tiêu đề câu chuyện / Tư liệu:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Lời kể của ông nội về gánh tuồng Đào Tấn..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAF8F5] border border-stone-300 text-stone-900 focus:outline-none focus:border-amber-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Nội dung chi tiết (Lời ca, tích cũ, cách đánh, trải nghiệm):
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Ghi rõ chi tiết về đòn thế, câu ca, con người, bối cảnh thời gian..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-3 py-2 bg-[#FAF8F5] border border-stone-300 text-stone-900 focus:outline-none focus:border-amber-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-amber-900 hover:bg-amber-800 transition-colors shadow-sm cursor-pointer"
              >
                Lưu Vào Sổ Tay Di Sản
              </button>
            </form>
          </div>

          {/* Right: Living Memory Feed */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between p-3 bg-[#EFE8DE] text-xs font-semibold uppercase tracking-wider text-stone-800 border border-stone-300">
              <span>Sổ tay ký ức cộng đồng ({posts.length})</span>
              <span className="text-stone-500 font-mono text-[11px]">Được chứng thực</span>
            </div>

            <div className="space-y-4">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="p-6 bg-white border border-stone-300 shadow-sm transition-all hover:border-stone-400"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-amber-900">{post.category}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span className="text-stone-600">{post.locality}</span>
                    </div>
                    <span className="font-mono text-[11px]">{post.dateSubmitted}</span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                    {post.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-serif italic border-l-2 border-stone-300 pl-3.5 my-3">
                    “{post.content}”
                  </p>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-stone-600">
                      Người ghi chép: <strong className="text-stone-800">{post.contributorName}</strong>
                    </span>
                    <span className="text-stone-500 text-[11px]">
                      Chứng thực dân gian &check;
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>

        {/* Heritage Calendar & Festivals Strip */}
        <div className="bg-white border border-stone-300 p-6 sm:p-8">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-amber-900 font-medium font-sans">
              Thời Điểm Diễn Xướng &amp; Hội Ngộ
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
              Lịch Lễ Hội Văn Võ Đất Bình Định
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Những dịp lễ hội truyền thống quy tụ hàng ngàn võ sư, nghệ nhân tuồng khắp mọi miền đất nước.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {festivals.map((fest, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between text-xs space-y-2"
              >
                <div>
                  <div className="text-[11px] font-mono text-amber-900 font-bold uppercase tracking-wider mb-1">
                    {fest.time}
                  </div>
                  <h4 className="font-serif text-sm font-bold text-stone-900 leading-snug">
                    {fest.name}
                  </h4>
                  <div className="text-stone-500 italic mt-1 text-[11px]">
                    {fest.place}
                  </div>
                  <p className="text-stone-600 mt-2 leading-relaxed">
                    {fest.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
