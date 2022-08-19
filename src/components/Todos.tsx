import { Droppable, Draggable } from "react-beautiful-dnd";

import React from "react";
import { TodosType, TodoType } from "../pages";
import styles from "../styles/Home.module.css";

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
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={styles.todo}
        >
          <p
            style={todo[1] ? { textDecorationLine: "line-through" } : {}}
            onClick={() => toggleTodo(todo[2])}
          >
            {todo[0]}
          </p>
          <button className={styles.minus} onClick={() => removeTodo(todo[2])}>
            X
          </button>
        </li>
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
          {props.todos.map((value, index) => Todo(props, value, index))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}
