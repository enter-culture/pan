export type Category = '전체' | '춤' | '음악' | '음식' | '축제' | '전통'

export interface Short {
  id: string
  title: string
  thumbnail: string
  videoUrl?: string
  category: Exclude<Category, '전체'>
  description: string
  hashtags: string[]
  relatedCultureId: string
  createdAt: string
}

export interface Culture {
  id: string
  name: string
  subtitle: string
  images: string[]
  location: string
  period: {
    start: string
    end: string
  }
  operatingHours: string[]
  ticketInfo: string[]
}
