import './App.css';
import { useEffect, useState } from "react"
import Users from "./components/Users";
import UserCard from './components/UserCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
      .then(res => res.json())
      .then(result => setUsers(result))
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users users={users} setUsers={setUsers} />} />
        <Route path='/users/:id' element={<UserCard users={users} />} />
      </Routes>
    </BrowserRouter>
  );
}
