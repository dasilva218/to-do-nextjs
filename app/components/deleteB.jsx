'use client';

import { deleteTodo } from '../actions/todoAction';

function DeleteB({ id }) {
  return (
    <button
      onClick={() => deleteTodo(id)}
      className='bg-red-400 rounded-md text-white p-1 mb-1 '>
      suprimer
    </button>
  );
}

export default DeleteB;
