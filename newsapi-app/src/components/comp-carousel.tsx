import { CarouselDataType } from "../app/types";
import PrelineScript from "./PrelineScript";

export default function Carousel() {
  let CarouselData: CarouselDataType[] = [
    {
      url: "https://apnews.com/article/alabama-supreme-court-from-embryos-161390f0758b04a7638e2ddea20df7ca",
      urlImg:
        "https://dims.apnews.com/dims4/default/4639537/2147483647/strip/true/crop/5712x3213+0+536/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F48%2F6e%2Fdef65eee92e31eb8a5fc46036404%2F716b6b7041c04ff68452d83dc0f0f8aa",
      title:
        "Alabama frozen embryos ruling: What it means for fertility treatments - The Associated Press",
    },
    {
      url: "https://pagesix.com/2024/02/20/entertainment/travis-kelce-spotted-back-in-las-vegas-as-fans-speculate-whether-hell-join-taylor-swift-in-australia/",
      urlImg:
        "https://pagesix.com/wp-content/uploads/sites/3/2024/02/76869472.jpg?quality=75&strip=all&w=1024",
      title:
        "Travis Kelce spotted back in Las Vegas as fans speculate whether he’ll join Taylor Swift in Australia",
    },
    {
      url: "https://www.newschannel5.com/news/who-reports-79-percent-increase-in-measles-cases-worldwide",
      urlImg:
        "https://ewscripps.brightspotcdn.com/dims4/default/2c601b2/2147483647/strip/true/crop/1280x672+0+24/resize/1200x630!/quality/90/?url=https%3A%2F%2Fx-default-stgec.uplynk.com%2Fause%2Fslices%2F696%2F9ca48a3b38ef42538c6fe52a659b1e99%2F69642ac4d7a34338be922875a8f8192e%2Fposter_ffc06287d72e45f391499d74d581bb31.png",
      title:
        "WHO reports 79 percent increase in measles cases worldwide - News Channel 5 Nashville",
    },
    {
      url: "https://www.timesofisrael.com/idfs-top-lawyer-warns-against-unacceptable-cases-of-conduct-by-troops-in-gaza/",
      urlImg: null,
      title:
        "IDF’s top lawyer warns against ‘unacceptable cases of conduct’ by troops in Gaza - The Times of Israel",
    },
  ];
  return (
    <>
      <div
        data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full min-h-[290px] bg-white rounded-lg">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {CarouselData.map((slide: CarouselDataType, idx: number) => {
              return (
                <div key={idx + 1} className="hs-carousel-slide relative">
                  <img
                    src={slide.urlImg || ""}
                    alt={slide.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="flex flex-col justify-end text-center pb-8 h-full text-white relative z-10">
                    <a href={slide.url} className="text-lg font-bold">
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
                className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"
              />
            );
          })}
        </div>
      </div>
      <PrelineScript />
    </>
  );
}
