import { TodoType } from "src/pages";
import styles from "../../styles/Home.module.css";

type Props = {
  todo: TodoType;
  toggleTodo: (key: string) => void;
};

export default function Checkbox({ todo, toggleTodo }: Props) {
  return (
    <label style={todo[1] ? { textDecorationLine: "line-through" } : {}}>
      <input
        type="checkbox"
        className={styles.hidden_checkbox}
        onChange={() => {
          toggleTodo(todo[2]);
        }}
      />
      <svg
        className={`${styles.checkbox} ${
          todo[1] ? styles.checkbox_active : ""
        }`}
        aria-hidden="true"
        viewBox="0 0 11 10"
        fill="none"
      >
        <path
          d="M1.5 6.15L3.68182 8.4L9.5 2.4"
          strokeWidth="2"
          strokeLinecap="square"
          stroke={todo[1] ? "#f4f4f5" : "none"}
        />
      </svg>
      {todo[0]}
    </label>
  );
}
