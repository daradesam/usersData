import './App.css';
import { useEffect, useState } from "react"
import MainPage from "./components/MainPage";
import UserCard from './components/UserCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";



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
        <Route path='/' element={<MainPage users={users} setUsers={setUsers} />} />
        {/* {users.map((user)=>{
          return <Route path='/:user' element={<UserCard user={user} />}/>
        })} */}
        <Route path='/:userId' element={<UserCard users={users}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

// function UserCard({user}){
//   return <h2>Details: {user.first_name} {user.last_name}</h2>
// }
