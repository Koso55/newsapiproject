import { CarouselDataType, NewsType } from "../app/types";
import PrelineScript from "./PrelineScript";

export default function Carousel({
  topHeadlineNews,
}: {
  topHeadlineNews: NewsType;
}) {
  // console.log(topHeadlineNews.articles, "TOPHEADLINENEWS");
  let CarouselData: CarouselDataType[] = topHeadlineNews.articles.map(
    (article) => {
      return {
        url: article.url,
        title: article.title,
        urlImg: article.urlToImage,
      };
    }
  );

  return (
    <>
      <div
        data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
        className="relative"
      >
        <div className="hs-carousel rounded-none relative overflow-hidden w-full min-h-[290px] bg-base-200">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {CarouselData.map((slide: CarouselDataType, idx: number) => {
              return (
                <div key={idx + 1} className="hs-carousel-slide relative">
                  <img
                    src={slide.urlImg || ""}
                    alt={slide.title + " Image"}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="flex flex-col justify-end text-center pb-8 h-full text-white relative z-10">
                    <a
                      href={slide.url}
                      className="text-lg font-bold hover:text-info transition-colors duration-200"
                    >
                      {slide.title}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="white"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="white"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>
        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          {CarouselData.map((slide: CarouselDataType, idx: number) => {
            return (
              <span
                key={idx + 1}
                className="hs-carousel-active:bg-primary hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"
              />
            );
          })}
        </div>
      </div>
      <PrelineScript />
    </>
  );
}
