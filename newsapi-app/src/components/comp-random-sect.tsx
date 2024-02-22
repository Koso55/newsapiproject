import { NewsType } from "@/app/types";
import { reformatPublishedAt } from "@/helpers/publishedAt";

export default function RandomSect({ randomNews }: { randomNews: NewsType }) {
  // console.log(randomNews.articles[0], "RANDOM NEWS");
  return (
    <>
      <img
        src={randomNews.articles[0].urlToImage || ""}
        alt="Image Unavailable"
        className="w-full h-full object-cover text-center absolute inset-0"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-white flex flex-col justify-between">
        <div id="news-header" className="text-left">
          <a
            href={randomNews.articles[0].url}
            id="title"
            className="text-2xl font-bold pe-4 text-center hover:text-info transition-colors duration-200"
          >
            {randomNews.articles[0].title}
          </a>
          <div id="source.name" className="badge badge-primary">
            {randomNews.articles[0].source?.name || "Unknown"}
          </div>
        </div>

        <div id="news-content" className="text-right">
          <p id="description" className="text-lg">
            {randomNews.articles[0].description || ""}
          </p>

          <p id="author" className="text-sm">
            Author : {randomNews.articles[0].author || "Unknown"}
          </p>
          <p className="text-sm">
            {reformatPublishedAt(`${randomNews.articles[0].publishedAt}`)}
          </p>
        </div>
      </div>
    </>
  );
}
