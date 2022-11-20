import style from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

type SearchBarProps = {
  onSubmitQuery: (value: string) => void;
};

export const SearchBar = ({ onSubmitQuery }: SearchBarProps): JSX.Element => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmitQuery(value);
    setValue("");
  };

  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <button className={style.button} type="submit">
          <FiSearch />
        </button>

        <input
          className={style.input}
          onChange={handleChange}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
