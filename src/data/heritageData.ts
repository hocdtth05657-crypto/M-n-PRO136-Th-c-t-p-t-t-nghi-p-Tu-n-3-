export interface MartialForm {
  id: string;
  name: string;
  creatorOrOrigin: string;
  weaponType: 'Tay không' | 'Binh khí' | 'Roi / Côn' | 'Đao / Kiếm' | 'Thương / Kích';
  era: string;
  verseIntro: string[];
  meaningAndApplication: string;
  posturesCount: number;
  representedSchool: string;
  significance: string;
}

export interface TuongPlay {
  id: string;
  title: string;
  author: string;
  genre: 'Tuồng văn' | 'Tuồng võ' | 'Tuồng hài dân gian';
  era: string;
  synopsis: string;
  notableCharacters: string[];
  martialMovementIntegration: string;
  famousExcerpts: string;
}

export interface TuongMask {
  id: string;
  name: string;
  characterArchetype: string;
  exampleCharacter: string;
  baseColor: string;
  colorHex: string;
  facialFeatures: string;
  moralSignificance: string;
  symbolism: string;
  techniqueNotes: string;
}

export interface LocalityItem {
  id: string;
  name: string;
  district: 'Tây Sơn' | 'TX. An Nhơn' | 'Tuy Phước' | 'TP. Quy Nhơn' | 'Phù Cát' | 'Hoài Nhơn';
  exactAddress: string;
  category: 'Lò võ cổ truyền' | 'Làng tuồng & Gánh hát' | 'Di tích lịch sử văn võ' | 'Nhà hát & Trung tâm bảo tồn';
  masterOrFounder: string;
  lineageHistory: string;
  coreTradition: string;
  preservedArtifacts: string[];
  status: 'Đang hoạt động & truyền dạy' | 'Di tích quốc gia' | 'Nhà lưu niệm' | 'Không gian diễn xướng';
  coordinatesLabel: string;
  establishedYear: string;
}

export interface ArchivalDocument {
  id: string;
  accessionCode: string; // e.g. BD-VT-001, BD-HB-102
  title: string;
  originalScript: string; // Hán Nôm or Quốc ngữ
  category: 'Võ phái & Khẩu quyết' | 'Kịch bản Tuồng & Bản khắc' | 'Binh khí & Hiện vật' | 'Mặt nạ & Hóa trang' | 'Văn bia & Di cảo' | 'Băng ghi âm & Làn điệu';
  districtOrigin: string;
  era: 'Thời Tây Sơn (1778–1802)' | 'Thời Nguyễn (Thế kỷ XIX)' | 'Đầu thế kỷ XX' | 'Hiện đại (Sau 1975)';
  holderInstitution: string;
  documentType: 'Bản thảo chép tay' | 'Bản khắc gỗ / Bản dập văn bia' | 'Hiện vật bảo tàng' | 'Bản ghi âm làn điệu' | 'Sách nghiên cứu quý';
  condition: 'Rất quý hiếm - Đã số hóa 100%' | 'Bảo tồn nghiêm ngặt' | 'Được cộng đồng lưu giữ';
  excerptOrContent: string;
  translationNotes: string;
  scholarlyAnalysis: string;
  physicalSpecifications: string;
}

export interface CommunityContribution {
  id: string;
  contributorName: string;
  locality: string;
  title: string;
  content: string;
  category: 'Ký ức làng võ' | 'Kỷ niệm gánh hát' | 'Dị bản thơ phú' | 'Hiện vật gia đình';
  dateSubmitted: string;
  verifiedByElder: boolean;
}

export const HERO_METRICS = [
  { value: '18', label: 'Thập bát ban binh khí', sub: 'Hệ thống vũ khí chuẩn mực võ Bình Định' },
  { value: '48+', label: 'Tư liệu số hóa', sub: 'Mã lưu trữ Hán Nôm & hiện vật quý' },
  { value: '12', label: 'Địa phương & Lò võ di sản', sub: 'Tây Sơn, An Nhơn, Tuy Phước, Quy Nhơn' },
  { value: '100%', label: 'Giao thoa Văn & Võ', sub: 'Vũ đạo tuồng đúc từ thế võ truyền thống' },
];

