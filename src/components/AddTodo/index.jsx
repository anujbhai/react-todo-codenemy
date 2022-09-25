import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { emitter } from '../Notification';

const AddTodo = (props) => {
  const { addTodo } = props;

  const [todoText, setTodoText] = useState('');

  const uniqueID = uuidv4();
  const smallId = uniqueID.slice(0, 8);

  const handleOnChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: smallId, title: todoText, done: false };
    addTodo(newTodo);
    emitter.emit('SUCCESS_NOTIFICATION', 'New todo added successfully.');
    setTodoText('');
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="form-control">
          <input
            type="text"
            value={todoText}
            placeholder="Add a todo"
            onChange={handleOnChange}
          />
          <input
            type="submit"
            value="Submit"
            disabled={todoText === '' ? true : false}
          />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
