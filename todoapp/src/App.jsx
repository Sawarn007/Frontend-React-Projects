import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

  const getTodoFromLocal = ()=>{
    const localUpdatedItems = localStorage.getItem('localTodo');
    if(localUpdatedItems){
      return JSON.parse(localUpdatedItems);
    }
    return [];
  }

function App() {

  const[items,setItems] = useState(getTodoFromLocal);

  const addTodo = (inputItem)=>{
    if (!inputItem){
      alert('Please Write Item First!');
      return;
    }

    let itemObj ={};
    itemObj["id"] = Date.now();
    itemObj["eachItem"] = inputItem;
    itemObj["completed"] = false;
    setItems((prev)=> prev.concat(itemObj));
    
  };



  function deleteTodo(id){
    let updatedItems = items.filter((obj)=> obj.id !== id);
    setItems(updatedItems);
  };

function toggleComplete(markedStatus,id){
    let updatedItems = items.map((obj) =>{
      if(obj.id === id){
        return {...obj,completed:markedStatus};
      }
      return obj;
    });       
    setItems(updatedItems);
  }

  function editTodo(id, newText){
    let updatedItems = items.map((obj)=>{
      if(id === obj.id){
        return{...obj,eachItem: newText};
      }
      return obj;
    });
    setItems(updatedItems);
  }
  useEffect(()=>{
    console.log('adding updatedItems to Local.. ',items);
    localStorage.setItem('localTodo',JSON.stringify(items));
  },[items]);


      

  return (
    <div className='app-main'>
      <h1>Add Your Wish List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList listItems={items} deleteItem={deleteTodo} markCompleted={toggleComplete} updateTodo = {editTodo}/>
    </div>
  )
}

export default App
