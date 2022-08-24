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
        viewBox="0 0 15 11"
        fill="none"
      >
        <path
          d="M 2 5 L 5 9, 6 8, 13 2"
          strokeWidth="2"
          strokeLinecap="round"
          stroke={todo[1] ? "#f4f4f5" : "none"}
        />
      </svg>
      {todo[0]}
    </label>
  );
}
