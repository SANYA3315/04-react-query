import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";

import { fetchMovies } from "../../services/moviesApi";
import { MoviesResponse } from "../../types/movie";

import MovieList from "../MovieList/MovieList";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import css from "./App.module.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // ✅ Без keepPreviousData
  const { data, isLoading, isError } = useQuery<MoviesResponse, Error>({
    queryKey: ["movies", query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: query !== "",
    staleTime: 5000, // данные кэшируются на 5 секунд
  });

  const movies = data?.results ?? [];
  const totalPages = data?.total_pages ?? 0;

  const handleSearch = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}

      {totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => setPage(selected + 1)}
          forcePage={page - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextLabel="→"
          previousLabel="←"
        />
      )}
    </div>
  );
};

export default App;
