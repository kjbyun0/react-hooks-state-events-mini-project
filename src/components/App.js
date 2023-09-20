import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategories] = useState(CATEGORIES[0]);

  function handleDeleteTask(idx) {
    // console.log("In handleDeleteTask, idx: ", idx);
    setTasks([...tasks.slice(0,idx), ...tasks.slice(idx+1)]);
  }

  function handleInsertTask(taskObj) {
    setTasks([...tasks, taskObj]);
  }

  function handleSelectedCategory(category) {
    // console.log("In handleSelectedCategory, category: ", category);
    setSelectedCategories(category);
  }

  const displayTasks = tasks.filter(task => {
    if (selectedCategory === 'All') {
      return true;
    } else {
      return task.category === selectedCategory;
    }
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectCategory={handleSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleInsertTask} />
      <TaskList tasks={displayTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
