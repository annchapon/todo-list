import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

  const todoData = [
    { label: 'Drink coffee', important: false, id: 1 },
    { label: 'Drink tea', important: false, id: 2 },
    { label: 'Build react app', important: true, id: 3 },
    { label: 'Have a lunch', important: false, id: 4 }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />    
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));