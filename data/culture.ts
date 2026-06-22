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
  {
    id: 'culture-4',
    name: '안동 국제 탈춤 페스티벌',
    subtitle: '웃음과 해학으로 세계를 잇다',
    images: [
      'https://picsum.photos/seed/talchum1/800/500',
      'https://picsum.photos/seed/talchum2/800/500',
      'https://picsum.photos/seed/talchum3/800/500',
    ],
    location: '경북 안동시 탈춤공연장',
    period: {
      start: '2025.09.26',
      end: '2025.10.05',
    },
    operatingHours: [
      '매일 10:00 ~ 22:00',
      '탈춤 공연 : 14:00, 19:00 (각 90분)',
      '탈 만들기 체험 : 10:00 ~ 17:00',
    ],
    ticketInfo: [
      '자유 입장권 : 5,000원',
      '공연 지정석 : 20,000원',
      '탈 만들기 체험 : 15,000원',
      '안동시민 50% 할인',
    ],
  },
  {
    id: 'culture-5',
    name: '전국 국악 경연 대회',
    subtitle: '판소리부터 사물놀이까지, 소리의 향연',
    images: [
      'https://picsum.photos/seed/gukak1/800/500',
      'https://picsum.photos/seed/gukak2/800/500',
    ],
    location: '서울 국립국악원 예악당',
    period: {
      start: '2025.08.22',
      end: '2025.08.24',
    },
    operatingHours: [
      '8.22(금) 13:00 ~ 21:00',
      '8.23(토) 10:00 ~ 21:00',
      '8.24(일) 10:00 ~ 18:00',
      '결선 공연 : 8.24(일) 15:00',
    ],
    ticketInfo: [
      '예선 관람 무료',
      '결선 지정석 : 30,000원',
      '국악원 회원 20% 할인',
    ],
  },
  {
    id: 'culture-6',
    name: '한국 전통 공예 체험 페스타',
    subtitle: '손으로 만나는 오천 년의 장인 정신',
    images: [
      'https://picsum.photos/seed/craft1/800/500',
      'https://picsum.photos/seed/craft2/800/500',
      'https://picsum.photos/seed/craft3/800/500',
    ],
    location: '경기도 이천 도자기 문화 단지',
    period: {
      start: '2025.09.13',
      end: '2025.09.21',
    },
    operatingHours: [
      '매일 09:00 ~ 18:00',
      '야간 체험 (금·토) : 18:00 ~ 21:00',
    ],
    ticketInfo: [
      '입장 무료',
      '도자기 물레 체험 : 20,000원',
      '한지 공예 체험 : 15,000원',
      '한복 체험 : 10,000원/시간',
      '다도 체험 : 12,000원',
    ],
  },
  {
    id: 'culture-7',
    name: '제주 해녀 문화 체험 센터',
    subtitle: '바다와 함께 숨쉬는 강인한 생명력',
    images: [
      'https://picsum.photos/seed/haenyeo1/800/500',
      'https://picsum.photos/seed/haenyeo2/800/500',
    ],
    location: '제주특별자치도 제주시 구좌읍',
    period: {
      start: '2025.06.01',
      end: '2025.11.30',
    },
    operatingHours: [
      '화~일 09:00 ~ 17:00 (월요일 휴관)',
      '해녀 물질 시연 : 10:00, 14:00 (기상에 따라 변동)',
      '스노클링 체험 : 10:30, 14:30',
    ],
    ticketInfo: [
      '입장 : 성인 8,000원 / 청소년 5,000원 / 어린이 3,000원',
      '해녀 시연 관람 포함',
      '스노클링 체험 : 35,000원 (장비 포함)',
    ],
  },
  {
    id: 'culture-8',
    name: '서울 연등 축제',
    subtitle: '빛으로 하나 되는 천 년의 소원',
    images: [
      'https://picsum.photos/seed/lantern1/800/500',
      'https://picsum.photos/seed/lantern2/800/500',
      'https://picsum.photos/seed/lantern3/800/500',
    ],
    location: '서울 종로 일대 (청계천 ~ 조계사)',
    period: {
      start: '2025.05.02',
      end: '2025.05.06',
    },
    operatingHours: [
      '연등 전시 : 매일 18:00 ~ 23:00',
      '연등 행렬 : 5.3(토) 19:00 (청계광장 출발)',
      '회향 한마당 : 5.4(일) 12:00 ~ 21:00',
    ],
    ticketInfo: [
      '연등 전시 무료 관람',
      '연등 만들기 체험 : 10,000원',
      '소원 연등 달기 : 5,000원',
    ],
  },
]
