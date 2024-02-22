import { NewsType } from "@/app/types";
import { reformatPublishedAt } from "@/helpers/publishedAt";
import Link from "next/link";

export default function CardVertical({ sportsNews }: { sportsNews: NewsType }) {
  return (
    <>
      {sportsNews.articles.map((article, idx: number) => {
        return (
          <Link
            href={article.url}
            key={idx + 1}
            className="group transform transition duration-300 hover:bg-base-300 hover:shadow-xl"
          >
            <div className="flex flex-row gap-4">
              <img
                src={article.urlToImage || ""}
                alt={article.title + " Image"}
                className="h-20"
              />
              <div>
                <p className="">{article.title || "Unknown"}</p>
                <p>{reformatPublishedAt(`${article.publishedAt}`)}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
