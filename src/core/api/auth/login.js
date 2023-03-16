import { useMutation } from "@tanstack/react-query"
import { instance } from "../axios"

export const usePostLogin = (payload) => {
  return useMutation(async () => {
    const { data } = await postLogin(payload)
    return data
  })
}

export const postLogin = async (payload) => {
  const { data } = await instance.post("/login", payload);
  return data;
}