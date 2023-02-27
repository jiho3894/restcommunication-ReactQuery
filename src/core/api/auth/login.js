import { useMutation } from "@tanstack/react-query"
import { instance } from "../axios"

export const usePostLogin = (payload) => {
  return useMutation(["login"], () => postLogin(payload))
}

export const postLogin = async (payload) => {
  const { data } = await instance.post("/login", payload);
  return data;
}