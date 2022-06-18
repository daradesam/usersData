import { Link } from "react-router-dom";

export default function User({ user }) {
  return (
    <tr>
      <td><Link to={`/users/${user.id}`}>{user.first_name}</Link></td>
      <td>{user.last_name}</td>
      <td>{user.age}</td>
      <td>{user.email}</td>
      <td><a href={user.web} target='_blank'>{user.web}</a></td>
    </tr>
  )
}