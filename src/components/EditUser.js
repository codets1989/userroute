import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    const handleChange = (index, field, value) => {
        const updatedUsers = [...users];
        updatedUsers[index][field] = value;
        setUsers(updatedUsers);
    };

    const handleSave = () => {
        localStorage.setItem("users", JSON.stringify(users));
        
        navigate("/Userlist/Userdetails");
    };

    return (
        <div>
            <h1>Edit Users</h1>
            {users.length > 0 ? (
                <form onSubmit={(e) => e.preventDefault()}>
                    {users.map((user, index) => (
                        <div key={user.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "20px", paddingBottom: "10px" }}>
                            <div>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    value={user.name}
                                    onChange={(e) => handleChange(index, "name", e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={user.email}
                                    onChange={(e) => handleChange(index, "email", e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Age:</label>
                                <input
                                    type="number"
                                    value={user.age}
                                    onChange={(e) => handleChange(index, "age", e.target.value)}
                                />
                            </div>
                        </div>
                    ))}
                    <button type="button" onClick={handleSave}>
                        Save All Changes
                    </button>
                </form>
            ) : (
                <p>No users found!</p>
            )}
        </div>
    );
};

export default EditUser;
