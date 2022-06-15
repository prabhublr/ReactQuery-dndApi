import { useQuery } from "react-query";
import axios from "axios";

type API_SPELLS = {
  count: number;
  results: {
    index: string;
    name: string;
    url: string;
  }[];
};

type Spells = {
  index: string;
  name: string;
  url: string;
  fav: boolean;
}[];

const useSpellsSearchQuery = () => {
  const fetchSpells = async () => {
    const fetch = await axios.get(`api/spells`);
    return fetch.data;
  };

  const state = useQuery<API_SPELLS, Error, Spells>(
    "SearchSpells",
    fetchSpells,
    {
      retry: true,
      staleTime: Infinity,
      select: (data) =>
        (data.results ?? []).map((item) => ({
          index: item.index,
          name: item.name,
          url: item.url,
          fav: false,
        })),
    }
  );
  return state;
};
export default useSpellsSearchQuery;
