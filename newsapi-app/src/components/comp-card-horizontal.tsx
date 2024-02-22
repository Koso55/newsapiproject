import { NewsType } from "@/app/types";
import { reformatPublishedAt } from "@/helpers/publishedAt";
import Link from "next/link";

export default function CardHorizontal({
  technologyNews,
}: {
  technologyNews: NewsType;
}) {
  return (
    <>
      {technologyNews.articles.map((article, idx: number) => {
        return (
          <>
            <Link
              href={article.url}
              key={idx + 1}
              className="card card-compact h-[290px] rounded-none group transform transition duration-300 hover:bg-base-300 hover:shadow-xl"
            >
              <figure className="">
                <img
                  src={article.urlToImage}
                  alt={article.title + " Image"}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </figure>
              <div className="card-body">
                <div className="badge badge-primary" id="source.name">
                  {article.source?.name || "Unknown"}
                </div>
                <h2 className="card-title text-sm line-clamp-3">
                  {article.title}
                </h2>
                <p className="text-xs">
                  {reformatPublishedAt(`${article.publishedAt}`)}
                </p>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
}
