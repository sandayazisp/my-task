import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import { useEffect, useState } from 'react';
import EditModal from './components/EditModal';
import KonfirmasiModal from './components/KonfirmasiModal';

function App() { 
  
  const [todos, setData] = useState(() => {
    const saveTodos = localStorage.getItem('todo')
    if (saveTodos) {
      return JSON.parse(saveTodos)
    }else{
      return []
    }
  })

  const [modal, setModal] =  useState(false)
  const [konfirModal, setKonfirModal] = useState(false)
  const [editTodos, setEditTodos] = useState({
    id: '',
    title: ''
  })

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  },[todos]);  

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

  const setTitle = e => {
    setEditTodos({...editTodos, title: e.target.value})
  }

  const editItem = (id, title) => {
    setModal(true)
    setEditTodos({
      id,
      title
    })
    // console.log(editTodos);
  }  

  const updateTodos = () => {
    const {id, title} = editTodos
    const newData = {id, title}    
    const newTodos = todos    
    newTodos.splice((id-1), 1, newData)  
    localStorage.setItem('todo', JSON.stringify(newTodos));    
    setModal(false)
    setKonfirModal(false)
    setEditTodos({
      id: '',
      title: ''
    })
  }

  const closeModal = () => {
    setModal(false)
    setKonfirModal(false)
  }

  const konfirm = () => {
    setModal(false)
    setKonfirModal(true)
  }
    
  return (
    <>
      <div className="text-center flex flex-col bg-b-main w-1/2 mx-auto p-10 mt-24 rounded-xl">
        <header className="mb-14">
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
                    <TodoItem key={data.id} id={data.id} title={data.title} deteleItem={deleteItem} editItem={editItem} />
                  )
              })}            
            </div>
        </main>      
      </div>
      <EditModal isModal={modal} closeModal={closeModal} onChange={setTitle} data={editTodos} konfirm={konfirm} />
      <KonfirmasiModal isModal={konfirModal} closeModal={closeModal} update={updateTodos} />
    </>
  );
}

export default App;
