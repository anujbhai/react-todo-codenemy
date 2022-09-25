import React from 'react';
import './style.css';
import TodoContainer from './containers/TodoContainer';

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Todo App - codenemy</h1>

      <TodoContainer />
    </div>
  );
}
