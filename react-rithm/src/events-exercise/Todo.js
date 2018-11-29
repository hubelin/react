import React from 'react';

const Todo = ({ title, description, handleComplete, handleRemove, id }) => {
  return (
    <l1>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <button onClick={handleComplete}>Mark as completed</button>
      <button onClick={handleRemove}>Remove todo</button>
    </l1>
  );
};

export default Todo;
