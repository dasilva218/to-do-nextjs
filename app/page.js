import Form from './components/form';
import Todo from './components/todo';

export default function Home() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='bg-white rounded-md min-h-80 p-3 shadow-md'>
        <h1 className='text-lg font-bold text-cyan-700'>
          Todo app avec server action
        </h1>
        <Form />
        <Todo />
      </div>
    </main>
  );
}
