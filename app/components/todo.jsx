import { prisma } from '../libs/prisma';
import DeleteB from './deleteB';

export default async function Todo() {
  const TodoItems = await prisma.todo.findMany({
    orderBy: { createAt: 'desc' },
  });

  return (
    <div className='flex flex-col gap-3 mt-5'>
      {TodoItems?.map((todoItem) => (
        <div className='flex justify-between border-b border-gray-300'>
          <div className='flex gap-3 item-center p-2 '>
            <input type='checkbox' name='todo' id='todo' />
            <label htmlFor='todo'>{todoItem.titre}</label>
          </div>
          <DeleteB id={todoItem.id} />
        </div>
      ))}
    </div>
  );
}
