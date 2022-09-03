import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { motion, AnimatePresence } from "framer-motion";

import { TodosType, TodoType } from "../pages";
import styles from "../styles/Home.module.css";
import Checkbox from "./controls/checkbox";

type TodoProps = {
  todos: TodosType;
  removeTodo: (key: string) => void;
  toggleTodo: (key: string) => void;
};

function Todo(
  { removeTodo, toggleTodo }: TodoProps,
  todo: TodoType,
  index: number
) {
  const key = todo[2].toString();

  return (
    <Draggable key={key} draggableId={key} index={index}>
      {(provided, snapshot) => (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <li
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={styles.todo}
            style={{
              background: snapshot.isDragging ? "var(--hover)" : "transparent",
              ...provided.draggableProps.style,
            }}
          >
            <Checkbox todo={todo} toggleTodo={toggleTodo} />
            <button
              className={styles.remove}
              onClick={() => removeTodo(todo[2])}
            >
              X
            </button>
          </li>
        </motion.div>
      )}
    </Draggable>
  );
}

export default function Todos(props: TodoProps) {
  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={styles.todos}
        >
          <AnimatePresence>
            {props.todos.map((value, index) => Todo(props, value, index))}
          </AnimatePresence>
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}
