import './App.css'
import List from './components/List'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {

  const [todos, setTodo] = useState([]);

  function addItem(inputText){
    setTodo((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  return (
    <>
      <h1>To-do App</h1>
      <AddTask onAdd={addItem} />
      {todos.map((todo, index) =>
        <List task={todo} key={index} />
      )}
    </>
  )
}


export default App;