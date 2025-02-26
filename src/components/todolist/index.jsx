import React from 'react'
import { useState } from 'react'
import styles from "./style.module.css"

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

function handleChange(e){
  setInputValue(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  setTodos([...todos, inputValue])
  setInputValue('')
}

function handleDelete(index){
  const newTodos = [...todos]
  newTodos.splice(index, 1)
  setTodos(newTodos)
}
  return <div className={styles.todo_body}>
      <h1 className={styles.h1}>Todo List</h1>
      <form>
        <input className={styles.input} type='text' value={inputValue} onChange={handleChange}/>
        <button className={styles.btn} onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li className={styles.todo} key={index}>{todo}
          <button className={styles.btn_del} onClick={() =>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
}

export default TodoList;