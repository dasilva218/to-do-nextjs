'use client';
import { useRef } from 'react';
import { addTodo } from '../actions/todoAction';

export default function Form() {
  const formRef = useRef();

  return (
    <form
      action={(data) => {
        addTodo(data);
        formRef.current?.reset();
      }}
      ref={formRef}
      className='flex items-center gap-3 mt-3'>
      <input
        type='text'
        name='todo'
        id='todo'
        className='border p-2 border-gray-300 rounded'
      />
      <button
        type='submit'
        className='bg-blue-500 text-white rounded p-2'>
        Ajouter
      </button>
    </form>
  );
}
