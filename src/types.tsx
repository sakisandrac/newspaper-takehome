export interface ArticleData { 
    status: string,
    totalResults: number,
    articles: Article[]
}

export interface Article {
  source: {
      id: string | null,
      name: string
  },
  author: string,
  title: string,
  url: string,
  description: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