export const MARTIAL_FORMS_DATA: MartialForm[] = [
  {
    id: 'hung-ke-quyen',
    name: 'Hùng Kê Quyền (Quyền Gà Chọi)',
    creatorOrOrigin: 'Đông Sơn Vương Nguyễn Lữ (Tây Sơn Tam Kiệt)',
    weaponType: 'Tay không',
    era: 'Thế kỷ XVIII (Khởi nghĩa Tây Sơn)',
    verseIntro: [
      'Kim kê xước dực khởi phong thanh,',
      'Song túc câu liêm đắc thế tranh.',
      'Dẫn chước tấn công như hổ vọt,',
      'Thối thoái hư bộ tựa xà hành.',
      'Dịch thơ: Gà vàng vỗ cánh gió rền vang / Hai cựa móc liêm chiếm thế đàng / Nhử mồi tiến tựa mãnh hổ phóng / Lùi chân biến ảo rắn luồn hang.'
    ],
    meaningAndApplication: 'Nguyễn Lữ quan sát lối đá của gà chọi: tuy nhỏ bé nhưng mưu mẹo, dùng cựa móc (câu liêm), chọc mỏ hiểm độc (chỉ pháp), né tránh đòn nặng của đối phương to lớn để phản công chớp nhoáng vào huyệt đạo. Đây là bài quyền lấy nhu chế cương đặc sắc nhất của Võ Bình Định.',
    posturesCount: 45,
    representedSchool: 'Võ Tây Sơn - Làng An Vinh',
    significance: 'Di sản võ học Tây Sơn tiêu biểu, được Liên đoàn Võ thuật Cổ truyền Việt Nam chuẩn hóa thành bài quy định quốc gia.'
  },
  {
    id: 'ngoc-tran-quyen',
    name: 'Ngọc Trản Ngân Đài (Chén Ngọc Đài Bạc)',
    creatorOrOrigin: 'Võ sư truyền đời đất võ An Thái - Tây Sơn',
    weaponType: 'Tay không',
    era: 'Thời Tây Sơn - Triều Nguyễn',
    verseIntro: [
      'Ngọc trản ngân đài sơ lập bộ,',
      'Đả hổ phục long định thế trung.',
      'Hữu hoành tả chuyển liên hoa bộ,',
      'Lưỡng thủ phân khai bế nguyệt phong.',
      'Dịch nghĩa: Đứng vững chân như chén ngọc đặt trên đài bạc, tay quyền linh hoạt mở hoa sen, trái gạt phải đấm phá thế liên hoàn.'
    ],
    meaningAndApplication: 'Bộ pháp vững chãi, di chuyển hình chữ đinh và bát quái. Kỹ thuật đấm bật xoay hông, biến đổi thủ pháp liên hồi từ đài sen kín đáo sang bung đòn hiểm vào yếu huyệt.',
    posturesCount: 38,
    representedSchool: 'Lò võ Phi Long Vịnh (Tuy Phước) & An Vinh',
    significance: 'Bài quyền kinh điển kiểm tra căn cơ thủ pháp và hạ bàn của môn sinh Võ Bình Định.'
  },
  {
    id: 'roi-thuan-truyen',
    name: 'Roi Thuận Truyền (Bát Quái Côn / Roi Tấn Nhất)',
    creatorOrOrigin: 'Cụ Hồ Ngư & Họ tộc Làng võ Thuận Truyền',
    weaponType: 'Roi / Côn',
    era: 'Thế kỷ XIX (Thời Nguyễn)',
    verseIntro: [
      'Roi Thuận Truyền, quyền An Thái,',
      'Đâm như chớp giật, quét tựa bão giông.',
      'Thương đâm một điểm, roi đánh một vùng,',
      'Đầu roi phong kín, ngọn roi xé mây.'
    ],
    meaningAndApplication: 'Côn roi Thuận Truyền nổi danh làm từ gỗ dâu rừng hoặc mây nước già dẻo dai. Kỹ thuật đâm đầu nhọn, giật đầu đốc, đòn hiểm “chọc mắt cá”, “hoành thảo phong lôi”. Người cầm roi có thể một địch muôn người giữa vòng vây giặc.',
    posturesCount: 52,
    representedSchool: 'Lò võ họ Hồ (Thuận Truyền, Tây Sơn)',
    significance: 'Đỉnh cao roi thuật Việt Nam. Câu ca dao “Roi Thuận Truyền, quyền An Thái” trở thành biểu tượng võ học Bình Định.'
  },
  {
    id: 'sieu-xung-thien',
    name: 'Siêu Xung Thiên (Đại Đao Khảm Nguyệt)',
    creatorOrOrigin: 'Đại Đô Đốc Võ Văn Dũng (Tây Sơn)',
    weaponType: 'Đao / Kiếm',
    era: 'Thời Tây Sơn',
    verseIntro: [
      'Xung thiên nhất siêu kinh vũ trụ,',
      'Phi đao tảo địa trấn sơn hà.',
      'Khảm đao nghinh phong phân bạt nguyệt,',
      'Hồi long triệt kích định can qua.'
    ],
    meaningAndApplication: 'Đại đao nặng từ 7 đến 15 kg, dùng trên lưng ngựa lẫn bộ chiến. Các thế chém vát, bổ đỉnh, luồn đao sau lưng (bối đao) và tung đao lên trời lấy thế xung thiên phá tan đội hình kỵ binh địch.',
    posturesCount: 42,
    representedSchool: 'Võ đường Phan Thọ (Tây Sơn)',
    significance: 'Vũ khí chủ lực của nghĩa quân Tây Sơn trong trận Ngọc Hồi - Đống Đa.'
  },
  {
    id: 'bach-ho-quyen',
    name: 'Bạch Hổ Sơn Lâm Quyền',
    creatorOrOrigin: 'Lão võ sư Lý Xuân Hỷ (Đập Đá, An Nhơn)',
    weaponType: 'Tay không',
    era: 'Triều Nguyễn - Hiện đại',
    verseIntro: [
      'Mãnh hổ xuất sơn trảo nhập phong,',
      'Song quyền đả tuyệt phá thiên không.',
      'Trảo hổ vồ mồi kinh bách thú,',
      'Cương nhu tương tế dũng vô cùng.'
    ],
    meaningAndApplication: 'Mô phỏng sức mạnh dũng mãnh và móng vuốt hổ trắng rừng sâu. Đòn thế hiểm hóc ở các ngón tay gập thành vuốt hổ (hổ trảo), tấn công vào khớp, gân và yết hầu đối phương.',
    posturesCount: 36,
    representedSchool: 'Võ đường Lý Xuân Hỷ (An Nhơn)',
    significance: 'Võ sư Lý Xuân Hỷ từng mang bài Bạch Hổ Quyền thi đấu quốc tế tại Liên Xô (1989) được phong danh hiệu "Hùm xám miền Trung".'
  }
];

