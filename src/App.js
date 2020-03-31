import React, { useState } from 'react';

export const Item = (props) => {
  const [done, setDone] = useState(false);
  const toggleDone = () => setDone(!done);
  return <li onClick={toggleDone} style={{ textDecoration: done ? "line-through" : "none" }}>
    {props.children}
  </li>
}

function App() {
  const [items, setItems] = useState([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    setItems([...items, todo])
    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  return (
    <div>
      <h1>To Do List!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={todo} onChange={handleChange} placeholder="to do"/>
          <button>Add</button>
        </form>
      </div>
      <div>
        <ul>
          {items.map((todo,index) => {
            return <Item key={index}>{todo}</Item>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
