import { useQuery } from "react-query";
import axios from "axios";

type Item = {
  name: string;
  desc: string[];
  range: string;
};

const useItemsQuery = (url: any) => {
  const fetchItem = async () => {
    const fetch = await axios.get(url);
    return fetch.data;
  };

  const state = useQuery<any, Error, Item>(["SpellItem", url], fetchItem, {
    retry: true,
    select: (data) => ({
      name: data.name,
      desc: data.desc,
      range: data.range,
    }),
  });
  return state;
};
export default useItemsQuery;
