import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({text: '', category: 'Code'});

  function handleNewTaskChange(e) {
    if (e.target.name === 'text') {
      setNewTask({...newTask, text: e.target.value});
    } else {
      setNewTask({...newTask, category: e.target.value});
    } 
  }

  function handleNewTaskSubmit(e) {
    e.preventDefault();

    onTaskFormSubmit(newTask);

    setNewTask({text: '', category: 'Code'});
  }

  // console.log('In NewTaskForm, newTask: ', newTask);

  return (
    <form className="new-task-form" onSubmit={handleNewTaskSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={handleNewTaskChange} />
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleNewTaskChange}>
          {
            categories.map(category => {
              if (category !== 'All') {
                return (<option key={category} value={category}>{category}</option>);
              }
              return null;
            })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
