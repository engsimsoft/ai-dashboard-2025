export interface NewsItem {
  title: string
  description: string
  url: string
  publishedAt: string
  source: string
  category: string
}

export interface MarketData {
  marketSize: number
  growth: number
  timeframe: string
  lastUpdated: string
} 