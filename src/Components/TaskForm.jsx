import '../Components/TaskForm.css';
import {useState} from 'react';

const TaskForm = ({setTasks}) => {
  const [newTask, setNewTask] = useState("");
  const handleSubmit = (e) => {
      e.preventDefault();
      const value = e.target.Task.value.trim();
      if (!value){
        return;
      }
      setTasks((prevTasks)=>[...prevTasks, {title: value, id: Date.now(), is_completed: false},]);
      e.target.reset();
      setNewTask("")
    }

  function handelInputChange(e) {
    setNewTask(e.target.value)
  }

  return (
    <>
    <form className='tasks-container' onSubmit={handleSubmit}>
        <section className='inputs'>
          <input type='text' className='task_input' placeholder='Type your task..' value={newTask} onChange={handelInputChange} name='Task'/>
        </section>
        <section className='task_form_btn_line'>
          <button type='submit' className='add_task_btn'>Add Task</button>
        </section>
    </form>
    </>
  )
}
export default TaskForm;