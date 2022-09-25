import React from 'react';

import { emitter } from '../Notification';

const TodoList = (props) => {
  const { item, removeItem, checkItem } = props;

  const handleOnClick = () => removeItem(item.id);

  const handleOnChange = () => {
    if (item.done) {
      emitter.emit('WARNING_NOTIFICATION', 'Cannot undo a task once checked.');
      return;
    }
    checkItem(item.id);
    console.log('Changed item: ', item.id);
  };

  return (
    <>
      <div className="list-container">
        <div>
          <input
            onChange={handleOnChange}
            type="checkbox"
            checked={item.done}
          />
          <span className={`${item.done ? 'list-item-completed' : ''}`}>
            {item.title}
          </span>
        </div>

        <button onClick={handleOnClick}>x</button>
      </div>
    </>
  );
};

export default TodoList;
