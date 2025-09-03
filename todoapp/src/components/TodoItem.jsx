import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash, faPenToSquare, faSquareCheck, faCheck } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ listItem, deleteItem, markCompleted, updateTodo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [isCompleted, setIsCompleted] = useState(listItem.completed);
  const [editText, setEditText] = useState(listItem.eachItem);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditable]);

  function handleDelete() {
    deleteItem(listItem.id);
  }

  function handleCompleted() {
    const newIsCompletedStatus = !isCompleted;
    setIsCompleted(newIsCompletedStatus);
    markCompleted(newIsCompletedStatus, listItem.id);
  }

  function handleUpdate() {
    setIsEditable((prev) => {
      if (prev && listItem.eachItem !== editText) {
        updateTodo(listItem.id, editText);
      }
      return !prev;
    });
  }

  return (
    <div className="todoItem-Maindiv">
      <li className={`item-List ${isCompleted ? 'crossedLine' : ''}`} key={listItem.id}>
        <div className="item-content">
          <button className="completed-Btn" onClick={handleCompleted}>
            {isCompleted ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <FontAwesomeIcon icon={faSquareCheck} />
            )}
          </button>

          {isEditable ? (
            <input
              type="text"
              ref={inputRef}
              className="new-Text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <span className="item-text">{listItem.eachItem}</span>
          )}

          {!isCompleted && (
            <button className="edit-Btn" onClick={handleUpdate}>
              {isEditable ? (
                <FontAwesomeIcon icon={faPenToSquare} />
              ) : (
                <FontAwesomeIcon icon={faPencil} />
              )}
            </button>
          )}
          <button className="delete-Btn" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </li>
    </div>
  );
}

export default TodoItem;
