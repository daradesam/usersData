import { useEffect, useState } from "react"
import User from './user';
import Pagination from './pagination';
import UserCard from './UserCard';

export default function App({users, setUsers}) {
  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(()=>{
    fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
    .then(res=>res.json())
    .then(result=>setUsers(result))
  })

  const paginate = (page) => setCurrentPage(page);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
  return (
    <div className="App">
      <h1>Users</h1>
      <div className='search-ele'>
      <input placeholder="Search by first or last name" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <img className='search-icon' src='search.png'/>
      </div>
      <table>
        <thead>
          <tr>
          <th className='first_name'>First Name</th>
          <th className='last_name'>Last Name</th>
          <th className='age'>Age</th>
          <th className='email'>Email</th>
          <th className='web'>Website</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user)=>
          <User key={user.id} user={user}/>)}
        </tbody>
      </table>
      <Pagination usersPerPage={usersPerPage} totalUsers = {users.length} paginate={paginate}/>
    </div>
  );
}