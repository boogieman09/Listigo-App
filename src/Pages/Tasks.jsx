import Navbar from '../Components/Navbar';
import TaskForm from '../Components/TaskForm';
import Taskbar from '../Components/Taskbar';
import Taskcard from '../Components/Taskcard';
import { useState, useEffect } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  const task_completed = tasks.filter((task) => task.is_completed === true).length;
  const total_tasks = tasks.length;
  
    // Delete
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, is_completed: !task.is_completed } : task
      )
    );
  };

  // Edit
  const editTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };
  return (
    <main>
     <Navbar />
     <Taskbar task_completed={task_completed} total_tasks={total_tasks}/>
     <TaskForm setTasks={setTasks}/>
     <Taskcard tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} editTask={editTask} />
    
    </main>
  );
};

export default Tasks;