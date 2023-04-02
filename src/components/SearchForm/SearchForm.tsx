import React, { FC, useState } from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";

import styles from "./searchForm.module.css";

export interface ISearchFormProps {
  callBack: (str: string) => void;
}

const SearchForm: FC<ISearchFormProps> = ({ callBack }) => {
  const [value, setValue] = useState("");

  return (
    <form className={styles.form}>
      <Input
        placeholder="Поиск..."
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          callBack(value);
        }}
      >
        <img className={styles.searchImg} src="/img/search.svg" alt="search" />
      </Button>
    </form>
  );
};

export default SearchForm;
