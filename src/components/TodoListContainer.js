import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './TodoList';

function TodoListContainer() {
  const todos = useSelector((state) => state.todos.items);

  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo, i) => (
        <TodoList key={i} index={i} item={todo.text} />
      ))}
    </ul>
  );
}

export default TodoListContainer;
