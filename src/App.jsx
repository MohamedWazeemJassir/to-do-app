import './App.css'
import List from './components/List'
import AddTask from './components/AddTask'

function App() {

  return (
    <>
      <h1>To-do App</h1>
      <AddTask />
      <List task="Complete Project" />
    </>
  )
}

export default App
