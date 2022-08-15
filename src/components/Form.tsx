import React, { useState } from "react";
import styles from "../styles/Home.module.css";

type FormProps = {
  title: string;
  setTitle: (title: string) => void;
  addTodo: (todo: string) => void;
};

function Form({ title, setTitle, addTodo }: FormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    addTodo(title);

    event.preventDefault();
  }

  function onChange(event: React.FormEvent<HTMLInputElement>) {
    setTitle(event.currentTarget.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Title
        <input type="text" name="name" value={title} onChange={onChange} />
      </label>
      <button type="submit" className={styles.submit}>
        <span className={styles.submit_top}> Submit</span>
      </button>
    </form>
  );
}

export default React.memo(Form);
