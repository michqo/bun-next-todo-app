import { TodoType } from "src/pages";
import styles from "../../styles/Home.module.css";

type Props = {
  todo: TodoType;
  toggleTodo: (key: string) => void;
};

export default function Checkbox({ todo, toggleTodo }: Props) {
  return (
    <label className={styles.checked}>
      <input
        type="checkbox"
        className={styles.checkbox_hidden}
        checked={todo[1]}
        onChange={() => {
          toggleTodo(todo[2]);
        }}
      />
      <svg
        className={styles.checkbox}
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path d="M2 9.88L7.12 15L18 4" strokeWidth="3" stroke="#fff" />
      </svg>
      {todo[0]}
    </label>
  );
}
