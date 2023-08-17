import React from 'react'

export function TodoList() {
  return (
    <div>
      <ul className='flex flex-col gap-2 mx-auto'>
        <li className='flex justify-between p-2 shadow-md rounded-md'>
          <p>✅ Sample Todo</p>
          <span className='cursor-pointer'>×</span>
        </li>
        <li className='flex justify-between p-2 shadow-md rounded-md'>
          <p>✅ Sample Todo</p>
          <span className='cursor-pointer'>×</span>
        </li>
        <li className='flex justify-between p-2 shadow-md rounded-md'>
          <p>✅ Sample Todo</p>
          <span className='cursor-pointer'>×</span>
        </li>
      </ul>
    </div>
  )
}
