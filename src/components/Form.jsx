import React from "react";
import { useState } from "react";
import { usePostTodos } from "../core/api/list/todo";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { mutateAsync } = usePostTodos();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutateAsync({
        title,
        content,
      });
      setTitle("");
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">제목 : </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력해주세요"
        id="title"
      />
      <label htmlFor="content">내용 : </label>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력해주세요"
        id="content"
      />
      <button>등록</button>
    </form>
  );
};

export default Form;
