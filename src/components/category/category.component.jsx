import React from "react";

import "./category.styles.css";

const Category = () => {
  return (
    <div className="category-container">
      <div className="category-options">
        <h2>Categories</h2>
        <h4>Frontend Questions</h4>
        <p>General React </p>
        <p>Testing</p>
        <p>Secuirty</p>
        <h4>Backend</h4>
        <p>Node </p>
        <p>Java</p>
      </div>
    </div>
  );
};

export default Category;
