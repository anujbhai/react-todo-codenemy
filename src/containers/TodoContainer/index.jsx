import React, { useState } from 'react';

import AddTodo from '../../components/AddTodo';
import TodoList from '../../components/TodoList';
import Notification, { emitter } from '../../components/Notification';

const todoList = [
  { id: 1, title: 'learn react', done: true },
  { id: 2, title: 'create project', done: false },
  { id: 3, title: 'eat shit', done: false },
];

const TodoContainer = () => {
  const [todos, setTodos] = useState(todoList);

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  };

  const handleRemoveTodo = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
    emitter.emit('DANGER_NOTIFICATION', 'Todo item removed.');
  };

  const handleUpdateTodo = (id) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }

      return todo;
    });

    setTodos(newTodoList);
    emitter.emit('INFO_NOTIFICATION', 'Todo item marked as done.');
  };

  return (
    <div style={{ margin: '20px auto', width: '90%', maxWidth: 800 }}>
      <h3 style={{ textAlign: 'center' }}>Todo application [ by codenemy ]</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit
        ut mi non placerat.
      </p>

      <AddTodo addTodo={handleAddTodo} />

      {todos.length > 0 ? (
        <ul className="main-todo-list">
          {todos.map((item, index) => {
            return (
              <li key={item.id}>
                <TodoList
                  item={item}
                  removeItem={handleRemoveTodo}
                  checkItem={handleUpdateTodo}
                />

                {todos[index + 1] ? <hr /> : ''}
              </li>
            );
          })}
        </ul>
      ) : (
        <p style={{ textAlign: 'center' }}>
          No tasks found. Please add a new todo task.
        </p>
      )}

      <Notification />
    </div>
  );
};

export default TodoContainer;
