import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import placeholderImage from "../assets/imageplaceholder.jpg"
import { initialGames } from "../data/initialGames"

export default function UpdateGame(){
    const { id } = useParams()
    const navigate = useNavigate()

    const [games, setGames] = useState(() => {
        const savedGames = localStorage.getItem("games")
        if (savedGames) {
            try {
                const parsed = JSON.parse(savedGames)
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed
                }
            } catch (e) {
                // ignore and fall back to initial games
            }
        }
        localStorage.setItem("games", JSON.stringify(initialGames))
        return initialGames
    })

    const gameToUpdate = games.find((game) => game.id === Number(id))

    const [name, setName] = useState(gameToUpdate ? gameToUpdate.name : "")
    const [players, setPlayers] = useState(gameToUpdate ? gameToUpdate.players : "")
    const [duration, setDuration] = useState(gameToUpdate ? gameToUpdate.duration : "")
    const [difficulty, setDifficulty] = useState(gameToUpdate ? gameToUpdate.difficulty : "")
    const [shelf, setShelf] = useState(gameToUpdate ? gameToUpdate.shelf : "")
    const [category, setCategory] = useState(gameToUpdate ? gameToUpdate.category : "")
    const [condition, setCondition] = useState(gameToUpdate ? gameToUpdate.condition : "")
    const [image, setImage] = useState(gameToUpdate ? gameToUpdate.image : "")
    const [description, setDescription] = useState(gameToUpdate ? gameToUpdate.description || "" : "")
    const [videoTutorial, setVideoTutorial] = useState(gameToUpdate ? gameToUpdate.videoTutorial || "" : "")
    const [shelfCount, setShelfCount] = useState(
        gameToUpdate && typeof gameToUpdate.shelfCount !== "undefined"
            ? gameToUpdate.shelfCount
            : ""
    )

    const categories = [
        "classics", "funny", "strategy", "horror", "combat",
        "cards", "trivia", "mystery", "family", "suspense"
    ]

    const conditions = [
        "new in stock",
        "new arriving",
        "used very good",
        "used good",
        "used average",
        "very used - to be replaced",
        "wishlist - to order",
        "out of stock / shelfless"
    ]

    const difficulties = [
        "easy",
        "easy-medium",
        "medium",
        "medium-difficult",
        "difficult"
    ]

    useEffect(() => {
        localStorage.setItem("games", JSON.stringify(games))
    }, [games])

    function handleImageUpload(e){
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    function updateHandler(e){
        e.preventDefault()

        const trimmedShelf = shelf.trim()
        const isShelfless = condition.startsWith("out of stock")

        if (trimmedShelf && !isShelfless) {
            const existingOnShelf = games.find(
                (game) =>
                    game.id !== Number(id) &&
                    game.shelf &&
                    game.shelf.toLowerCase() === trimmedShelf.toLowerCase()
            )

            if (existingOnShelf) {
                window.alert("Oops, there is already a game on this shelf place.")
                return
            }
        }

        const updatedGames = games.map((game) => {
            if (game.id === Number(id)) {
                return {
                    ...game,
                    name,
                    players,
                    duration,
                    difficulty,
                    shelf: trimmedShelf,
                    category,
                    condition,
                    image: image || placeholderImage,
                    description,
                    videoTutorial,
                    shelfCount
                }
            }
            return game
        })

        setGames(updatedGames)
        navigate("/app/games")
    }

    if (!gameToUpdate) {
        return (
            <div className="update-page">
                <h2>Game not found</h2>
                <p>The game you are looking for does not exist.</p>
            </div>
        )
    }

    return (
        <div className="update-page">
            <h2>Update: {gameToUpdate.name}</h2>
            <form onSubmit={updateHandler} className="game-form">
                <label htmlFor="name">Name of the Game</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="players">Number of Players</label>
                <input
                    type="text"
                    id="players"
                    value={players}
                    onChange={(e) => setPlayers(e.target.value)}
                    required
                />

                <label htmlFor="duration">Duration of the Game</label>
                <input
                    type="text"
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                />

                <label htmlFor="difficulty">Difficulty</label>
                <div className="difficulty-buttons" id="difficulty">
                    {difficulties.map((level) => (
                        <button
                            key={level}
                            type="button"
                            className={
                                `difficulty-button${difficulty === level ? " active" : ""}`
                            }
                            onClick={() => setDifficulty(level)}
                        >
                            {level.replace("-", " ")}
                        </button>
                    ))}
                </div>

                <label htmlFor="shelf">Shelf Placement</label>
                <input
                    type="text"
                    id="shelf"
                    value={shelf}
                    onChange={(e) => setShelf(e.target.value)}
                    required
                />

                <label htmlFor="shelfCount">Number of games physically on shelves</label>
                <input
                    type="number"
                    id="shelfCount"
                    min="0"
                    value={shelfCount}
                    onChange={(e) => setShelfCount(e.target.value)}
                />

                <label htmlFor="category">Category</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">-- Select a category --</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                    ))}
                </select>

                <label htmlFor="condition">Condition</label>
                <select
                    id="condition"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    required
                >
                    <option value="">-- Select condition --</option>
                    {conditions.map((cond) => (
                        <option key={cond} value={cond}>{cond.charAt(0).toUpperCase() + cond.slice(1)}</option>
                    ))}
                </select>

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                />

                <label htmlFor="videoTutorial">Video tutorial (link)</label>
                <input
                    type="url"
                    id="videoTutorial"
                    value={videoTutorial}
                    onChange={(e) => setVideoTutorial(e.target.value)}
                />

                <label htmlFor="image">Game Image</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
                {image && (
                    <div className="image-preview">
                        <img src={image} alt="Preview" />
                    </div>
                )}

                <button type="submit" className="form-button">Update Game Card</button>
            </form>
        </div>
    )
}
