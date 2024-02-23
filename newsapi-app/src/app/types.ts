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

export interface QueryType {
  q: string;
  sortBy: string;
  page: string;
}

export interface NewsType {
  status: string;
  totalResults: number;
  articles: ArticleType[];
}

export interface ArticleType {
  source?: SourceType;
  author?: string | null;
  title: string | null;
  description?: string | null;
  url: string;
  urlToImage?: string | null;
  publishedAt: string;
  content?: string | null;
}

export interface SourceType {
  id: any;
  name: string;
}
