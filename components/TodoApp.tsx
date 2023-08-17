import React from 'react'

export function TodoApp() {
  return (
    <div>
      <h2 className='mb-2 text-2xl text-center'>Next.js & SupaBase</h2>
      <form>
        <input type="text" className='shadow-lg p-2 outline-none' />
        <button className='shadow-md bottom-2 p-2 rounded-md'>Add</button>
      </form>
    </div>
  )
}
