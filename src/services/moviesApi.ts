import axios from "axios";
import { MoviesResponse } from "../types/movie";


const API_KEY = "895b458ba10e27d192d38ce26f10884b";

/**
 * 
 * @param query 
 * @param page 
 * @returns 
 */
export const fetchMovies = async (query: string, page = 1): Promise<MoviesResponse> => {
  const { data } = await axios.get<MoviesResponse>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        api_key: API_KEY,
        query,
        page,
      },
    }
  );
  return data;
};
