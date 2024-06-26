import './App.css';
import Login from './components/Login';
import Chat from './components/Chat'
import Register from './components/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    );
}

export default App;
