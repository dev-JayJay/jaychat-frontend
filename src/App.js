import './App.css';
import Login from './components/Login';
import Chat from './components/Chat'
import Register from './components/Register'
import Onboarding from './components/onboarding'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Onboarding" element={<Onboarding />} />
      </Routes>
    </Router>
    );
}

export default App;
