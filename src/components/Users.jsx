import { useEffect, useState } from "react"
import User from './user';
import Pagination from './pagination';
import { Link } from "react-router-dom";

export default function Users({ users, setUsers }) {
  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const [filterdUsers, setFilteredUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);

  useEffect(() => {
    fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
      .then(res => res.json())
      .then(result => setUsers(result))
      .then(() => setFilteredUsers(users))
  }, [])

  function filterList() {
    const filteredUsersList = users.filter(user => { return (user.first_name.toLowerCase()).includes(input) | (user.last_name.toLowerCase()).includes(input) })
    setFilteredUsers([...filteredUsersList]);
  }

  const paginate = (page) => setCurrentPage(page);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  useEffect(() => {
    setCurrentUsers(filterdUsers.slice(indexOfFirstUser, indexOfLastUser))
  }, [filterdUsers])

  function sortByFirstName(){
    const sortedObjs = _.sortBy(currentUsers, ['currentUsers.first_name']);
    console.log(sortedObjs)
  }

  function sortByLastName(){

  }

  function sortByAge(){

  }

  function sortByEmail(){

  }

  function sortByWeb(){
    
  }

  return (
    <div className="App">
      <div className="back-button-wrapper">
        <Link to='/'><button className="back-btn">←</button></Link>
      </div>
      <div className="users-table">
        <h1>Users</h1>
        <div className='search-ele'>
          <input placeholder="Search by first or last name" value={input} onChange={(e) => { setInput((e.target.value).toLowerCase()) }} />
          <img className='search-icon' src='search.png' onClick={() => { filterList() }} />
        </div>
        <table>
          <thead>
            <tr>
              <th className='first_name' onClick={()=>{sortByFirstName()}}>First Name</th>
              <th className='last_name' onClick={()=>{sortByLastName()}}>Last Name</th>
              <th className='age' onClick={()=>{sortByAge()}}>Age</th>
              <th className='email' onCanPlay={()=>{sortByEmail()}}>Email</th>
              <th className='web' onClick={()=>{sortByWeb()}}>Website</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) =>
              <User key={user.id} user={user} />)}
          </tbody>
        </table>
        <Pagination usersPerPage={usersPerPage} totalUsers={filterdUsers.length} paginate={paginate} />
      </div>
    </div>
  );
}