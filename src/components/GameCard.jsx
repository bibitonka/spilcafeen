import { Link } from "react-router-dom"
import placeholderImage from "../assets/imageplaceholder.jpg"

const categoryColors = {
    classics: "#763B2E",
    funny: "#F6DE69",
    strategy: "#DD8848",
    horror: "#3D3232",
    combat: "#81A26D",
    cards: "#9257AC",
    trivia: "#6DA29F",
    mystery: "#8A8A8A",
    family: "#E38888",
    suspense: "#9F0200"
}

function needsLightText(category){
    const darkCategories = ["classics", "horror", "combat", "cards", "suspense", "mystery"]
    return darkCategories.includes(category)
}

function getShortDescription(description){
    if (!description) return ""
    const maxLength = 120
    if (description.length <= maxLength) return description
    return `${description.slice(0, maxLength)}...`
}

export default function GameCard({ game, deleteHandler }){
    const bgColor = categoryColors[game.category] || "#cccccc"
    const textColor = needsLightText(game.category) ? "#ffffff" : "#1a1a1a"
    const displayImage = game.image || placeholderImage
    const shortDescription = getShortDescription(game.description)

    return (
        <div
            className="game-card"
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            <div className="game-card-image">
                <img src={displayImage} alt={game.name} />
            </div>
            <div className="game-card-content">
                <h3>{game.name}</h3>
                <span className="game-category-badge">
                    {game.category.charAt(0).toUpperCase() + game.category.slice(1)}
                </span>
                <div className="game-card-details">
                    <p><strong>Players:</strong> {game.players}</p>
                    <p><strong>Duration:</strong> {game.duration}</p>
                    <p><strong>Difficulty:</strong> {game.difficulty}</p>
                    <p><strong>Shelf:</strong> {game.shelf}</p>
                    <p><strong>Condition:</strong> {game.condition}</p>
                    {typeof game.shelfCount !== "undefined" && game.shelfCount !== "" && (
                        <p><strong>Copies on shelves:</strong> {game.shelfCount}</p>
                    )}
                    {shortDescription && (
                        <p className="game-description">
                            <strong>Description:</strong> {shortDescription}
                        </p>
                    )}
                    {game.videoTutorial && (
                        <p>
                            <a
                                href={game.videoTutorial}
                                target="_blank"
                                rel="noreferrer"
                                className="game-video-link"
                            >
                                Watch video tutorial
                            </a>
                        </p>
                    )}
                </div>
                <div className="game-card-actions">
                    <Link
                        to={`/app/update/${game.id}`}
                        className="card-button card-button-update"
                    >
                        Update
                    </Link>
                    <button
                        type="button"
                        className="card-button card-button-delete"
                        onClick={() => deleteHandler(game.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
