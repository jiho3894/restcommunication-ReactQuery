import { useMutation, useQuery } from "@tanstack/react-query"
import { baseURL, instance } from "../axios"

export const useGetTodos = () => {
  return useQuery(["todos"], getTodos, {
    select: (data) => data.data
  })
}

export const usePostTodos = (payload) => {
  return useMutation(["todos"], () => postTodos(payload))
}

export const getTodos = async () => {
  const data = await instance.get("/posts");
  return data;
}

export const postTodos = async (payload) => {
  const { data } = await baseURL.post("/posts", payload)
  return data
}