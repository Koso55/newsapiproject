import { QueryType } from "@/app/types";
import Axios from "../helpers/axios";

export default async function fetchSearch(queries: QueryType) {
  console.log(queries, "QUERY SEARCH");
  let { data } = await Axios({
    method: "get",
    url: `/everything?q=${queries.q}&pageSize=100`,
    headers: {
      Authorization: `Bearer ${process.env.NEWSAPI_KEY}`,
    },
  });
  return data;
}
