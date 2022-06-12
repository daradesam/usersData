import { useParams } from "react-router"

export default function UserCard(users){
    let params = useParams();
    console.log(`${users[0]}`);
    console.log(params);
    return (
    <>
        <h1>Details: {users[params].first_name} </h1>
    </>)
}