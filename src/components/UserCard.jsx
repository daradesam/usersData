import { useParams } from "react-router"
import { Link } from "react-router-dom";

export default function UserCard({ users }) {
    const { id } = useParams();
    const user = users.filter((item) => {
        return item.id == id;
    })
    return (
        <>
            {user.map((item) => (
                <div className="usercard-wrapper" key={item.id}>
                    <div className="back-button-wrapper">
                        <Link to='/users'><button className="back-btn">←</button></Link>
                    </div>
                    <div className="usercard-details-wrapper">
                        <h1>Details: {item.first_name} {item.last_name} </h1>
                        <h2>First Name: <span>{item.first_name}</span></h2>
                        <h2>Last Name: <span>{item.last_name}</span></h2>
                        <h2>Company_name: <span>{item.company_name}</span></h2>
                        <h2>City: <span>{item.city}</span></h2>
                        <h2>State: <span>{item.state}</span></h2>
                        <h2>Zip: <span>{item.zip}</span></h2>
                        <h2>Email: <span>{item.email}</span></h2>
                        <h2>Web: <span>{item.web}</span></h2>
                        <h2>Age: <span>{item.age}</span></h2>
                    </div>
                </div>
            ))}
        </>)
}