import { useMutation } from "@tanstack/react-query"
import { instance } from "../axios"

export const usePostSignup = (post) => {
  return useMutation(["signup"], () => postSignup(post))
}

export const postSignup = async (post) => {
  const data = await instance.post("/users", post);
  return data;
}