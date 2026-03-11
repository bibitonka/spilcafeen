import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const adminAccounts = [
        { name: "Admin", password: "admin123" },
        { name: "Bibi", password: "bibi123" },
        { name: "Manager", password: "manager123" }
    ]

    function loginHandler(e){
        e.preventDefault()
        const found = adminAccounts.find(
            (acc) => acc.name.toLowerCase() === username.toLowerCase() && acc.password === password
        )

        if (found) {
            localStorage.setItem("currentUser", found.name)
            setError("")
            navigate("/app")
        } else {
            setError("Invalid username or password. Please try again.")
        }
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Spillcaf&eacute;</h1>
                <p className="login-subtitle">Admin Panel</p>
                <form onSubmit={loginHandler} className="login-form">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && <p className="login-error">{error}</p>}

                    <button type="submit" className="login-button">Log In</button>
                </form>
            </div>
        </div>
    )
}
