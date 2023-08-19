import React from 'react'
import { Todo } from '../utils/interface'

type Props = {
  todos: Todo[]
}

export function TodoList(props: Props) {
  const { todos } = props
  return (
    <div>
      <ul className='flex flex-col gap-2 mx-auto'>
        {todos.map((todo) => (
          <li key={todo.id} className='flex justify-between p-2 shadow-md rounded-md'>
            <p>✅ {todo.title}</p>
            <span className='cursor-pointer'>×</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
