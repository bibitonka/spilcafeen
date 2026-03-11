import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import placeholderImage from "../assets/imageplaceholder.jpg"
import { initialGames } from "../data/initialGames"

export default function CreateGame(){
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

    const [name, setName] = useState("")
    const [players, setPlayers] = useState("")
    const [duration, setDuration] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [shelf, setShelf] = useState("")
    const [category, setCategory] = useState("")
    const [condition, setCondition] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [videoTutorial, setVideoTutorial] = useState("")
    const [shelfCount, setShelfCount] = useState("")

    const navigate = useNavigate()

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

    function createHandler(e){
        e.preventDefault()

        const trimmedShelf = shelf.trim()
        const isShelfless = condition.startsWith("out of stock")

        if (trimmedShelf && !isShelfless) {
            const existingOnShelf = games.find(
                (game) =>
                    game.shelf &&
                    game.shelf.toLowerCase() === trimmedShelf.toLowerCase()
            )

            if (existingOnShelf) {
                window.alert("Oops, there is already a game on this shelf place.")
                return
            }
        }

        const newGame = {
            id: Date.now(),
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

        setGames([...games, newGame])

        setName("")
        setPlayers("")
        setDuration("")
        setDifficulty("")
        setShelf("")
        setCategory("")
        setCondition("")
        setImage("")
        setDescription("")
        setVideoTutorial("")
        setShelfCount("")

        navigate("/app/games")
    }

    return (
        <div className="create-page">
            <h2>Create Game Card</h2>
            <form onSubmit={createHandler} className="game-form">
                <label htmlFor="name">Name of the Game</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter game name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="players">Number of Players</label>
                <input
                    type="text"
                    id="players"
                    placeholder="e.g. 2-4"
                    value={players}
                    onChange={(e) => setPlayers(e.target.value)}
                    required
                />

                <label htmlFor="duration">Duration of the Game</label>
                <input
                    type="text"
                    id="duration"
                    placeholder="e.g. 30-60 min"
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
                    placeholder="e.g. A3, B1"
                    value={shelf}
                    onChange={(e) => setShelf(e.target.value)}
                    required
                />

                <label htmlFor="shelfCount">Number of games physically on shelves</label>
                <input
                    type="number"
                    id="shelfCount"
                    min="0"
                    placeholder="e.g. 1, 2, 3"
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
                    placeholder="Describe the game, theme, and tone..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                />

                <label htmlFor="videoTutorial">Video tutorial (link)</label>
                <input
                    type="url"
                    id="videoTutorial"
                    placeholder="Paste a YouTube or other video link"
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

                <button type="submit" className="form-button">Create Game Card</button>
            </form>
        </div>
    )
}
