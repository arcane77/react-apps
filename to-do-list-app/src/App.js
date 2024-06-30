import React, { useState } from 'react';
import './App.css';
import Calendar from 'react-calendar'; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [date, setDate] = useState(new Date());

  const addTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput(''); 
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2 className='name slide-down'>ToDoList</h2>
        <div className="input-container"> 
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="add new task"
          />
          <button className='add-button' onClick={addTask}>add task</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)} style={{ marginLeft: "10px" }}>delete</button>
            </li>
          ))}
        </ul>
      </header>
      <aside className="sidebar">
      <Calendar
          onChange={setDate}
          value={date}
        />
      </aside>
    </div>
  );
}

export default App;
