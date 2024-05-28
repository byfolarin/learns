import React, { useState } from 'react';

function ToDoItem() {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => setCompleted(!completed);

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={toggleCompleted} />
      <span></span>
    </div>
  );
}

export default ToDoItem;
