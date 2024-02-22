import Carousel from "@/components/comp-carousel";
import { reformatPublishedAt } from "@/helpers/publishedAt";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <section className="flex flex-row flex-wrap h-screen bg-base-200">
        <section id="carousel news" className="w-2/5 h-1/2 p-4">
          {/* Carousel */}
          <Carousel />
        </section>

        <section
          id="top-headline"
          className="grid grid-cols-3 h-1/2 w-3/5 gap-4 p-4"
        >
          <div className="card card-compact min-h-[290px] rounded-none">
            <figure className="">
              <img
                src="https://i.abcnewsfe.com/a/f358c2a2-6ff1-4954-9a5b-c5ff66d3bfc3/James-file-2-gty-ml-240220_1708457880152_hpMain_16x9.jpg?w=1600"
                alt="Letitia James says she's prepared to seize Trump's buildings if he can't pay his $354M civil fraud fine - ABC News"
              />
            </figure>
            <div className="card-body">
              <div className="badge badge-primary" id="source.name">
                ABC News
              </div>
              <h2 className="card-title text-sm line-clamp-3">
                Letitia James says she's prepared to seize Trump's buildings if
                he can't pay his $354M civil fraud fine - ABC News
              </h2>
              <p className="text-xs">
                {reformatPublishedAt("2024-02-21T11:56:25Z")}
              </p>
            </div>
          </div>

          <div className="card card-compact min-h-[290px] rounded-none ">
            <figure className="">
              <img
                src="https://i.abcnewsfe.com/a/f358c2a2-6ff1-4954-9a5b-c5ff66d3bfc3/James-file-2-gty-ml-240220_1708457880152_hpMain_16x9.jpg?w=1600"
                alt="Letitia James says she's prepared to seize Trump's buildings if he can't pay his $354M civil fraud fine - ABC News"
              />
            </figure>
            <div className="card-body">
              <div className="badge badge-primary" id="source.name">
                ABC News
              </div>
              <h2 className="card-title text-sm line-clamp-3">
                Letitia James says she's prepared to seize Trump's buildings if
                he can't pay his $354M civil fraud fine - ABC News
              </h2>
              <p className="text-xs">2024-02-21T11:56:25Z</p>
            </div>
          </div>

          <div className="card card-compact min-h-[290px] rounded-none ">
            <figure className="">
              <img
                src="https://i.abcnewsfe.com/a/f358c2a2-6ff1-4954-9a5b-c5ff66d3bfc3/James-file-2-gty-ml-240220_1708457880152_hpMain_16x9.jpg?w=1600"
                alt="Letitia James says she's prepared to seize Trump's buildings if he can't pay his $354M civil fraud fine - ABC News"
              />
            </figure>
            <div className="card-body">
              <div className="badge badge-primary" id="source.name">
                ABC News
              </div>
              <h2 className="card-title text-sm line-clamp-3">
                Letitia James says she's prepared to seize Trump's buildings if
                he can't pay his $354M civil fraud fine - ABC News
              </h2>
              <p className="text-xs">2024-02-21T11:56:25Z</p>
            </div>
          </div>
        </section>

        <section
          id="latest news"
          className="flex w-3/5 h-1/2 justify-center p-4"
        >
          <div className="flex flex-col bg-base-200 gap-4">
            <div className="flex flex-row gap-4">
              <img
                src="https://i.abcnewsfe.com/a/f358c2a2-6ff1-4954-9a5b-c5ff66d3bfc3/James-file-2-gty-ml-240220_1708457880152_hpMain_16x9.jpg?w=1600"
                className="h-20"
              />
              <div>
                <p className="">
                  Letitia James says she's prepared to seize Trump's buildings
                  if he can't pay his $354M civil fraud fine - ABC News
                </p>
                <p>2024-02-21T11:00:00Z</p>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <img
                src="https://i.abcnewsfe.com/a/f358c2a2-6ff1-4954-9a5b-c5ff66d3bfc3/James-file-2-gty-ml-240220_1708457880152_hpMain_16x9.jpg?w=1600"
                className="h-20 l"
              />
              <div>
                <p className="">
                  Letitia James says she's prepared to seize Trump's buildings
                  if he can't pay his $354M civil fraud fine - ABC News
                </p>
                <p>2024-02-21T11:00:00Z</p>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <img
                src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1460009354.jpg?c=16x9&q=w_800,c_fill"
                className="h-20 l"
              />
              <div>
                <p className="">
                  Letitia James says she's prepared to seize Trump's buildings
                  if he can't pay his $354M civil fraud fine - ABC News
                </p>
                <p>2024-02-21T11:00:00Z</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="for you"
          className="relative flex w-2/5 h-1/2 justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://ichef.bbci.co.uk/news/1024/branded_news/12649/production/_130073357_the_beatles_getty.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="relative z-10 text-white flex flex-col justify-between">
            <div id="news-header" className="text-left">
              <a
                href="https://www.bbc.com/news/entertainment-arts-68350477"
                id="title"
                className="text-2xl font-bold pe-4"
              >
                The Beatles: Sir Sam Mendes to direct four films - one about
                each band member - BBC.com
              </a>
              <div id="source.name" className="badge badge-primary">
                BBC News
              </div>
            </div>

            <div id="news-content" className="text-right">
              <p id="description" className="text-lg">
                Four separate films will tell the story of the band from the
                perspectives of all four members.
              </p>

              <p id="author" className="text-sm">
                Author : Aimee Picchi
              </p>
              <p className="text-sm">2024-02-21T11:00:00Z</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
