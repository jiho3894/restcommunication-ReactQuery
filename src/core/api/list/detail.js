import { useMutation, useQuery } from "@tanstack/react-query"
import { baseURL, instance } from "../axios"

export const useGetTodoDetail = (id) => {
  return useQuery([`todos/${id}`], () => getTodo(id), {
    select: (data) => data.data
  })
}

export const useDeleteTodo = (id) => {
  return useMutation([`todos/${id}`], () => deleteTodo(id))
}

export const useUpdateTodo = (payload) => {

  return useMutation([`todos/${payload.id}`], () => updateTodo(payload))
}

export const getTodo = async (id) => {
  const data = await instance.get(`/posts/${id}`)
  return data
}

export const deleteTodo = async (id) => {
  const { data } = await baseURL.delete(`/posts/${id}`)
  return data
}

export const updateTodo = async (payload) => {
  const obj = {
    title: payload.title,
    content: payload.content,
  }
  const { data } = await baseURL.put(`/posts/${payload.id}`, obj)
  return data
}