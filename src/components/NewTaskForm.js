import React from "react";
// use map to create an option for each select
//create a <select> "all"
// set useState to "All"

function NewTaskForm({
  categories,
  text,
  category,
  handleText,
  handleCategory,
  onTaskFormSubmit,
}) {
  const optionElements = categories.map((category) => (
    <option key={category}>{category}</option>
  ));

  const formObj = { category: category, text: text };

  return (
    <form
      className="new-task-form"
      onSubmit={(e) => {
        e.preventDefault();
        onTaskFormSubmit(formObj);
      }}
    >
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleText} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
          <option></option>
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
