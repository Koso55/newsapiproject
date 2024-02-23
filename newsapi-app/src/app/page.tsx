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

  // let randomNews = await fetchRandom();
  // // console.log(randomNews, "FETCH RANDOM NEWS");
  // let technologyNews = await fetchTechnology();
  // // console.log(technologyNews, "FETCH GENERAL NEWS");
  // let topHeadlineNews = await fetchTopHeadlines();
  // // console.log(topHeadlineNews, "FETCH TOP HEADLINES");
  // let sportsNews = await fetchSports();
  // // console.log(sportsNews, "FETCH TOP SPORTS");

  //STATIC DATA, USE IF YOU WANT TO TEST IT OFFLINE
  let randomNews: NewsType = {
    status: "ok",
    totalResults: 55,
    articles: [
      {
        source: {
          id: null,
          name: "Foxweather.com",
        },
        author: "Aaron Barker",
        title:
          "The Daily Weather Update from FOX Weather: US company prepares for attempt at historic Moon landing - Fox Weather ",
        description:
          "Start your day with the latest weather news – Texas-based Intuitive Machines is hoping to become the first company in the world to put a private lander on the Moon. It would be the first time the U.S. has landed anything on the lunar surface since the Apollo …",
        url: "https://www.foxweather.com/weather-news/daily-weather-update-february-22-2024",
        urlToImage:
          "https://images.foxweather.com/static.foxweather.com/www.foxweather.com/content/uploads/2024/02/1024/512/im-nova-at-moon.jpg?ve=1&tl=1",
        publishedAt: "2024-02-22T11:28:00Z",
        content:
          "Welcome to the Daily Weather Update from FOX Weather. It’s Thursday, Feb. 22, 2024, and National California Day. Start your day with everything you need to know about today's weather. You can also ge… [+1784 chars]",
      },
    ],
  };

  let technologyNews = {
    status: "ok",
    totalResults: 29,
    articles: [
      {
        source: {
          id: "the-verge",
          name: "The Verge",
        },
        author: "Tom Warren",
        title:
          "Google pauses Gemini's ability to generate AI images of people after diversity errors - The Verge",
        description:
          "Google is at the center of a controversy around AI-generated images of people. The search giant is pausing this feature after it generated inaccurate historical images.",
        url: "https://www.theverge.com/2024/2/22/24079876/google-gemini-ai-photos-people-pause",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/eWERojRvuObvL-SEhsSm-CXpKW8=/0x0:4819x3144/1200x628/filters:focal(2410x1572:2411x1573)/cdn.vox-cdn.com/uploads/chorus_asset/file/25298836/1943_soldier.jpg",
        publishedAt: "2024-02-22T10:30:56Z",
        content:
          "Google pauses Geminis ability to generate AI images of people after diversity errors\r\nGoogle pauses Geminis ability to generate AI images of people after diversity errors\r\n / The companys attempts to… [+2436 chars]",
      },
      {
        source: {
          id: null,
          name: "Samsung.com",
        },
        author: null,
        title:
          "New One UI 6.1 Update Brings Galaxy AI to More Galaxy Devices - Samsung US",
        description:
          "Samsung accelerates the global expansion of mobile AI by enabling users to experience Galaxy AI on previous models",
        url: "https://news.samsung.com/global/new-one-ui-6-1-update-brings-galaxy-ai-to-more-galaxy-devices",
        urlToImage:
          "https://img.global.news.samsung.com/global/wp-content/uploads/2024/02/One-UI-6.1-Update_Thumbnail728-final.jpg",
        publishedAt: "2024-02-22T03:03:08Z",
        content:
          "Samsung Electronics today announced the availability of Galaxy AI1 features on more Galaxy devices through a new One UI 6.1 update engineered to further the democratization of mobile AI. The update w… [+5167 chars]",
      },
      {
        source: {
          id: null,
          name: "Nikkei.com",
        },
        author: "LAULY LI",
        title:
          "Google plans to begin Pixel phone production in India in Q2 - Nikkei Asia",
        description:
          "Search engine giant joins Apple, Samsung in tapping big South Asian market",
        url: "https://asia.nikkei.com/Spotlight/Supply-Chain/Google-plans-to-begin-Pixel-phone-production-in-India-in-Q2",
        urlToImage:
          "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fcms-image-bucket-production-ap-northeast-1-a7d2.s3.ap-northeast-1.amazonaws.com%2Fimages%2F9%2F6%2F8%2F1%2F47311869-1-eng-GB%2F2023-10-04T174742Z_1601562952_RC2RL3AGLA49_RTRMADP_3_GOOGLE-PIXEL.jpg?width=1260&height=630&fit=cover&gravity=faces&source=nar-cms",
        publishedAt: "2024-02-22T03:03:00Z",
        content:
          "TAIPEI -- Google has told suppliers to start making its Pixel smartphones in India by the next quarter at the earliest, underlining the American search engine giant's determination to further diversi… [+382 chars]",
      },
    ],
  };

  let topHeadlineNews = {
    status: "ok",
    totalResults: 34,
    articles: [
      {
        source: {
          id: null,
          name: "The Athletic",
        },
        author: "Laia Cervelló Herrero",
        title:
          "Dani Alves sentenced to four and a half years in prison for sexual assault - The Athletic",
        description:
          "Former Barcelona and Brazil full-back Dani Alves has been sentenced to four and a half years in prison for sexual assault.\nAlves, 40, was arrested by local police in January 2023 as part of an investigation into an alleged sexual assault at a nightclub in Bar…",
        url: "https://theathletic.com/5290094/2024/02/22/dani-alves-sexual-assault-verdict/",
        urlToImage:
          "https://cdn.theathletic.com/app/uploads/2024/02/21105255/GettyImages-1979095847-1-scaled-e1708530788904.jpg",
        publishedAt: "2024-02-22T12:01:16Z",
        content:
          "Former Barcelona and Brazil full-back Dani Alves has been sentenced to four and a half years in prison for sexual assault.\r\nAlves, 40, was arrested by local police in January 2023 as part of an inves… [+3030 chars]",
      },
      {
        source: {
          id: null,
          name: "The Atlantic",
        },
        author: "Conor Friedersdorf",
        title:
          "What South Carolina Voters Should Hear About Donald Trump - The Atlantic",
        description: "Trump brings out the worst in Americans. Haley wouldn’t.",
        url: "https://www.theatlantic.com/ideas/archive/2024/02/republican-primaries-south-carolina-trump-haley/677526/",
        urlToImage:
          "https://cdn.theatlantic.com/thumbor/ppQYZe6xuV-c7TPSxiOyFe408ps=/0x43:2000x1085/1200x625/media/img/mt/2024/02/Haley/original.png",
        publishedAt: "2024-02-22T12:00:00Z",
        content:
          "If Donald Trump beats Nikki Haley on Saturday in her home state of South Carolina, where he leads in the polls, hes a cinch to win the GOP nomination. And if he wins the GOP nomination, he has a very… [+4441 chars]",
      },
      {
        source: {
          id: null,
          name: "NBCSports.com",
        },
        author: "Josh Alper",
        title:
          "Falcons have become betting favorites to land Justin Fields - NBC Sports",
        description:
          "Fields grew up outside of Atlanta and started his college time at Georgia.",
        url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/falcons-have-become-betting-favorites-to-land-justin-fields",
        urlToImage:
          "https://nbcsports.brightspotcdn.com/dims4/default/193135b/2147483647/strip/true/crop/3000x1688+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fa8%2F71%2Fe55a02524dc790b0b27f44789555%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1918564550",
        publishedAt: "2024-02-22T11:39:03Z",
        content:
          "Quarterback Justin Fields said on the St. Brown Bros podcast this week that he doesnt want to be traded away from the Bears, but acknowledged that the teams choice about keeping him or trading him wh… [+1209 chars]",
      },
      {
        source: {
          id: null,
          name: "Foxweather.com",
        },
        author: "Aaron Barker",
        title:
          "The Daily Weather Update from FOX Weather: US company prepares for attempt at historic Moon landing - Fox Weather ",
        description:
          "Start your day with the latest weather news – Texas-based Intuitive Machines is hoping to become the first company in the world to put a private lander on the Moon. It would be the first time the U.S. has landed anything on the lunar surface since the Apollo …",
        url: "https://www.foxweather.com/weather-news/daily-weather-update-february-22-2024",
        urlToImage:
          "https://images.foxweather.com/static.foxweather.com/www.foxweather.com/content/uploads/2024/02/1024/512/im-nova-at-moon.jpg?ve=1&tl=1",
        publishedAt: "2024-02-22T11:28:00Z",
        content:
          "Welcome to the Daily Weather Update from FOX Weather. It’s Thursday, Feb. 22, 2024, and National California Day. Start your day with everything you need to know about today's weather. You can also ge… [+1784 chars]",
      },
    ],
  };

  let sportsNews = {
    status: "ok",
    totalResults: 70,
    articles: [
      {
        source: {
          id: null,
          name: "The Athletic",
        },
        author: "Laia Cervelló Herrero",
        title:
          "Dani Alves sentenced to four and a half years in prison for sexual assault - The Athletic",
        description:
          "Former Barcelona and Brazil full-back Dani Alves has been sentenced to four and a half years in prison for sexual assault.\nAlves, 40, was arrested by local police in January 2023 as part of an investigation into an alleged sexual assault at a nightclub in Bar…",
        url: "https://theathletic.com/5290094/2024/02/22/dani-alves-sexual-assault-verdict/",
        urlToImage:
          "https://cdn.theathletic.com/app/uploads/2024/02/21105255/GettyImages-1979095847-1-scaled-e1708530788904.jpg",
        publishedAt: "2024-02-22T12:01:16Z",
        content:
          "Former Barcelona and Brazil full-back Dani Alves has been sentenced to four and a half years in prison for sexual assault.\r\nAlves, 40, was arrested by local police in January 2023 as part of an inves… [+3030 chars]",
      },
      {
        source: {
          id: null,
          name: "NBCSports.com",
        },
        author: "Josh Alper",
        title:
          "Falcons have become betting favorites to land Justin Fields - NBC Sports",
        description:
          "Fields grew up outside of Atlanta and started his college time at Georgia.",
        url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/falcons-have-become-betting-favorites-to-land-justin-fields",
        urlToImage:
          "https://nbcsports.brightspotcdn.com/dims4/default/193135b/2147483647/strip/true/crop/3000x1688+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fa8%2F71%2Fe55a02524dc790b0b27f44789555%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1918564550",
        publishedAt: "2024-02-22T11:39:03Z",
        content:
          "Quarterback Justin Fields said on the St. Brown Bros podcast this week that he doesnt want to be traded away from the Bears, but acknowledged that the teams choice about keeping him or trading him wh… [+1209 chars]",
      },
      {
        source: {
          id: null,
          name: "MLB.com",
        },
        author: "MLB.com",
        title: "Royals announce jersey patch sponsor with QuikTrip - MLB.com",
        description: null,
        url: "https://www.mlb.com/news/royals-announce-jersey-patch-sponsor-with-quiktrip",
        urlToImage: null,
        publishedAt: "2024-02-22T10:31:23Z",
        content: null,
      },
    ],
  };

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
