import React, { useEffect, useState } from "react";

import axios from "axios";
import Tasks from "./components/Tasks";
import './App.css'
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=40")
    
      setTasks(data)
    }

    fetchTasks();
  }, [])

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ ... tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
   }]
     
    setTasks(newTasks)
  }

  const handleTaskClick = (taskId) => {
      const newTasks = tasks.map(task => {
        if(task.id == taskId) return { ... task, completed: !task.completed}
        return task
      })

      setTasks(newTasks)
  }

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks)
  }
  
  return (
    <Router >
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks tasks={tasks} handleTaskDelete={handleTaskDelete} handleTaskClick={handleTaskClick} />
            </>
          } />
          <Route path="/:taskTitle" element={<TaskDetails />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;