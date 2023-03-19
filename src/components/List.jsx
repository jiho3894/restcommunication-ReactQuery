import React from "react";
import { useGetTodos } from "../core/api/list/todo";
import Comment from "./Comment";

const List = () => {
  const { data: todos, isLoading } = useGetTodos();
  return (
    <ul>
      {isLoading
        ? "Loading..."
        : todos.map((todo) => {
            console.log(todo);
            return (
              <Comment
                key={todo.id}
                id={todo.id}
                title={todo.title}
                nickname={todo.nickname}
              />
            );
          })}
    </ul>
  );
};

export default List;
