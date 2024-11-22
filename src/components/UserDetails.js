import React from "react";
import { useState,useEffect } from "react";
const UserDetails = () =>
{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);
    return(
        <div>
                <h1>All Users</h1>
            {users.length > 0 ? (
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Age:</strong> {user.age}</p>
                            <hr />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found!</p>
            )}
        </div>
    )
}
export default UserDetails;