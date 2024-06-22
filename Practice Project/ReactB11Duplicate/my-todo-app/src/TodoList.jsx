import React, { useState } from 'react';
function TodoList() {
 const [todos, setTodos] = useState([]);
 const [inputValue, setInputValue] = useState('');
 const addTodo = () => {
   if (inputValue) {
     setTodos([...todos, inputValue]);
     setInputValue('');
   }
 };
 return (
   <div>
     <h1>My To-Do List</h1>
     <input
       type="text"
       value={inputValue}
       onChange={(e) => setInputValue(e.target.value)}
     />
     <button onClick={addTodo}>Add</button>
     <ul>
       {todos.map((todo, index) => (
         <li key={index}>{todo}</li>
       ))}
     </ul>
   </div>
 );
}
export default TodoList;