import Axios from "../helpers/axios";

export default async function fetchTopHeadlines() {
  let { data } = await Axios({
    method: "get",
    url: "/top-headlines?country=us&pageSize=4",
    headers: {
      Authorization: `Bearer ${process.env.NEWSAPI_KEY}`,
    },
  });
  return data;
}
