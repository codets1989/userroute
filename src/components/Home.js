import React from "react";
import { Link } from "react-router-dom";
const Home = () =>
{
    return(
        <div>
            <nav>
               <Link to="Adduser">Add User</Link>
               <Link to="/Userlist">User List</Link>
            </nav>
            <h1>Home Page</h1>
        </div>
    )
}
export default Home;