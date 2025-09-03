import React from 'react'
import TodoItem from './TodoItem'
import EmptyState from './EmptyState'

function TodoList({listItems,deleteItem,markCompleted,updateTodo}) {


  return (
    <div className='todoList-Maindiv'>
    {listItems.length === 0 ? 
    (
        <EmptyState/>
    ) : (
    <div className='todoList-Div'>
      <ul className='itmes-Ul'>
        {
          listItems.map((item)=>{
            return  <TodoItem listItem={item} 
                    deleteItem={deleteItem} 
                    markCompleted ={markCompleted}
                    updateTodo = {updateTodo}
                    key={item.id}
                    />       
          })
        }
      </ul>
    </div>
    )}
    </div>
  )
}

export default TodoList