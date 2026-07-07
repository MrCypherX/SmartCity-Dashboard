import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [role, setRole] = useState("citizen");
    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();

        // Role-based login
        navigate(role === "admin" ? "/admin" : "/citizen");

    };

    return (

        <form onSubmit={handleLogin}>

            <input
                type="email"
                placeholder="Email"
            />

            <input
                type="password"
                placeholder="Password"
            />

            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="citizen">Citizen</option>
                <option value="admin">Admin</option>
            </select>

            <button type="submit">
                Login
            </button>

        </form>

    );

}