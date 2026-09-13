// 118개 모든 원소 주기율표 데이터베이스
export interface PeriodicElement {
  number: number
  symbol: string
  name: string
  mass: number
  category: '알칼리금속' | '알칼리토금속' | '전이금속' | '전이후금속' | '준금속' | '비금속' | '할로젠' | '비활성기체' | '란타넘족' | '악티늄족'
  electronConfig: string
  description: string
  group: number // 1~18
  period: number // 1~7
}

export const ALL_ELEMENTS: PeriodicElement[] = [
  // 1주기
  { number: 1, symbol: 'H', name: '수소', mass: 1.008, category: '비금속', electronConfig: '1s¹', description: '우주에서 가장 풍부한 원소로 수소 결합과 연소 반응의 기본입니다.', group: 1, period: 1 },
  { number: 2, symbol: 'He', name: '헬륨', mass: 4.0026, category: '비활성기체', electronConfig: '1s²', description: '가장 안정한 비활성 기체로 반응성이 매우 낮습니다.', group: 18, period: 1 },

  // 2주기
  { number: 3, symbol: 'Li', name: '리튬', mass: 6.94, category: '알칼리금속', electronConfig: '[He] 2s¹', description: '가장 가벼운 금속으로 리튬 이온 배터리에 활용됩니다.', group: 1, period: 2 },
  { number: 4, symbol: 'Be', name: '베릴륨', mass: 9.0122, category: '알칼리토금속', electronConfig: '[He] 2s²', description: '합금과 합체 제작에 사용되는 가볍고 강한 금속입니다.', group: 2, period: 2 },
  { number: 5, symbol: 'B', name: '붕소', mass: 10.81, category: '준금속', electronConfig: '[He] 2s² 2p¹', description: '반도체 도핑과 유리에 사용되는 준금속 원소입니다.', group: 13, period: 2 },
  { number: 6, symbol: 'C', name: '탄소', mass: 12.011, category: '비금속', electronConfig: '[He] 2s² 2p²', description: '유기화학과 모든 생명체의 골격을 이루는 원소입니다.', group: 14, period: 2 },
  { number: 7, symbol: 'N', name: '질소', mass: 14.007, category: '비금속', electronConfig: '[He] 2s² 2p³', description: '대기의 78%를 차지하며 아미노산의 구성 요소입니다.', group: 15, period: 2 },
  { number: 8, symbol: 'O', name: '산소', mass: 15.999, category: '비금속', electronConfig: '[He] 2s² 2p⁴', description: '세포 호흡과 연소 반응의 필수적인 원소입니다.', group: 16, period: 2 },
  { number: 9, symbol: 'F', name: '플루오린', mass: 18.998, category: '할로젠', electronConfig: '[He] 2s² 2p⁵', description: '가장 전기음성도가 높은 할로젠 원소입니다.', group: 17, period: 2 },
  { number: 10, symbol: 'Ne', name: '네온', mass: 20.180, category: '비활성기체', electronConfig: '[He] 2s² 2p⁶', description: '네온사인의 주황빛 조명에 쓰이는 비활성 기체입니다.', group: 18, period: 2 },

  // 3주기
  { number: 11, symbol: 'Na', name: '나트륨', mass: 22.990, category: '알칼리금속', electronConfig: '[Ne] 3s¹', description: '소금(NaCl)의 구성 성분이며 신경 전달에 관여합니다.', group: 1, period: 3 },
  { number: 12, symbol: 'Mg', name: '마그네슘', mass: 24.305, category: '알칼리토금속', electronConfig: '[Ne] 3s²', description: '엽록소의 중심 원소이며 경량 합금재로 쓰입니다.', group: 2, period: 3 },
  { number: 13, symbol: 'Al', name: '알루미늄', mass: 26.982, category: '전이후금속', electronConfig: '[Ne] 3s² 3p¹', description: '가볍고 부식에 강한 가공성 금속입니다.', group: 13, period: 3 },
  { number: 14, symbol: 'Si', name: '규소', mass: 28.085, category: '준금속', electronConfig: '[Ne] 3s² 3p²', description: '현대 반도체 산업의 핵심 준금속 소재입니다.', group: 14, period: 3 },
  { number: 15, symbol: 'P', name: '인', mass: 30.974, category: '비금속', electronConfig: '[Ne] 3s² 3p³', description: 'DNA, RNA 및 ATP 에너지 분자의 구성 성분입니다.', group: 15, period: 3 },
  { number: 16, symbol: 'S', name: '황', mass: 32.06, category: '비금속', electronConfig: '[Ne] 3s² 3p⁴', description: '단백질의 디설피드 결합 형성에 관여합니다.', group: 16, period: 3 },
  { number: 17, symbol: 'Cl', name: '염소', mass: 35.45, category: '할로젠', electronConfig: '[Ne] 3s² 3p⁵', description: '강한 자극성을 지닌 소독 및 정수용 원소입니다.', group: 17, period: 3 },
  { number: 18, symbol: 'Ar', name: '아르곤', mass: 39.948, category: '비활성기체', electronConfig: '[Ne] 3s² 3p⁶', description: '대기 중 세 번째로 많은 비활성 기체입니다.', group: 18, period: 3 },

  // 4주기
  { number: 19, symbol: 'K', name: '칼륨', mass: 39.098, category: '알칼리금속', electronConfig: '[Ar] 4s¹', description: '세포 내 전해질 균형과 삼투압 조절에 필수적입니다.', group: 1, period: 4 },
  { number: 20, symbol: 'Ca', name: '칼슘', mass: 40.078, category: '알칼리토금속', electronConfig: '[Ar] 4s²', description: '뼈와 치아 구성, 근육 수축의 핵심 무기질입니다.', group: 2, period: 4 },
  { number: 21, symbol: 'Sc', name: '스칸듐', mass: 44.956, category: '전이금속', electronConfig: '[Ar] 3d¹ 4s²', description: '항공우주 합금에 사용되는 경량 전이금속입니다.', group: 3, period: 4 },
  { number: 22, symbol: 'Ti', name: '티타늄', mass: 47.867, category: '전이금속', electronConfig: '[Ar] 3d² 4s²', description: '강도가 높고 부식에 강해 임플란트 및 항공재로 씁니다.', group: 4, period: 4 },
  { number: 23, symbol: 'V', name: '바나듐', mass: 50.942, category: '전이금속', electronConfig: '[Ar] 3d³ 4s²', description: '강철의 강도를 극대화하는 합금 첨가제입니다.', group: 5, period: 4 },
  { number: 24, symbol: 'Cr', name: '크로뮴', mass: 51.996, category: '전이금속', electronConfig: '[Ar] 3d⁵ 4s¹', description: '스테인리스 스틸의 녹 방지 도금에 쓰입니다.', group: 6, period: 4 },
  { number: 25, symbol: 'Mn', name: '망가니즈', mass: 54.938, category: '전이금속', electronConfig: '[Ar] 3d⁵ 4s²', description: '철강 제조 및 건전지의 탈산제로 널리 쓰입니다.', group: 7, period: 4 },
  { number: 26, symbol: 'Fe', name: '철', mass: 55.845, category: '전이금속', electronConfig: '[Ar] 3d⁶ 4s²', description: '문명과 산소 운반(헤모글로빈)의 핵심 원소입니다.', group: 8, period: 4 },
  { number: 27, symbol: 'Co', name: '코발트', mass: 58.933, category: '전이금속', electronConfig: '[Ar] 3d⁷ 4s²', description: '비타민 B12의 구성 원소이며 자성 합금에 쓰입니다.', group: 9, period: 4 },
  { number: 28, symbol: 'Ni', name: '니켈', mass: 58.693, category: '전이금속', electronConfig: '[Ar] 3d⁸ 4s²', description: '동전 및 이차전지 양극재의 주요 물질입니다.', group: 10, period: 4 },
  { number: 29, symbol: 'Cu', name: '구리', mass: 63.546, category: '전이금속', electronConfig: '[Ar] 3d¹⁰ 4s¹', description: '전도성이 우수한 인류 최초 사용 금속 중 하나입니다.', group: 11, period: 4 },
  { number: 30, symbol: 'Zn', name: '아연', mass: 65.38, category: '전이금속', electronConfig: '[Ar] 3d¹⁰ 4s²', description: '부식 방지 아연도금과 면역 효소 구성에 필수적입니다.', group: 12, period: 4 },
  { number: 31, symbol: 'Ga', name: '갈륨', mass: 69.723, category: '전이후금속', electronConfig: '[Ar] 3d¹⁰ 4s² 4p¹', description: '체온 근처(29.76°C)에서 녹는 화합물 반도체 소재입니다.', group: 13, period: 4 },
  { number: 32, symbol: 'Ge', name: '저마늄', mass: 72.630, category: '준금속', electronConfig: '[Ar] 3d¹⁰ 4s² 4p²', description: '광학 섬유와 초기 트랜지스터에 활용된 준금속입니다.', group: 14, period: 4 },
  { number: 33, symbol: 'As', name: '비소', mass: 74.922, category: '준금속', electronConfig: '[Ar] 3d¹⁰ 4s² 4p³', description: '반도체 과도핑 및 역사적 독약 성분의 준금속입니다.', group: 15, period: 4 },
  { number: 34, symbol: 'Se', name: '셀레늄', mass: 78.971, category: '비금속', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁴', description: '광전 효과를 보이며 필수 항산화 효소 성분입니다.', group: 16, period: 4 },
  { number: 35, symbol: 'Br', name: '브로민', mass: 79.904, category: '할로젠', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁵', description: '실온에서 적갈색 액체로 존재하는 유일한 비금속입니다.', group: 17, period: 4 },
  { number: 36, symbol: 'Kr', name: '크립톤', mass: 83.798, category: '비활성기체', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁶', description: '고성능 레이저와 공항 유도등에 사용되는 비활성기체입니다.', group: 18, period: 4 },

  // 5주기
  { number: 37, symbol: 'Rb', name: '루비듐', mass: 85.468, category: '알칼리금속', electronConfig: '[Kr] 5s¹', description: '원자시계와 레이저 냉각에 활용되는 반응성 알칼리금속입니다.', group: 1, period: 5 },
  { number: 38, symbol: 'Sr', name: '스트론튬', mass: 87.62, category: '알칼리토금속', electronConfig: '[Kr] 5s²', description: '불꽃놀이에서 선명한 붉은색을 내는 원소입니다.', group: 2, period: 5 },
  { number: 39, symbol: 'Y', name: '이틀륨', mass: 88.906, category: '전이금속', electronConfig: '[Kr] 4d¹ 5s²', description: '초전도체(YBCO)와 레이저 결정(YAG)의 핵심 성분입니다.', group: 3, period: 5 },
  { number: 40, symbol: 'Zr', name: '지르코늄', mass: 91.224, category: '전이금속', electronConfig: '[Kr] 4d² 5s²', description: '원자로 피복재와 인공 보석(지르코니아) 소재입니다.', group: 4, period: 5 },
  { number: 41, symbol: 'Nb', name: '나이오븀', mass: 92.906, category: '전이금속', electronConfig: '[Kr] 4d⁴ 5s¹', description: '초전도 자석 및 고강도 합금에 사용됩니다.', group: 5, period: 5 },
  { number: 42, symbol: 'Mo', name: '몰리브데넘', mass: 95.95, category: '전이금속', electronConfig: '[Kr] 4d⁵ 5s¹', description: '초고온 내열 합금과 촉매에 필수적인 원소입니다.', group: 6, period: 5 },
  { number: 43, symbol: 'Tc', name: '테크네튬', mass: 98, category: '전이금속', electronConfig: '[Kr] 4d⁵ 5s²', description: '최초의 인공 합성 방사성 원소로 핵의학 진단에 쓰입니다.', group: 7, period: 5 },
  { number: 44, symbol: 'Ru', name: '루테늄', mass: 101.07, category: '전이금속', electronConfig: '[Kr] 4d⁷ 5s¹', description: '전자 부품 및 촉매로 사용되는 백금족 금속입니다.', group: 8, period: 5 },
  { number: 45, symbol: 'Rh', name: '로듐', mass: 102.91, category: '전이금속', electronConfig: '[Kr] 4d⁸ 5s¹', description: '희소하고 내식성이 우수한 고가 귀금속 촉매입니다.', group: 9, period: 5 },
  { number: 46, symbol: 'Pd', name: '팔라듐', mass: 106.42, category: '전이금속', electronConfig: '[Kr] 4d¹⁰', description: '수소 흡수 능력이 뛰어난 자동차 배기 촉매 금속입니다.', group: 10, period: 5 },
  { number: 47, symbol: 'Ag', name: '은', mass: 107.87, category: '전이금속', electronConfig: '[Kr] 4d¹⁰ 5s¹', description: '모든 금속 중 전기 및 열 전도율이 가장 높습니다.', group: 11, period: 5 },
  { number: 48, symbol: 'Cd', name: '카드뮴', mass: 112.41, category: '전이금속', electronConfig: '[Kr] 4d¹⁰ 5s²', description: '전지 및 안료로 쓰이나 이타이이타이병의 원인독성 금속입니다.', group: 12, period: 5 },
  { number: 49, symbol: 'In', name: '인듐', mass: 114.82, category: '전이후금속', electronConfig: '[Kr] 4d¹⁰ 5s² 5p¹', description: '디스플레이 투명전극(ITO)의 필수 원소입니다.', group: 13, period: 5 },
  { number: 50, symbol: 'Sn', name: '주석', mass: 118.71, category: '전이후금속', electronConfig: '[Kr] 4d¹⁰ 5s² 5p²', description: '청동 합금과 땜납(납땜)의 고전적 가공 금속입니다.', group: 14, period: 5 },
  { number: 51, symbol: 'Sb', name: '안티머니', mass: 121.76, category: '준금속', electronConfig: '[Kr] 4d¹⁰ 5s² 5p³', description: '난연제 및 반도체 소재로 쓰이는 준금속입니다.', group: 15, period: 5 },
  { number: 52, symbol: 'Te', name: '텔루륨', mass: 127.60, category: '준금속', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁴', description: '열전 소자 및 태양전지에 쓰이는 은백색 준금속입니다.', group: 16, period: 5 },
  { number: 53, symbol: 'I', name: '아이오딘', mass: 126.90, category: '할로젠', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁵', description: '갑상샘 호르몬(티록신)의 필수 구성 성분입니다.', group: 17, period: 5 },
  { number: 54, symbol: 'Xe', name: '제논', mass: 131.29, category: '비활성기체', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁶', description: '우주선 이온 추진 엔진과 마취 가스로 쓰입니다.', group: 18, period: 5 },

  // 6주기 (55~86)
  { number: 55, symbol: 'Cs', name: '세슘', mass: 132.91, category: '알칼리금속', electronConfig: '[Xe] 6s¹', description: '초당 9,192,631,770번 진동하여 1초의 표준 정의가 되는 원자시계 원소입니다.', group: 1, period: 6 },
  { number: 56, symbol: 'Ba', name: '바륨', mass: 137.33, category: '알칼리토금속', electronConfig: '[Xe] 6s²', description: 'X선 소화관 조영제 및 불꽃놀이 녹색 소재입니다.', group: 2, period: 6 },
  // 란타넘족 (57~71)
  { number: 57, symbol: 'La', name: '란타넘', mass: 138.91, category: '란타넘족', electronConfig: '[Xe] 5d¹ 6s²', description: '란타넘족의 시작점으로 광학 유리 소재입니다.', group: 3, period: 6 },
  { number: 58, symbol: 'Ce', name: '세륨', mass: 140.12, category: '란타넘족', electronConfig: '[Xe] 4f¹ 5d¹ 6s²', description: '희토류 중 가장 풍부하며 연마제로 쓰입니다.', group: 3, period: 6 },
  { number: 59, symbol: 'Pr', name: '프라세오디뮴', mass: 140.91, category: '란타넘족', electronConfig: '[Xe] 4f³ 6s²', description: '강력한 자석과 세라믹 안료 소재입니다.', group: 3, period: 6 },
  { number: 60, symbol: 'Nd', name: '네오디뮴', mass: 144.24, category: '란타넘족', electronConfig: '[Xe] 4f⁴ 6s²', description: '세계에서 가장 강력한 영구자석(NdFeB) 소재입니다.', group: 3, period: 6 },
  { number: 61, symbol: 'Pm', name: '프로메튬', mass: 145, category: '란타넘족', electronConfig: '[Xe] 4f⁵ 6s²', description: '방사성 란타넘족 원소로 자광 도료에 씁니다.', group: 3, period: 6 },
  { number: 62, symbol: 'Sm', name: '사마륨', mass: 150.36, category: '란타넘족', electronConfig: '[Xe] 4f⁶ 6s²', description: '고온에 강한 사마륨-코발트 자석 소재입니다.', group: 3, period: 6 },
  { number: 63, symbol: 'Eu', name: '유로퓸', mass: 151.96, category: '란타넘족', electronConfig: '[Xe] 4f⁷ 6s²', description: '유로화 위조방지 형광 물질로 쓰입니다.', group: 3, period: 6 },
  { number: 64, symbol: 'Gd', name: '가돌리늄', mass: 157.25, category: '란타넘족', electronConfig: '[Xe] 4f⁷ 5d¹ 6s²', description: 'MRI 조영제 및 상온 상자기성 물질입니다.', group: 3, period: 6 },
  { number: 65, symbol: 'Tb', name: '터븀', mass: 158.93, category: '란타넘족', electronConfig: '[Xe] 4f⁹ 6s²', description: '초음파 진동자 및 형광체 소재입니다.', group: 3, period: 6 },
  { number: 66, symbol: 'Dy', name: '디스프로슘', mass: 162.50, category: '란타넘족', electronConfig: '[Xe] 4f¹⁰ 6s²', description: '고온 네오디뮴 자석 성능 유지용 보조제입니다.', group: 3, period: 6 },
  { number: 67, symbol: 'Ho', name: '홀뮴', mass: 164.93, category: '란타넘족', electronConfig: '[Xe] 4f¹¹ 6s²', description: '가장 강한 자기 모멘트를 지닌 원소 중 하나입니다.', group: 3, period: 6 },
  { number: 68, symbol: 'Er', name: '어븀', mass: 167.26, category: '란타넘족', electronConfig: '[Xe] 4f¹² 6s²', description: '광통신 신호 증폭기(EDFA) 소재입니다.', group: 3, period: 6 },
  { number: 69, symbol: 'Tm', name: '툴륨', mass: 168.93, category: '란타넘족', electronConfig: '[Xe] 4f¹³ 6s²', description: '휴대용 X선 기기 광원으로 활용됩니다.', group: 3, period: 6 },
  { number: 70, symbol: 'Yb', name: '이테르븀', mass: 173.05, category: '란타넘족', electronConfig: '[Xe] 4f¹⁴ 6s²', description: '정밀 시계 및 응력 계측기에 쓰입니다.', group: 3, period: 6 },
  { number: 71, symbol: 'Lu', name: '루테튬', mass: 174.97, category: '란타넘족', electronConfig: '[Xe] 4f¹⁴ 5d¹ 6s²', description: '란타넘족의 마지막 원소로 PET 스캐너 소재입니다.', group: 3, period: 6 },
  // 6주기 전이금속/후금속 (72~86)
  { number: 72, symbol: 'Hf', name: '하프늄', mass: 178.49, category: '전이금속', electronConfig: '[Xe] 4f¹⁴ 5d² 6s²', description: '반도체 고유전율(High-k) 게이트절연막 소재입니다.', group: 4, period: 6 },
  { number: 73, symbol: 'Ta', name: '탄탈럼', mass: 180.95, category: '전이금속', electronConfig: '[Xe] 4f¹⁴ 5d³ 6s²', description: '스마트폰 커패시터 및 의료용 인공관절 소재입니다.', group: 5, period: 6 },
  { number: 74, symbol: 'W', name: '텅스텐', mass: 183.84, category: '전이금속', electronConfig: '[Xe] 4f¹⁴ 5d⁴ 6s²', description: '녹는점이 가장 높은 금속(3422°C)으로 전구 및 초경공구재입니다.', group: 6, period: 6 },
  { number: 75, symbol: 'Re', name: '레늄', mass: 186.21, category: '전이금속', electronConfig: '[Xe] 4f¹⁴ 5d⁵ 6s²', description: '제트엔진 터빈 날개 내열 합금 부품입니다.', group: 7, period: 6 },
  { number: 76, symbol: 'Os', name: '오스뮴', mass: 190.23, category: '전이금속', electronConfig: '[Xe] 4f¹⁴ 5d⁶ 6s²', description: '자연계에서 밀도가 가장 높은 천연 금속(22.59 g/cm³)입니다.', group: 8, period: 6 },
  { number: 77, symbol: 'Ir', name: '이리듐', mass: 192.22, category: '전이금속', electronConfig: '[Xe] 4f¹⁴ 5d⁷ 6s²', description: 'K-Pg 공룡 멸종층(이리듐층)의 지표 원소입니다.', group: 9, period: 6 },
  { number: 78, symbol: 'Pt', name: '백금', mass: 195.08, category: '전이금속', electronConfig: '[Xe] 4f¹⁴ 5d⁹ 6s¹', description: '화학 촉매 및 최고급 귀금속입니다.', group: 10, period: 6 },
  { number: 79, symbol: 'Au', name: '금', mass: 196.97, category: '전이금속', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', description: '연성과 전성이 뛰어난 변하지 않는 귀금속 대표입니다.', group: 11, period: 6 },
  { number: 80, symbol: 'Hg', name: '수은', mass: 200.59, category: '전이금속', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', description: '상온에서 액체 상태인 유일한 금속 원소입니다.', group: 12, period: 6 },
  { number: 81, symbol: 'Tl', name: '탈륨', mass: 204.38, category: '전이후금속', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', description: '독성이 매우 강한 맹독성 6주기 금속입니다.', group: 13, period: 6 },
  { number: 82, symbol: 'Pb', name: '납', mass: 207.2, category: '전이후금속', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', description: '방사선 차폐재로 쓰이며 방사성 붕괴의 최종 생성물입니다.', group: 14, period: 6 },
  { number: 83, symbol: 'Bi', name: '비스무트', mass: 208.98, category: '전이후금속', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', description: '아름다운 무지개색 결정 표면을 가진 안전한 중금속입니다.', group: 15, period: 6 },
  { number: 84, symbol: 'Po', name: '폴로늄', mass: 209, category: '준금속', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', description: '마리 퀴리가 발견한 강한 알파선 분출 방사성 원소입니다.', group: 16, period: 6 },
  { number: 85, symbol: 'At', name: '아스타틴', mass: 210, category: '할로젠', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', description: '지각에 30g 미만만 존재하는 지극히 희귀한 방사성 할로젠입니다.', group: 17, period: 6 },
  { number: 86, symbol: 'Rn', name: '라돈', mass: 222, category: '비활성기체', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', description: '지하 암석에서 분출되는 방사성 기체 원소입니다.', group: 18, period: 6 },

  // 7주기 (87~118)
  { number: 87, symbol: 'Fr', name: '프랑슘', mass: 223, category: '알칼리금속', electronConfig: '[Rn] 7s¹', description: '반감기가 22분에 불과한 매우 불안정한 알칼리금속입니다.', group: 1, period: 7 },
  { number: 88, symbol: 'Ra', name: '라듐', mass: 226, category: '알칼리토금속', electronConfig: '[Rn] 7s²', description: '마리 퀴리가 피치블렌드에서 발견한 어둠속 형광 방사성 원소입니다.', group: 2, period: 7 },
  // 악티늄족 (89~103)
  { number: 89, symbol: 'Ac', name: '악티늄', mass: 227, category: '악티늄족', electronConfig: '[Rn] 6d¹ 7s²', description: '악티늄족 시리즈의 시작 원소입니다.', group: 3, period: 7 },
  { number: 90, symbol: 'Th', name: '토륨', mass: 232.04, category: '악티늄족', electronConfig: '[Rn] 6d² 7s²', description: '차세대 원자로(토륨 원자로) 연료 후보 원소입니다.', group: 3, period: 7 },
  { number: 91, symbol: 'Pa', name: '프로트악티늄', mass: 231.04, category: '악티늄족', electronConfig: '[Rn] 5f² 6d¹ 7s²', description: '우라늄 붕괴 과정에서 생성되는 희귀 방사성 원소입니다.', group: 3, period: 7 },
  { number: 92, symbol: 'U', name: '우라늄', mass: 238.03, category: '악티늄족', electronConfig: '[Rn] 5f³ 6d¹ 7s²', description: '원자력 발전 및 핵분열의 주 원료 천연 방사성 원소입니다.', group: 3, period: 7 },
  { number: 93, symbol: 'Np', name: '넵투늄', mass: 237, category: '악티늄족', electronConfig: '[Rn] 5f⁴ 6d¹ 7s²', description: '최초로 발견된 인공 초우라늄 원소입니다.', group: 3, period: 7 },
  { number: 94, symbol: 'Pu', name: '플루토늄', mass: 244, category: '악티늄족', electronConfig: '[Rn] 5f⁶ 7s²', description: '핵무기 및 우주 탐사선 원자력 전지(RTG) 원료입니다.', group: 3, period: 7 },
  { number: 95, symbol: 'Am', name: '아메리슘', mass: 243, category: '악티늄족', electronConfig: '[Rn] 5f⁷ 7s²', description: '화재 감지기(연기 감지기) 센서에 쓰이는 인공 원소입니다.', group: 3, period: 7 },
  { number: 96, symbol: 'Cm', name: '퀴륨', mass: 247, category: '악티늄족', electronConfig: '[Rn] 5f⁷ 6d¹ 7s²', description: '퀴리 부부를 기리기 위해 명명된 알파선원 인공 원소입니다.', group: 3, period: 7 },
  { number: 97, symbol: 'Bk', name: '버클륨', mass: 247, category: '악티늄족', electronConfig: '[Rn] 5f⁹ 7s²', description: '버클리 캘리포니아 대학교에서 합성된 원소입니다.', group: 3, period: 7 },
  { number: 98, symbol: 'Cf', name: '캘리포늄', mass: 251, category: '악티늄족', electronConfig: '[Rn] 5f¹⁰ 7s²', description: '강력한 중성자를 방출해 유정 탐사 등에 쓰는 고가 원소입니다.', group: 3, period: 7 },
  { number: 99, symbol: 'Es', name: '아인슈타이니움', mass: 252, category: '악티늄족', electronConfig: '[Rn] 5f¹¹ 7s²', description: '수소폭발 실험 재에서 아인슈타인을 기려 발견되었습니다.', group: 3, period: 7 },
  { number: 100, symbol: 'Fm', name: '페르미움', mass: 257, category: '악티늄족', electronConfig: '[Rn] 5f¹² 7s²', description: '엔리코 페르미를 기려 명명된 초우라늄 원소입니다.', group: 3, period: 7 },
  { number: 101, symbol: 'Md', name: '멘델레븀', mass: 258, category: '악티늄족', electronConfig: '[Rn] 5f¹³ 7s²', description: '주기율표 창시자 멘델레예프를 기려 만든 인공 원소입니다.', group: 3, period: 7 },
  { number: 102, symbol: 'No', name: '노벨륨', mass: 259, category: '악티늄족', electronConfig: '[Rn] 5f¹⁴ 7s²', description: '알프레드 노벨을 기려 합성된 방사성 원소입니다.', group: 3, period: 7 },
  { number: 103, symbol: 'Lr', name: '로렌슘', mass: 266, category: '악티늄족', electronConfig: '[Rn] 5f¹⁴ 6d¹ 7s²', description: '사이클로트론 발명자 로렌스를 기린 악티늄족 마감 원소입니다.', group: 3, period: 7 },
  // 초중원소 (104~118)
  { number: 104, symbol: 'Rf', name: '러더포듐', mass: 267, category: '전이금속', electronConfig: '[Rn] 5f¹⁴ 6d² 7s²', description: '러더퍼드를 기려 명명된 4족 초중원소입니다.', group: 4, period: 7 },
  { number: 105, symbol: 'Db', name: '더브늄', mass: 268, category: '전이금속', electronConfig: '[Rn] 5f¹⁴ 6d³ 7s²', description: '러시아 더브나 연구소를 기려 명명된 5족 원소입니다.', group: 5, period: 7 },
  { number: 106, symbol: 'Sg', name: '시보그늄', mass: 269, category: '전이금속', electronConfig: '[Rn] 5f¹⁴ 6d⁴ 7s²', description: '글렌 시보그가 살아있을 때 명명된 유일했던 원소입니다.', group: 6, period: 7 },
  { number: 107, symbol: 'Bh', name: '보륨', mass: 270, category: '전이금속', electronConfig: '[Rn] 5f¹⁴ 6d⁵ 7s²', description: '닐스 보어를 기려 명명된 7족 초중원소입니다.', group: 7, period: 7 },
  { number: 108, symbol: 'Hs', name: '하슘', mass: 277, category: '전이금속', electronConfig: '[Rn] 5f¹⁴ 6d⁶ 7s²', description: '독일 헤센(Hesse) 주의 라틴어명을 딴 원소입니다.', group: 8, period: 7 },
  { number: 109, symbol: 'Mt', name: '마이트너륨', mass: 278, category: '전이금속', electronConfig: '[Rn] 5f¹⁴ 6d⁷ 7s²', description: '핵분열 발견자 리제 마이트너를 기린 원소입니다.', group: 9, period: 7 },
  { number: 110, symbol: 'Ds', name: '다름슈타튬', mass: 281, category: '전이금속', electronConfig: '[Rn] 5f¹⁴ 6d⁸ 7s²', description: '독일 다름슈타트 중이온연구소에서 합성되었습니다.', group: 10, period: 7 },
  { number: 111, symbol: 'Rg', name: '뢴트게늄', mass: 282, category: '전이금속', electronConfig: '[Rn] 5f¹⁴ 6d⁹ 7s²', description: 'X선 발견자 뢴트겐을 기려 명명된 11족 원소입니다.', group: 11, period: 7 },
  { number: 112, symbol: 'Cn', name: '코페르니슘', mass: 285, category: '전이금속', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', description: '지동설의 코페르니쿠스를 기려 명명된 12족 원소입니다.', group: 12, period: 7 },
  { number: 113, symbol: 'Nh', name: '니호늄', mass: 286, category: '전이후금속', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', description: '일본(니혼) RIKEN 연구소에서 최초 합성한 아시아의 원소입니다.', group: 13, period: 7 },
  { number: 114, symbol: 'Fl', name: '플레로븀', mass: 289, category: '전이후금속', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', description: '플레로프 핵심물리 연구소를 기려 명명되었습니다.', group: 14, period: 7 },
  { number: 115, symbol: 'Mc', name: '모스코븀', mass: 290, category: '전이후금속', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', description: '모스크바 주를 기려 명명된 15족 초중원소입니다.', group: 15, period: 7 },
  { number: 116, symbol: 'Lv', name: '리버모륨', mass: 293, category: '전이후금속', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', description: '미국 로렌스 리버모어 국립연구소를 기려 명명되었습니다.', group: 16, period: 7 },
  { number: 117, symbol: 'Ts', name: '테네신', mass: 294, category: '할로젠', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', description: '미국 테네시 주연구소 합동으로 합성된 117번 원소입니다.', group: 17, period: 7 },
  { number: 118, symbol: 'Og', name: '오가네손', mass: 294, category: '비활성기체', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', description: '주기율표의 마감 원소(118번)로 유리 오가네시안 교수의 이름을 땄습니다.', group: 18, period: 7 },
]