export const TUONG_PLAYS_DATA: TuongPlay[] = [
  {
    id: 'ho-sanh-dan',
    title: 'Hộ Sanh Đàn (Đàn Sinh Con)',
    author: 'Hậu tổ Đào Tấn (1845–1907)',
    genre: 'Tuồng văn',
    era: 'Triều Nguyễn (1898)',
    synopsis: 'Vở tuồng bi hùng bậc nhất của Đào Tấn, ngợi ca đức hy sinh của Tiết Phụng Nghi và sự trung nghĩa của Tiêu Tư trong cuộc trốn chạy giữa mưa bom bão đạn để bảo vệ đứa trẻ vô tội (mầm sống của đất nước) vượt qua cạm bẫy quyền lực đen tối.',
    notableCharacters: ['Tiết Phụng Nghi (Nữ chính anh liệt)', 'Tiêu Tư (Trung thần)', 'Lý Vọng (Gian thần mưu phản)'],
    martialMovementIntegration: 'Màn đánh phá vòng vây của Tiêu Tư áp dụng triệt để đòn roi Thuận Truyền và thế đoản đao Bình Định. Nhân vật nữ Tiết Phụng Nghi dùng vũ đạo bộ vó chạy giặc kết hợp thế tránh né linh hoạt của Hùng Kê Quyền.',
    famousExcerpts: 'Trích đoạn "Tiêu Tư bảo giá vượt ải": Vừa hát Nam ai ai oán, vừa múa kiếm mở đường máu cứu sản phụ sinh con nơi hang sâu giông bão.'
  },
  {
    id: 'son-hau',
    title: 'Sơn Hậu (Trung Thần Nghĩa Sĩ)',
    author: 'Khuyết danh / Đào Tấn chỉnh lý tu bổ',
    genre: 'Tuồng võ',
    era: 'Thế kỷ XVIII - XIX',
    synopsis: 'Cuộc đấu tranh quyết liệt giữa phe trung thần (Đổng Kim Lân, Khương Dĩ Muội) và phe nghịch thần (Tạ Ôn Đình, Tạ Lôi Nhược). Khương Dĩ Muội dù bị chém cụt đầu vẫn biến thành ngọn đèn soi đường cho Đổng Kim Lân cõng ấu chúa chạy sang thành Sơn Hậu.',
    notableCharacters: ['Khương Dĩ Muội (Trung thần bất tử)', 'Đổng Kim Lân (Tướng quân dũng liệt)', 'Tạ Ôn Đình (Gian thần mặt rằn)'],
    martialMovementIntegration: 'Cuộc giao tranh giữa Khương Dĩ Muội và Tạ Ôn Đình là mẫu mực kinh điển của đâm thương, phạt siêu đao và kỹ thuật nhào lộn võ thuật sân khấu Bình Định.',
    famousExcerpts: 'Trích đoạn "Khương Dĩ Muội hóa đèn": Biểu diễn tinh tế giữa vũ đạo tuồng tượng trưng và ngọn đuốc thật soi rọi lòng trung nghĩa.'
  },
  {
    id: 'co-thanh',
    title: 'Cổ Thành (Quan Công Trảm Sái Dương)',
    author: 'Tuồng kinh điển Bình Định diễn xướng Đình Làng',
    genre: 'Tuồng võ',
    era: 'Thế kỷ XIX',
    synopsis: 'Quan Công phò nhị tẩu tìm anh, đến Cổ Thành gặp Trương Phi nghi ngờ bội nghĩa. Đúng lúc Sái Dương mang quân đuổi tới, Trương Phi đánh 3 hồi trống, Quan Công vung thanh Long đao chém rơi đầu giặc để minh oan kết nghĩa vườn đào.',
    notableCharacters: ['Quan Công (Mặt đỏ, mày tằm)', 'Trương Phi (Mặt đen, râu hùm)', 'Sái Dương (Tướng giặc kiêu ngạo)'],
    martialMovementIntegration: 'Đỉnh cao của vũ đạo múa đại đao (Siêu Xung Thiên) kết hợp tiết tấu trống chiến ba hồi nghẹt thở.',
    famousExcerpts: 'Hồi trống giục trảm tướng tại cổng Cổ Thành.'
  }
];

export const TUONG_MASKS_DATA: TuongMask[] = [
  {
    id: 'mat-do-quan-cong',
    name: 'Mặt Đỏ (Hồng Diện Trung Thần)',
    characterArchetype: 'Trung thần nghĩa liệt, khí phách ngút trời',
    exampleCharacter: 'Quan Công, Đổng Kim Lân',
    baseColor: 'Đỏ son (Lacquer Red)',
    colorHex: '#991B1B',
    facialFeatures: 'Nền mặt đỏ rực, chân mày lá liễu hoặc mày rồng xếch cao, mắt phụng, viền mắt trắng đen rõ ràng, râu dài ngũ chòm.',
    moralSignificance: 'Màu đỏ biểu thị trái tim trung trinh, lòng quả cảm, ngay thẳng, không màng sống chết vì đại nghĩa quốc gia.',
    symbolism: 'Đại diện cho bậc thánh hiền, anh hùng cái thế trong xã hội truyền thống.',
    techniqueNotes: 'Nghệ nhân dùng bột son trộn dầu thông vẽ nền, viền mực tàu sắc sảo để mắt toát lên vẻ uy dũng thần thánh.'
  },
  {
    id: 'mat-trang-nho-nha',
    name: 'Mặt Trắng (Bạch Diện Thư Sinh / Tướng Trẻ)',
    characterArchetype: 'Trí thức nho nhã hoặc tướng soái trẻ tuổi',
    exampleCharacter: 'Lữ Bố, Triệu Tử Long (khi trẻ), Thư sinh Đào Duy Từ',
    baseColor: 'Trắng phấn phấn ngà (Ivory Bone)',
    colorHex: '#F5F5F4',
    facialFeatures: 'Nền da trắng mịn, điểm phấn hồng nhẹ gò má, mày thanh như nét vẽ mực, đôi mắt sáng trong.',
    moralSignificance: 'Thường là người tài hoa, có văn võ nhưng tính tình có thể đa cảm hoặc kiêu hãnh.',
    symbolism: 'Sự thuần khiết tri thức, phong độ tài tử văn nhân.',
    techniqueNotes: 'Đánh phấn đều bằng lòng bàn tay, dùng son môi phớt nhẹ, nét bút thanh tú.'
  },
  {
    id: 'mat-ran-hoa-ran',
    name: 'Mặt Rằn (Vằn Vện / Đốm Hoa)',
    characterArchetype: 'Tướng dũng mãnh, tính khí nóng nảy hoặc tướng cướp phản nghịch',
    exampleCharacter: 'Tạ Ôn Đình, Tiết Cương, Lôi Nhược',
    baseColor: 'Đen trắng xám đan xen hình vân sét',
    colorHex: '#334155',
    facialFeatures: 'Các nét vằn vện hoa văn rằn rĩ quanh hốc mắt, trán vẽ hình ngọn lửa hoặc đao kiếm, sống mũi bôi trắng, ria mép xếch ngược.',
    moralSignificance: 'Bộc lộ sự hung tợn, xốc nổi, sức mạnh cơ bắp phi thường nhưng thiếu mưu lược hoặc lòng phản trắc hiểm độc.',
    symbolism: 'Biểu tượng của bão tố, sự hủy diệt hoặc sức mạnh hoang dã khó kiềm chế.',
    techniqueNotes: 'Đòi hỏi tay cọ điêu luyện vẽ các đường rãnh đối xứng phức tạp từ sống mũi tỏa ra thái dương.'
  },
  {
    id: 'mat-moc-gian-than',
    name: 'Mặt Mốc (Bạch Gian Tặc)',
    characterArchetype: 'Gian thần xu nịnh, kẻ bội phản quỷ quyệt',
    exampleCharacter: 'Tào Tháo, Tư Mã Ý, Lý Vọng',
    baseColor: 'Trắng mốc / Xám tro nhợt nhạt',
    colorHex: '#78716C',
    facialFeatures: 'Khuôn mặt bôi vôi trắng bệch hoặc xám xịt như mốc meo, mắt vẽ đuôi cụp gian giảo, mày thưa ngắn, khóe miệng nhếch mép.',
    moralSignificance: 'Kẻ lòng dạ hiểm độc, tráo trở khôn lường, bán nước cầu vinh, bên ngoài nhã nhặn mà bụng chứa dao găm.',
    symbolism: 'Bóng tối của sự phản phúc trong cung đình và đời sống.',
    techniqueNotes: 'Bôi vôi bột khô tạo độ nhăn nheo, gợn nét u tối trên vầng trán.'
  },
  {
    id: 'mat-den-cuong-truc',
    name: 'Mặt Đen (Hắc Diện Trực Tính)',
    characterArchetype: 'Người cương trực, bộc trực, ghét cay ghét đắng kẻ gian tà',
    exampleCharacter: 'Trương Phi, Bao Công, Khương Dĩ Muội',
    baseColor: 'Đen tuyền / Mực Tàu ánh tím',
    colorHex: '#0F172A',
    facialFeatures: 'Toàn bộ khuôn mặt phủ đen mun, vẽ tròng mắt to tròn trợn trừng, hai vệt mày rậm như chổi xể, râu quăn xoăn tít.',
    moralSignificance: 'Tấm lòng bộc trực, ruột để ngoài da, căm ghét bất công, sẵn sàng xả thân vì bạn hữu và chân lý.',
    symbolism: 'Sự cứng rắn của sắt thép và công lý không thiên vị.',
    techniqueNotes: 'Mực tàu pha muội than bồ hóng quết đều, tạo thần sắc uy nghiêm lẫm liệt.'
  }
];

