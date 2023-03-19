import React from "react";
import { useNavigate } from "react-router-dom";
import { usePostLogin } from "../core/api/auth/login";
import { useInput } from "../core/utils/useInput";

const Login = () => {
  const [nickname, setNickName] = useInput();
  const [password, setPassword] = useInput();
  const navigation = useNavigate();
  const { mutateAsync } = usePostLogin();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutateAsync({
        nickname,
        password,
      });
      useSweet(1000, "success", "로그인 성공");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="nickname">nickname : </label>
        <input
          type="text"
          id="nickname"
          value={nickname}
          onChange={setNickName}
        />
        <label htmlFor="password">password : </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={setPassword}
          autoComplete="off"
        />
        <button>로그인</button>
      </form>
      <button onClick={() => navigation("/signup")}>회원가입</button>
    </>
  );
};

export default Login;
