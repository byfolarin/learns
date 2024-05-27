import React, { useState } from 'react';

function ToDoItem({ text }) {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => setCompleted(!completed);

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={toggleCompleted} />
      <span>{text}</span>
    </div>
  );
}

export default ToDoItem;