export const LOCALITIES_DATA: LocalityItem[] = [
  {
    id: 'lang-vo-thuan-truyen',
    name: 'Làng Võ Thuận Truyền',
    district: 'Tây Sơn',
    exactAddress: 'Thôn Thuận Truyền, xã Bình Thuận, huyện Tây Sơn, tỉnh Bình Định',
    category: 'Lò võ cổ truyền',
    masterOrFounder: 'Võ sư Hồ Ngư, Hồ Nhu, Hồ Sừng',
    lineageHistory: 'Thuận Truyền là cái nôi sản sinh ra dòng roi họ Hồ huyền thoại từ thời vua Quang Trung. Cụ Hồ Ngư truyền dạy ngọn roi có một không hai, được tôn vinh "Roi Thuận Truyền - Quyền An Thái". Hậu duệ đời thứ 4 và 5 tiếp tục giữ gìn lò võ tại quê nhà.',
    coreTradition: 'Bát quái côn, roi chiến sa trường, quyền thảo ngũ hành, rèn luyện trên nền đất nện và múa roi mây.',
    preservedArtifacts: ['Ngọn roi dâu rừng cổ của cụ Hồ Ngư niên đại trên 130 năm', 'Gia phả võ học chữ Hán họ Hồ', 'Bảng võ đạo môn quy'],
    status: 'Đang hoạt động & truyền dạy',
    coordinatesLabel: '13.9142° N, 108.8821° E',
    establishedYear: 'Khoảng 1840'
  },
  {
    id: 'lang-vo-an-vinh',
    name: 'Làng Võ An Vinh',
    district: 'Tây Sơn',
    exactAddress: 'Thôn An Vinh, xã Tây Vinh, huyện Tây Sơn, tỉnh Bình Định',
    category: 'Lò võ cổ truyền',
    masterOrFounder: 'Cố Đại Võ sư Phan Thọ, Phan Đức',
    lineageHistory: 'An Vinh gắn liền với gia tộc họ Phan. Cố võ sư Phan Thọ (1926–2014) được mệnh danh là "Bộ bách khoa toàn thư sống của võ cổ truyền Bình Định" khi nắm giữ trọn vẹn thập bát ban binh khí và 18 bài thảo quyền bí truyền.',
    coreTradition: 'Hùng Kê Quyền, Độc Lư Thương, Song Đầu Côn, Lôi Phong Đao, đòn thế biến ảo cận chiến.',
    preservedArtifacts: ['Bộ binh khí cổ 18 món đúc rèn thủ công', 'Sổ tay chép tay khẩu quyết phú võ của võ sư Phan Thọ', 'Bằng khen Di sản phi vật thể'],
    status: 'Đang hoạt động & truyền dạy',
    coordinatesLabel: '13.9315° N, 108.9240° E',
    establishedYear: 'Đầu thế kỷ XIX'
  },
  {
    id: 'lang-vo-an-thai',
    name: 'Làng Võ An Thái & Chùa Bà',
    district: 'TX. An Nhơn',
    exactAddress: 'Xã Nhơn Phúc, thị xã An Nhơn, tỉnh Bình Định',
    category: 'Lò võ cổ truyền',
    masterOrFounder: 'Võ sư Diệp Trường Phát (Tàu Sáu), họ tộc họ Đặng',
    lineageHistory: 'An Thái nằm bên dòng sông Côn trù phú, từng là thương cảng sầm uất. Nơi đây võ thuật Thiếu Lâm Nam phái giao thoa nhuần nhuyễn với võ Tây Sơn Bình Định do võ sư Tàu Sáu truyền bá, hình thành dòng quyền An Thái lừng danh.',
    coreTradition: 'Quyền thuật liên hoàn, thủ pháp chớp nhoáng, múa đao, ngọn cước chém sấm sét.',
    preservedArtifacts: ['Trống sấm võ thuật Chùa Bà An Thái', 'Văn tự môn phái Diệp Trường Phát', 'Kỷ vật thi đấu võ đài miền Trung'],
    status: 'Đang hoạt động & truyền dạy',
    coordinatesLabel: '13.8823° N, 109.0210° E',
    establishedYear: 'Khoảng 1880'
  },
  {
    id: 'lang-tuong-vinh-thanh',
    name: 'Làng Tuồng Vinh Thạnh & Học Bộ Đình Đào Tấn',
    district: 'Tuy Phước',
    exactAddress: 'Thôn Vinh Thạnh, xã Phước Lộc, huyện Tuy Phước, tỉnh Bình Định',
    category: 'Làng tuồng & Gánh hát',
    masterOrFounder: 'Hậu tổ Tuồng Đào Tấn (1845–1907)',
    lineageHistory: 'Nơi sinh và lập lò đào tạo hát bội đầu tiên của danh nhân Đào Tấn. Ông mở trường Học Bộ Đình tại quê nhà để đào tạo diễn viên, nhạc công tuồng chính quy, đưa nghệ thuật Tuồng Bình Định lên đỉnh cao rực rỡ.',
    coreTradition: 'Vở tuồng bác học Đào Tấn (Hộ Sanh Đàn, Cổ Thành, Trầm Hương Các), kỹ thuật điểm mặt nạ tuồng, vũ đạo loan mã.',
    preservedArtifacts: ['Bản khắc gỗ tuồng cổ nguyên bản', 'Bia đá tưởng niệm Hậu tổ Đào Tấn', 'Bộ mặt nạ tuồng phục dựng theo mẫu gốc triều Nguyễn'],
    status: 'Di tích quốc gia',
    coordinatesLabel: '13.8412° N, 109.1523° E',
    establishedYear: '1875 (Khởi dựng trường hát)'
  },
  {
    id: 'chua-long-phuoc',
    name: 'Lò Võ Chùa Long Phước (Đệ Nhất Thiền Võ)',
    district: 'Tuy Phước',
    exactAddress: 'Xã Phước Thuận, huyện Tuy Phước, tỉnh Bình Định',
    category: 'Lò võ cổ truyền',
    masterOrFounder: 'Hòa thượng Thích Hạnh Hòa, Đại đức Thích Vạn Mười',
    lineageHistory: 'Được mệnh danh là "Thiếu Lâm tự của Việt Nam". Ngôi chùa cổ là nơi các nhà sư vừa tu thiền vừa luyện võ gia truyền Bình Định để rèn luyện thân tâm và hộ quốc an dân.',
    coreTradition: 'La Hán Quyền, Song Tô, Đoản Côn Thiền Môn, Khí công dưỡng sinh kết hợp võ thuật.',
    preservedArtifacts: ['Sân tập gạch nung cổ truyền', 'Bảng mộc bản kinh Phật và đồ hình huyệt đạo võ học', 'Bộ mộc đao, côn trắc cổ'],
    status: 'Đang hoạt động & truyền dạy',
    coordinatesLabel: '13.8567° N, 109.1989° E',
    establishedYear: 'Hơn 200 năm trước'
  },
  {
    id: 'nha-hat-tuong-dao-tan',
    name: 'Nhà Hát Nghệ Thuật Truyền Thống Bình Định (Đoàn Tuồng Đào Tấn)',
    district: 'TP. Quy Nhơn',
    exactAddress: 'Số 590 đường Trần Hưng Đạo, thành phố Quy Nhơn, tỉnh Bình Định',
    category: 'Nhà hát & Trung tâm bảo tồn',
    masterOrFounder: 'Các thế hệ NSND, NSƯT Bình Định (NSND Lệ Thi, Đàm Liên, Hòa Bình...)',
    lineageHistory: 'Kế thừa trực tiếp Nhà hát Tuồng Đào Tấn thành lập từ năm 1952. Đơn vị chủ lực lưu giữ hơn 50 vở tuồng kinh điển quốc gia và biểu diễn phục vụ nhân dân cùng du khách quốc tế.',
    coreTradition: 'Diễn xướng trọn vẹn các pho tuồng lịch sử, biểu diễn trống trận, giảng dạy hóa trang mặt nạ tuồng.',
    preservedArtifacts: ['Kho phục trang tuồng thêu tay cung đình hơn 60 năm', 'Bộ tổng tập kịch bản Đào Tấn nguyên bản', 'Bản ghi âm gốc các nghệ nhân tuồng đầu thế kỷ XX'],
    status: 'Đang hoạt động & truyền dạy',
    coordinatesLabel: '13.7744° N, 109.2278° E',
    establishedYear: '1952'
  },
  {
    id: 'bao-tang-quang-trung',
    name: 'Bảo Tàng Quang Trung & Đền Thờ Tây Sơn Tam Kiệt',
    district: 'Tây Sơn',
    exactAddress: 'Thị trấn Phú Phong, huyện Tây Sơn, tỉnh Bình Định',
    category: 'Di tích lịch sử văn võ',
    masterOrFounder: 'Ba anh em nhà Tây Sơn (Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ)',
    lineageHistory: 'Nằm trên nền ngôi nhà cũ của ba anh em Tây Sơn, là trung tâm tôn vinh truyền thống thượng võ hào hùng của phong trào nông dân Tây Sơn thế kỷ XVIII.',
    coreTradition: 'Dàn trống trận Tây Sơn 12 chiếc huyền thoại, biểu diễn võ cổ truyền định kỳ, tái hiện võ trận Đống Đa.',
    preservedArtifacts: ['Cây me cổ thụ và giếng nước đá ong trên 300 năm', 'Dàn trống trận Tây Sơn da trâu khổng lồ', 'Hàng trăm hiện vật vũ khí gươm giáo Tây Sơn khai quật'],
    status: 'Di tích quốc gia',
    coordinatesLabel: '13.9287° N, 108.9103° E',
    establishedYear: '1979 (Khánh thành bảo tàng)'
  },
  {
    id: 'lo-vo-ly-xuan-hy',
    name: 'Võ Đường Lý Xuân Hỷ (Bạch Hổ Quyền)',
    district: 'TX. An Nhơn',
    exactAddress: 'Phường Đập Đá, thị xã An Nhơn, tỉnh Bình Định',
    category: 'Lò võ cổ truyền',
    masterOrFounder: 'Lão võ sư Lý Xuân Hỷ ("Hùm xám miền Trung")',
    lineageHistory: 'Dòng họ Lý nhiều đời tinh thông Bạch Hổ Quyền. Cụ Lý Xuân Hỷ đã đem võ học truyền thống Đập Đá vang danh trong và ngoài nước qua các giải đấu võ đài tự do lẫy lừng.',
    coreTradition: 'Bạch Hổ Quyền, móng vuốt xé gió, thế đánh cận chiến hạ gục đối thủ nhanh gọn.',
    preservedArtifacts: ['Bộ sưu tập huy chương và cúp võ đài tự do thập niên 1970–1980', 'Môn phái tiêu kỳ Bạch Hổ'],
    status: 'Đang hoạt động & truyền dạy',
    coordinatesLabel: '13.9012° N, 109.0534° E',
    establishedYear: 'Khoảng 1950'
  }
];

