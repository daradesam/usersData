import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-wrapper">
            <div className="main">
                <p>Click on below button to see list of users</p>
            </div>
            <Link to='/users'>
                <button>Click here</button>
            </Link>
        </div>
    )
}