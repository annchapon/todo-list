import React from 'react';
import ReactDOM from 'react-dom';

const el = (
  <div>
    <h1>My Todo List</h1>
    <input placeholder="search" />
    <ul>
      <li>Drink tea</li>
      <li>Drink coffee</li>
    </ul>
  </div>
);

ReactDOM.render(el, document.getElementById('root'));