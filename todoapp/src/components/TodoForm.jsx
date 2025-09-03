import React, { useState } from 'react'

function TodoForm({addTodo}) {
  const[inputItem, setInputItem] = useState("");

  function handleAddList(e){
    e.preventDefault();
    addTodo(inputItem);
    setInputItem("");
  }
  
  return (
    <div className='TodoForm-Div'>
      <form onSubmit={handleAddList} className='Todo-Form'>
        <input type="text"
        className='todo-Input'
        value={inputItem}
        onChange={(e) => setInputItem(e.target.value)}
        placeholder='Enter Your todo Items...'
        />
        <button type="submit" className='todo-AddBtn'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm