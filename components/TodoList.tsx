import React from 'react'
import { Todo } from '../utils/interface'
import { deleteTodo } from '../utils/supabaseFunctions'

type Props = {
  todos: Todo[]
  handleDelete: (id: number) => void
}

export function TodoList(props: Props) {
  const { todos, handleDelete } = props

  const onDelete = async (id: number) => {
    await deleteTodo(id)
    handleDelete(id)
  }

  return (
    <div>
      <ul className='flex flex-col gap-2 mx-auto'>
        {todos.map((todo) => (
          <li key={todo.id} className='flex justify-between p-2 shadow-md rounded-md'>
            <p>✅ {todo.title}</p>
            <span onClick={() => onDelete(todo.id)} className='cursor-pointer'>×</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
