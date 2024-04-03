import { Todo, User } from '@/lib/types'

export async function getUsers(): Promise<{
  users: User[] | null
  error: string | null
}> {
  try {
    const endpoint = 'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
    const res = await fetch(endpoint)
    const data = await res.json()

    if (typeof data === 'string' || !data) {
      throw new Error('Failed to fetch users')
    }

    return { users: data, error: null }
  } catch (error: any) {
    return { users: null, error: error.message || 'Failed to fetch users' }
  }
}

export async function getUserById(
  id: string
): Promise<{ user: User | null; error: string | null }> {
  try {
    const endpoint = `https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users/${id}`
    const res = await fetch(endpoint)
    const data = await res.json()

    if (typeof data === 'string' || !data) {
      throw new Error('User not found')
    }

    return { user: data, error: null }
  } catch (error: any) {
    return { user: null, error: error.message || 'Failed to fetch user' }
  }
}

export async function getTodosByUserId(
  id: string
): Promise<{ todos: Todo[] | null; error: string | null }> {
  try {
    const endpoint = `https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users/${id}/todos`
    const res = await fetch(endpoint)
    const data = await res.json()

    if (typeof data === 'string' || !data) {
      throw new Error('Todos not found')
    }

    return { todos: data, error: null }
  } catch (error: any) {
    return { todos: null, error: error.message || 'Failed to fetch todos' }
  }
}
