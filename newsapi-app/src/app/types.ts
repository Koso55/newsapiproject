export interface CarouselDataType {
  url: string;
  title: string;
  urlImg?: string | null | undefined;
}

export interface MyResponse<T> {
  message?: string;
  error?: string;
  data?: string;
}

export interface NewsType {
  status: string;
  totalResults: number;
  articles: ArticleType[];
}

export interface ArticleType {
  source?: SourceType;
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

export interface SourceType {
  id: any;
  name: string;
}
