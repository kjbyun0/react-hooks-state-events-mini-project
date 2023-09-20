import React from "react";
import Task from './Task';
import { v4 as uuid } from 'uuid';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, idx) => (
        <Task key={uuid()} category={task.category} text={task.text} onDeleteTask={() => onDeleteTask(idx)}  />
      ))}
    </div>
  );
}

export default TaskList;
