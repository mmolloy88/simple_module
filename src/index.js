import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Weather from './Weather';
import TodoList from './TodoList'

var destination = document.querySelector("#container");

ReactDOM.render(
  <React.StrictMode>
    <Weather />
    <hr />
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root'),
  destination
);

