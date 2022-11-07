import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import { useState } from 'react';

function App() {
  const [todos, setData] = useState([
    {
      id: 1,
      title: 'hai'
    },
    {
      id: 2,
      title: 'hai juga'
    },
    {
      id: 3,
      title: 'lagi apa'
    },
  ])

  const deleteItem = id => {
    const item = todos.filter(item => item.id !== id);    
    setData(item)
  }

  const addItem = (data) => {
    const id = todos.length;    
    const newData = {
      id: id+1,
      title: data
    }
    setData([...todos, newData])
    
  }
  return (
    <div className="text-center w-full h-full bg-b-main flex flex-col">
      <header className="mt-16 mb-14">
        <img src={logo} className="animate-spin-slow w-28 mx-auto" alt="logo" />        
        <h1 className="text-4xl font-bold text-blue-500">
          React Todo App
        </h1>
      </header>
      <main className='w-96 mx-auto'>
          <TodoInput addItem={addItem} />
          <div className='space-y-3'>
            {todos.map(data => {
                return (
                  <TodoItem key={data.id} id={data.id} title={data.title} deteleItem={deleteItem} />
                )
            })}            
          </div>
      </main>
    </div>
  );
}

export default App;
