import Axios from "../helpers/axios";

export default async function fetchTechnology() {
  let { data } = await Axios({
    method: "get",
    url: "/top-headlines?country=us&category=technology&pageSize=3",
    headers: {
      Authorization: `Bearer ${process.env.NEWSAPI_KEY}`,
    },
  });
  return data;
}
