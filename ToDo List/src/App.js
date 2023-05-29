import React, { Component } from 'react'
import ToDoList from './ToDoList';
import './App.css'
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';

function App() {
  return (
    <div className="App flex">
      <ToDoList />
      {/* <NewToDoForm /> */}
      {/* <ToDo /> */}
    </div>
  );
}

export default App;
