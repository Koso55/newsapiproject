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
