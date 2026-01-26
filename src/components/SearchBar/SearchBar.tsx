import { useState, FormEvent } from "react";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Поиск фильмов..."
        className={css.input}
      />
      <button type="submit" className={css.button}>Знайти</button>
    </form>
  );
};

export default SearchBar;
