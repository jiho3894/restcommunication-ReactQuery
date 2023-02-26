import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setContent("");
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