import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  const taskList = tasks.map((task) => (
    <Task
      task={task}
      text={task.text}
      category={task.category}
      handleDelete={handleDelete}
      key={task.text}
    />
  ));

  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
