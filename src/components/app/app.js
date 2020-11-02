import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';

import './app.css';

const App = () => {

  const todoData = [
    { label: 'Drink coffee', important: false, id: 1 },
    { label: 'Drink tea', important: false, id: 2 },
    { label: 'Build react app', important: true, id: 3 },
    { label: 'Have a lunch', important: false, id: 4 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;