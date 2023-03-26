import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/tasks" element={<TaskList/>} />
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/tasks/new" element={<NewTask/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
