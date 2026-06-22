import type { Culture } from '@/types'

export const mockCultures: Culture[] = [
  {
    id: 'culture-1',
    name: '천하장사 씨름 대축제',
    subtitle: '씨름판의 \'마지막 왕\'을 가리는 메가 이벤트',
    images: [
      'https://picsum.photos/seed/ssireum1/800/500',
      'https://picsum.photos/seed/ssireum2/800/500',
    ],
    location: '전라남도 영암군 (영암체육관)',
    period: {
      start: '2025.07.12',
      end: '2025.08.16',
    },
    operatingHours: [
      '예매 가능 시간 : 관람 2시간 전까지',
      '공연 시간 : 150분 (인터미션 20분 포함)',
      '8.15(금) 14:00, 19:00',
      '8.16(토) 14:00, 19:00',
    ],
    ticketInfo: [
      'VIP석 : 80,000원',
      'R석 : 60,000원',
      'S석 : 40,000원',
      '현장 구매 불가, 온라인 예매 필수',
    ],
  },
  {
    id: 'culture-2',
    name: '아리랑 국제 페스티벌',
    subtitle: '전통과 현대가 만나는 K-아리랑 대축제',
    images: [
      'https://picsum.photos/seed/arirang1/800/500',
      'https://picsum.photos/seed/arirang2/800/500',
    ],
    location: '서울 잠실종합운동장',
    period: {
      start: '2025.09.20',
      end: '2025.09.22',
    },
    operatingHours: [
      '매일 13:00 ~ 22:00',
      '공연 : 18:00, 20:00 (각 60분)',
    ],
    ticketInfo: [
      '일반 입장 : 30,000원',
      '공연 포함 : 70,000원',
      '7세 이하 무료',
    ],
  },
  {
    id: 'culture-3',
    name: '전주 한식 문화 축제',
    subtitle: '조선의 맛을 오늘에 담다',
    images: [
      'https://picsum.photos/seed/jeonju1/800/500',
      'https://picsum.photos/seed/jeonju2/800/500',
    ],
    location: '전북 전주시 한옥마을',
    period: {
      start: '2025.10.03',
      end: '2025.10.05',
    },
    operatingHours: [
      '10:00 ~ 20:00 (마지막 입장 19:30)',
    ],
    ticketInfo: [
      '입장 무료',
      '체험 프로그램 : 5,000원~20,000원',
    ],
  },
]
