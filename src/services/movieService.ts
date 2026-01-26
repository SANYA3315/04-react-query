import axios from "axios";
import { MoviesResponse } from "../types/movie";


const API_KEY = "895b458ba10e27d192d38ce26f10884b";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query: string, page: number): Promise<MoviesResponse> => {
  const { data } = await axios.get<MoviesResponse>(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });
  return data;
};