import type { Movie } from "../../types/movie";
import css from "./MovieCard.module.css";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => (
  <li className={css.card}>
    <h3>{movie.title}</h3>
    {movie.poster_path && (
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
    )}
    <p>{movie.overview}</p>
  </li>
);

export default MovieCard;
