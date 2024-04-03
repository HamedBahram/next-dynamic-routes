import { Todo, User } from '@/lib/types'

export async function getUsers(): Promise<User[]> {
  const endpoint = 'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  const res = await fetch(endpoint)
  const data = await res.json()
  return data
}

export async function getUserById(id: string): Promise<User> {
  const endpoint = `https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users/${id}`
  const res = await fetch(endpoint)
  const data = await res.json()
  return data
}

export async function getTodosByUserId(id: string): Promise<Todo[]> {
  const endpoint = `https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users/${id}/todos`
  const res = await fetch(endpoint)
  const data = await res.json()
  return data
}
