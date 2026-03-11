export default function Home(){
    const currentUser = localStorage.getItem("currentUser") || "Admin"

    const colleagues = [
        { name: "Mette", role: "Barista", status: "online" },
        { name: "Jonas", role: "Game Host", status: "online" },
        { name: "Sofie", role: "Site Manager", status: "away" },
        { name: "Emil", role: "Bartender", status: "online" },
        { name: "Ida", role: "Event Coordinator", status: "offline" }
    ]

    return (
        <div className="home-page">
            <h2>Welcome back, {currentUser}!</h2>
            <p className="home-intro">Here is who is currently logged in to the system:</p>

            <div className="colleagues-grid">
                {colleagues.map((person, index) => (
                    <div key={index} className={`colleague-card status-${person.status}`}>
                        <div className="colleague-avatar">
                            {person.name.charAt(0)}
                        </div>
                        <div className="colleague-info">
                            <h3>{person.name}</h3>
                            <p className="colleague-role">{person.role}</p>
                            <span className={`status-badge ${person.status}`}>
                                {person.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
