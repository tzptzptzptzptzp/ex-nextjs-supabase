import React, { useEffect, useState } from 'react'
import { TodoList } from './TodoList'
import { addTodo, getAllTodos } from '../utils/supabaseFunctions'
import { Todo } from '../utils/interface'

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos()
      setTodos(todos!)
    }
    getTodos()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title === '') return
    await addTodo(title)
    setTitle('')
  }

  return (
    <div>
      <h2 className='mb-2 text-2xl text-center'>Next.js & SupaBase</h2>
      <form onSubmit={(e) => handleSubmit(e)} className='mb-4'>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className='shadow-lg p-2 outline-none' />
        <button className='shadow-md bottom-2 p-2 rounded-md'>Add</button>
      </form>
      <TodoList todos={todos}></TodoList>
    </div>
  )
}
