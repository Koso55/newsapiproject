import CardHorizontal from "@/components/comp-card-horizontal";
import CardVertical from "@/components/comp-card-vertical";
import Carousel from "@/components/comp-carousel";
import RandomSect from "@/components/comp-random-sect";
import LoadingHome from "./loading";
import fetchRandom from "@/action/fetch-random";
import { NewsType } from "./types";
import fetchTopHeadlines from "@/action/fetch-carousel";
import fetchSports from "@/action/fetch-sports";
import fetchTechnology from "@/action/fetch-technology";

export default async function Home() {
  // return <LoadingHome />;

  let randomNews = await fetchRandom();
  // console.log(randomNews, "FETCH RANDOM NEWS");
  let technologyNews = await fetchTechnology();
  // console.log(technologyNews, "FETCH GENERAL NEWS");
  let topHeadlineNews = await fetchTopHeadlines();
  // console.log(topHeadlineNews, "FETCH TOP HEADLINES");
  let sportsNews = await fetchSports();
  // console.log(sportsNews, "FETCH TOP SPORTS");

  return (
    <main className="min-h-screen min-w-screen">
      <section className="flex flex-row flex-wrap h-screen bg-base-200">
        <section id="carousel-news" className="w-2/5 h-1/2 p-4">
          {/* TOP HEADLINES ONLY */}
          <Carousel topHeadlineNews={topHeadlineNews} />
        </section>

        <section
          id="general-news"
          className="grid grid-cols-3 h-1/2 w-3/5 gap-4 p-4"
        >
          <CardHorizontal technologyNews={technologyNews} />
        </section>

        <section
          id="sports-news"
          className="flex w-3/5 h-1/2 justify-center p-4"
        >
          <div className="flex flex-col bg-base-200 gap-4">
            <CardVertical sportsNews={sportsNews} />
          </div>
        </section>

        <section
          id="random-news"
          className="relative flex w-2/5 h-1/2 justify-center p-4"
        >
          <RandomSect randomNews={randomNews} />
        </section>
      </section>
    </main>
  );
}