export const ARCHIVE_DOCUMENTS_DATA: ArchivalDocument[] = [
  {
    id: 'doc-001',
    accessionCode: 'BD-VT-001',
    title: 'Thảo bộ Hùng Kê Quyền (Bản chép tay Nôm cổ)',
    originalScript: '雄雞拳譜 (Hùng Kê Quyền Phổ)',
    category: 'Võ phái & Khẩu quyết',
    districtOrigin: 'Huyện Tây Sơn (Làng An Vinh)',
    era: 'Thời Tây Sơn (1778–1802)',
    holderInstitution: 'Phòng Lưu trữ Bảo tàng Quang Trung & Gia tộc võ sư Phan Thọ',
    documentType: 'Bản thảo chép tay',
    condition: 'Rất quý hiếm - Đã số hóa 100%',
    excerptOrContent: 'Bài phú chữ Nôm dài 14 câu miêu tả quy luật cử động của loài kê: "Kim kê độc lập thế nan đương / Xước dực tung hoành biến tứ phương / Thủ pháp liên hoàn như lãng khởi / Câu liêm thối bộ phục tàng hình".',
    translationNotes: 'Gà vàng đứng một chân thế khó đương đầu / Vỗ cánh tung hoành chuyển khắp bốn phương / Tay ra quyền liên tục như sóng cuộn / Chân thoái lùi móc liêm ẩn mình như rồng lặn.',
    scholarlyAnalysis: 'Tư liệu chứng minh nguồn gốc dân gian và tính triết học phương Đông sâu sắc: lấy hình tượng con gà chọi Việt Nam để khắc chế kẻ thù to khỏe, phản ánh tinh thần khởi nghĩa Tây Sơn.',
    physicalSpecifications: 'Tập giấy dó bản dày 16 trang, khổ 18 x 26 cm, mực tàu pha nhựa sung bóng, có triện ấn của dòng võ An Vinh.'
  },
  {
    id: 'doc-002',
    accessionCode: 'BD-VT-002',
    title: 'Thần Roi Cụ Hồ Ngư & Bài phú Roi Tấn Nhất',
    originalScript: '順傳村胡氏神棍歌 (Thuận Truyền thôn Hồ thị thần côn ca)',
    category: 'Binh khí & Hiện vật',
    districtOrigin: 'Huyện Tây Sơn (Làng Thuận Truyền)',
    era: 'Thời Nguyễn (Thế kỷ XIX)',
    holderInstitution: 'Từ đường dòng họ Hồ, xã Bình Thuận',
    documentType: 'Bản thảo chép tay',
    condition: 'Bảo tồn nghiêm ngặt',
    excerptOrContent: 'Lời dặn bí truyền của cụ Hồ Ngư: "Thương đâm một điểm, roi đánh một vùng. Ngọn roi Thuận Truyền dài một trượng ba thước, vừa vặn sải tay, thủ như bàn thạch, xuất như lôi đình. Gặp đao thời gạt, gặp kích thời luồn, chớ lạm sát người vô tội".',
    translationNotes: 'Ghi chép về phương pháp chọn cây dâu rừng phơi sương 100 ngày để roi dẻo mà không gãy, kèm 12 đòn đánh chết người vào hạ bàn.',
    scholarlyAnalysis: 'Khẳng định vị thế độc tôn của kỹ thuật roi chiến đất Bình Định. Cụ Hồ Ngư từng dùng ngọn roi này đánh đuổi thảo khấu bảo vệ dân làng.',
    physicalSpecifications: 'Hiện vật roi gỗ dâu dài 2.7m đã lên nước đen bóng cùng cuộn da trâu chép khẩu quyết 10 điều môn quy.'
  },
  {
    id: 'doc-003',
    accessionCode: 'BD-HB-101',
    title: 'Kịch bản gốc bản Nôm "Hộ Sanh Đàn" - Đào Tấn',
    originalScript: '護生壇全本 (Hộ Sanh Đàn toàn bổn)',
    category: 'Kịch bản Tuồng & Bản khắc',
    districtOrigin: 'Huyện Tuy Phước (Học Bộ Đình Vinh Thạnh)',
    era: 'Thời Nguyễn (Thế kỷ XIX)',
    holderInstitution: 'Nhà hát Nghệ thuật Truyền thống Bình Định',
    documentType: 'Bản khắc gỗ / Bản dập văn bia',
    condition: 'Rất quý hiếm - Đã số hóa 100%',
    excerptOrContent: 'Lời thoại nhân vật Tiêu Tư: "Nghe sấm giật ngang trời gan chẳng chuyển / Thấy mưa sa ngập lối dạ không dời / Cứu được một mạng ấu nhi / Dẫu tan xương nát thịt cũng cam lòng!".',
    translationNotes: 'Bản Nôm chuẩn có ghi chú tường tận nhịp trống chầu, tiếng kèn bóp và hướng di chuyển bộ vó của diễn viên trên sàn gỗ.',
    scholarlyAnalysis: 'Kiệt tác văn học tuồng Việt Nam. Tác phẩm thể hiện tư tưởng nhân đạo cao cả của Đào Tấn trong hoàn cảnh đất nước bị thực dân xâm lược.',
    physicalSpecifications: '4 quyển mộc bản chữ Hán Nôm dập trên giấy điệp, tổng cộng 142 trang đôi.'
  },
  {
    id: 'doc-004',
    accessionCode: 'BD-HB-102',
    title: 'Hồ sơ 48 Mặt Nạ Tuồng Bình Định Nguyên Bản',
    originalScript: '平定省古戱臉譜 (Bình Định tỉnh cổ hí kiểm phổ)',
    category: 'Mặt nạ & Hóa trang',
    districtOrigin: 'Thị xã An Nhơn & TP. Quy Nhơn',
    era: 'Đầu thế kỷ XX',
    holderInstitution: 'Bảo tàng Tổng hợp tỉnh Bình Định',
    documentType: 'Hiện vật bảo tàng',
    condition: 'Bảo tồn nghiêm ngặt',
    excerptOrContent: 'Bộ sưu tập ghi nhận đầy đủ 48 quy chuẩn vẽ mặt: Mặt Đỏ (Quan Công, Đổng Kim Lân), Mặt Trắng (Lữ Bố, Địch Thanh), Mặt Mốc (Tào Tháo, Lý Vọng), Mặt Rằn (Tạ Ôn Đình, Tiết Cương), Mặt Quái (Yêu đạo, Ma vương). Kèm chỉ dẫn pha chế khoáng chất thiên nhiên.',
    translationNotes: 'Sử dụng màu củ nâu, bột đá son, vôi sò, muội than bồ hóng và mật mía để giữ nét vẽ không trôi khi diễn viên đổ mồ hôi.',
    scholarlyAnalysis: 'Tư liệu mỹ thuật dân gian độc đáo, phản ánh chuẩn mực thẩm mỹ và quan niệm trung - gian, thiện - ác rạch ròi của người dân xứ Bình Định.',
    physicalSpecifications: '48 mặt nạ vẽ tay trên bìa bồi bằng khuôn đất sét nung, kích thước bằng khuôn mặt người thật.'
  },
  {
    id: 'doc-005',
    accessionCode: 'BD-VT-003',
    title: 'Bản dập bia đá Diễn Võ Đường Tây Sơn',
    originalScript: '西山演武堂碑銘 (Tây Sơn diễn võ đường bi minh)',
    category: 'Văn bia & Di cảo',
    districtOrigin: 'Huyện Tây Sơn (Thượng đạo Tây Sơn)',
    era: 'Thời Tây Sơn (1778–1802)',
    holderInstitution: 'Bảo tàng Quang Trung',
    documentType: 'Bản khắc gỗ / Bản dập văn bia',
    condition: 'Rất quý hiếm - Đã số hóa 100%',
    excerptOrContent: 'Văn bia ghi chép kỳ thi tuyển tướng sĩ của Bắc Bình Vương Nguyễn Huệ: "Tuyển người tài trí, thạo côn quyền, cưỡi ngựa bắn cung, dũng khí hơn người, gia phong phong hiệu Đô Đốc, Đô Úy lãnh binh dẹp giặc".',
    translationNotes: 'Minh chứng lịch sử về chính sách trọng võ, coi việc rèn luyện võ nghệ là quốc sách xây dựng và bảo vệ đất nước thời Tây Sơn.',
    scholarlyAnalysis: 'Cột mốc xác định trường võ tập trung đầu tiên của nghĩa quân trước khi tiến ra Thăng Long đại phá 29 vạn quân Mãn Thanh.',
    physicalSpecifications: 'Bản dập rập mực đen trên giấy xuyến chỉ, khổ 90 x 140 cm, nét khắc chân phương uyển chuyển.'
  },
  {
    id: 'doc-006',
    accessionCode: 'BD-HB-103',
    title: 'Băng âm thanh Làn điệu Tuồng cổ Bình Định (1968)',
    originalScript: 'Băng cối thu thanh điệu Nam Xuân - Nam Ai của NSND Lệ Thi',
    category: 'Băng ghi âm & Làn điệu',
    districtOrigin: 'TP. Quy Nhơn',
    era: 'Hiện đại (Sau 1975)',
    holderInstitution: 'Đài Phát thanh - Truyền hình Bình Định & Nhà hát Nghệ thuật Truyền thống',
    documentType: 'Bản ghi âm làn điệu',
    condition: 'Rất quý hiếm - Đã số hóa 100%',
    excerptOrContent: 'Bản thu âm trực tiếp giọng hát ngâm của NSND Lệ Thi hòa cùng tiếng kèn bóp và nhịp trống chiến trong trích đoạn Khương Dĩ Muội hóa đèn, âm hưởng bi tráng sâu thẳm.',
    translationNotes: 'Được chuyển đổi từ băng từ cối sang định dạng số FLAC 24-bit 96kHz để lưu trữ vĩnh viễn.',
    scholarlyAnalysis: 'Mẫu âm thanh chuẩn mực về kỹ thuật “nói lối” và lối “hát ngâm hơi cổ áo” đặc trưng riêng của các nghệ nhân hát bội Bình Định.',
    physicalSpecifications: 'Tập tin âm thanh số hóa chất lượng cao kèm biên bản giám định âm nhạc học.'
  },
  {
    id: 'doc-007',
    accessionCode: 'BD-VT-004',
    title: 'Kỷ yếu Binh Khí Độc Lư Thương và Quyền Thảo họ Phan',
    originalScript: '潘氏武藝家傳 (Phan thị võ nghệ gia truyền)',
    category: 'Võ phái & Khẩu quyết',
    districtOrigin: 'Huyện Tây Sơn (Làng An Vinh)',
    era: 'Đầu thế kỷ XX',
    holderInstitution: 'Võ đường Phan Thọ, xã Tây Vinh',
    documentType: 'Bản thảo chép tay',
    condition: 'Được cộng đồng lưu giữ',
    excerptOrContent: 'Bài phú Độc Lư Thương: "Thương xuất như long nhập trận tiền / Nhất thương điểm huyệt định càn khôn / Tọa bộ bình thương phong dĩ tẩu / Hồi đầu sát địch chớp nhoáng bay".',
    translationNotes: 'Kỹ thuật dùng ngọn giáo nhọn một đầu, luồn lách phá vỡ khiên chắn của đối phương.',
    scholarlyAnalysis: 'Bài thương hiếm hoi kết hợp bộ pháp hình chữ bát và đòn nhảy tránh đòn thấp của đất võ miền Trung.',
    physicalSpecifications: 'Sổ tay 32 trang giấy carô cũ viết bằng mực tím và mực tàu, có chữ ký của võ sư Phan Thọ.'
  },
  {
    id: 'doc-008',
    accessionCode: 'BD-DC-201',
    title: 'Hương ước và Môn quy Võ Làng An Thái (Bản sao 1924)',
    originalScript: '安泰村武舘門規 (An Thái thôn võ quán môn quy)',
    category: 'Văn bia & Di cảo',
    districtOrigin: 'TX. An Nhơn (Xã Nhơn Phúc)',
    era: 'Thời Nguyễn (Thế kỷ XIX)',
    holderInstitution: 'Ban Quản lý Di tích Chùa Bà An Thái',
    documentType: 'Bản thảo chép tay',
    condition: 'Bảo tồn nghiêm ngặt',
    excerptOrContent: 'Môn quy 8 điều răn nghiêm ngặt: "Học võ để vệ thân, giúp kẻ yếu, cấm cậy sức hiếp người, cấm đấu ẩu rượu chè, cấm phản bội đồng môn, tôn sư trọng đạo... Kẻ vi phạm lập tức phế bỏ võ công trục xuất khỏi môn phái".',
    translationNotes: 'Văn bản phản ánh triết lý đạo đức võ đạo cao đẹp của người nông dân thượng võ Bình Định.',
    scholarlyAnalysis: 'Tư liệu quý về cấu trúc cộng đồng làng xã tự quản và vai trò của lò võ trong việc giữ gìn an ninh trật tự làng quê.',
    physicalSpecifications: 'Cuộn giấy dó viền lụa vàng, có dấu mộc đỏ của lý trưởng và hội đồng kỳ mục xã Nhơn Phúc.'
  }
];

