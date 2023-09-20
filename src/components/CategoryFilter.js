import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  function handleButtonClick(category) {
    onSelectCategory(category);
  }

  const getClassName = (category) => (selectedCategory === category) ? 'selected' : null;

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => 
        (<button key={category} 
          className={getClassName(category)} 
          onClick={() => handleButtonClick(category)}>{category}</button>)
      )}

    </div>
  );
}

export default CategoryFilter;
