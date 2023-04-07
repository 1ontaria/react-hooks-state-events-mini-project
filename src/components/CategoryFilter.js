import React from "react";

function CategoryFilter({
  categories,
  selectedCategory,
  handleSelectedCategory,
}) {
  const categoryButtons = categories.map((category) => (
    <button
      key={category}
      onClick={() => handleSelectedCategory(category)}
      className={category === selectedCategory ? "selected" : null}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
