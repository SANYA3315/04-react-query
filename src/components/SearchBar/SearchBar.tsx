import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleAction = (formData: FormData) => {
    const query = formData.get("query") as string;

    if (!query || !query.trim()) {
      toast.error("Введіть назву фільму!");
      return;
    }

    onSubmit(query);
  };

  return (
    <form action={handleAction} className={css.form}>
      <input
        type="text"
        name="query"
        placeholder="Search movies..."
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
}
