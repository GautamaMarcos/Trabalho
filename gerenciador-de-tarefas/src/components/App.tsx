//   ../components/App.tsx
//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import TaskDetails from '../components/TaskDetails';
import '../styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList/>} />
        <Route path="/add" element={<TaskForm/> } />
        <Route path="/edit/:id" element={<TaskDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;