export const INITIAL_COMMUNITY_POSTS: CommunityContribution[] = [
  {
    id: 'post-1',
    contributorName: 'Võ sư Đặng Văn Hải',
    locality: 'An Thái, Nhơn Phúc, An Nhơn',
    title: 'Ký ức những ngày hội Đổ Giàn Chùa Bà và các lò võ so tài',
    content: 'Xưa kia cứ vào rằm tháng Giêng, hội Đổ Giàn Chùa Bà An Thái là ngày hội lớn nhất của giới võ lâm Bình Định. Một con heo quay béo ngậy đặt trên giàn cao 5 thước, hàng chục võ sĩ cởi trần thắt khăn lưng đỏ lao vào vừa dùng bộ pháp né đòn vừa cướp heo mang về lò võ. Ai cướp được là năm đó môn phái đại cát đại lợi, danh tiếng vang khắp lục tỉnh.',
    category: 'Ký ức làng võ',
    dateSubmitted: '2026-02-14',
    verifiedByElder: true
  },
  {
    id: 'post-2',
    contributorName: 'Nghệ nhân Nguyễn Thị Minh Tâm',
    locality: 'Vinh Thạnh, Phước Lộc, Tuy Phước',
    title: 'Bí quyết giã bột son và muội bồ hóng để điểm mặt nạ Tuồng',
    content: 'Ông nội tôi ngày xưa đi gánh hát cụ Đào Tấn dạy rằng: Muốn vẽ mặt Quan Công đỏ cho thần, phải chọn son củ ở mạn rừng An Lão đem mài trên đĩa sứ tráng men với nước mưa hứng trong lu sành. Nhựa cây sung non hòa vào sẽ tạo lớp bóng như gương, ra sân khấu đèn dầu chiếu vào đỏ rực như than hồng, khán giả ngồi tít xa cũng thấy rợn người.',
    category: 'Kỷ niệm gánh hát',
    dateSubmitted: '2026-03-01',
    verifiedByElder: true
  },
  {
    id: 'post-3',
    contributorName: 'Hồ Sĩ Kiệt (Truyền nhân họ Hồ đời thứ 6)',
    locality: 'Thuận Truyền, Bình Thuận, Tây Sơn',
    title: 'Vài dị bản câu phú Roi Thuận Truyền trong gia đình',
    content: 'Trong cuốn sổ tay cụ Hồ Sừng để lại có ghi thêm 4 câu sau bài Roi Tấn Nhất: "Đầu roi điểm nhãn định càn khôn / Đốc gõ bình phong địch mất hồn / Chân lướt gió lùa theo cánh bướm / Một chiêu dứt điểm định càn thôn". Xin chia sẻ để các bạn trẻ yêu võ học tra cứu đối chiếu.',
    category: 'Dị bản thơ phú',
    dateSubmitted: '2026-03-20',
    verifiedByElder: true
  }
];

