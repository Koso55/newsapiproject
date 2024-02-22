import Axios from "../helpers/axios";

export default async function fetchRandom() {
  const categories = [
    "business",
    "entertainment",
    "health",
    "science",
    "technology",
  ];

  const randomIndex = Math.floor(Math.random() * categories.length);

  let { data } = await Axios({
    method: "get",
    url: `/top-headlines?country=us&category=${categories[randomIndex]}&pageSize=1`,
    headers: {
      Authorization: `Bearer ${process.env.NEWSAPI_KEY}`,
    },
  });
  return data;
}
