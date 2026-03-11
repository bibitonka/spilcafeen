import { Link, useNavigate } from "react-router-dom"
import spilcafeenLogo from "../assets/spilcafeen.svg"

export default function Header(){
    const currentUser = localStorage.getItem("currentUser")
    const navigate = useNavigate()

    function logoutHandler(){
        localStorage.removeItem("currentUser")
        navigate("/")
    }

    return (
        <header>
            <div className="header-brand">
                <Link to="/app" className="header-logo">
                    <img
                        src={spilcafeenLogo}
                        alt="Spilcaféen logo"
                        className="header-logo-icon"
                    />
                    <span>Spilcaféen</span>
                </Link>
            </div>
            <nav>
                <Link to="/app">Home</Link>
                <Link to="/app/create">Create Game</Link>
                <Link to="/app/games">Game Database</Link>
            </nav>
            <div className="header-user">
                <span className="user-name">{currentUser}</span>
                <button onClick={logoutHandler} className="logout-button">Log Out</button>
            </div>
        </header>
    )
}