export const SOUND_PATTERNS = [
  {
    id: 'trong-tran-tay-son',
    title: 'Dàn Trống Trận Tây Sơn (12 Trống Sấm)',
    tempo: 130,
    rhythmDescription: 'Hồi trống xuất quân giục giã, dồn dập tiếng da trâu trầm đục phối cùng tiếng thanh la vang dội.',
    culturalRole: 'Khích lệ tinh thần nghĩa quân xung trận, tiếng trống truyền đi xa hàng chục dặm giữa núi rừng Tây Sơn Thượng Đạo.'
  },
  {
    id: 'trong-chien-hat-boi',
    title: 'Hồi Trống Chiến Tuồng & Điệu Hát Khách',
    tempo: 110,
    rhythmDescription: 'Nhịp "Cắc... Tùng tùng tùng... Cắc!", kèn bóp réo rắt tạo cao trào khi tướng quân xuất trận khai đao.',
    culturalRole: 'Định hình nhịp bước chân vũ đạo tuồng, điều khiển toàn bộ tiết tấu sân khấu của diễn viên.'
  },
  {
    id: 'dieu-nam-ai',
    title: 'Làn Điệu Nam Ai & Trống Chầu Điểm Tấc',
    tempo: 75,
    rhythmDescription: 'Nhịp gõ tang trống chầu thanh tao, tiếng đàn nhị da trăn nỉ non ai oán chia ly.',
    culturalRole: 'Dành cho các phân cảnh bi tráng, than khóc trung nghĩa và lòng trắc ẩn của nhân vật chính trực.'
  }
];
