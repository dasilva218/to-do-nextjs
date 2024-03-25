'use server';
import { revalidatePath } from 'next/cache';
import { prisma } from '../libs/prisma';

export const addTodo = async (FormData) => {
  const newTodo = {
    titre: FormData.get('todo'),
    status: 'a faire',
  };
  await prisma.todo.create({
    data: newTodo,
  });
  revalidatePath('/');
};

export const deleteTodo = async (id) => {
  await prisma.todo.delete({ where: { id } });
  revalidatePath('/');
};
