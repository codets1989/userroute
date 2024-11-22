import React from "react";
import { Link,Outlet } from "react-router-dom";
const Userlist = () =>
{
    return(
        <div>
            <nav>
                <Link to="/Userlist/Edituser">Edit User</Link>
                <Link to="/Userlist/Userdetails">User Details</Link>
            </nav>
            <h1>User Details</h1>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Userlist;