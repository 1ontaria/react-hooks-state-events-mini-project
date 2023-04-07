import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  function handleDelete(obj) {
    setTasks(tasks.filter((task) => task !== obj));
  }

  function handleSelectedCategory(category) {
    setSelectedCategory(category);
  }

  const filteredTasks = tasks.filter(
    (task) => task.category === selectedCategory || selectedCategory === "All"
  );

  function handleText(e) {
    setText(e.target.value);
  }

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function onTaskFormSubmit() {
    const formData = { category: category, text: text };
    const newData = [...tasks, formData];
    setTasks(newData);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        handleSelectedCategory={handleSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((category) => category !== "All")}
        text={text}
        handleText={handleText}
        category={category}
        handleCategory={handleCategory}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
