import Axios from "../helpers/axios";

export default async function fetchSports() {
  let { data } = await Axios({
    method: "get",
    url: "/top-headlines?country=us&category=sports&pageSize=3",
    headers: {
      Authorization: `Bearer ${process.env.NEWSAPI_KEY}`,
    },
  });
  return data;
}
