import { useState, useEffect } from "react"
import GameList from "../components/GameList"
import SearchField from "../components/SearchField"
import { initialGames } from "../data/initialGames"

export default function GameDatabase(){
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

    const [filterText, setFilterText] = useState("")
    const [filterCategory, setFilterCategory] = useState("")
    const [filterCondition, setFilterCondition] = useState("")

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

    useEffect(() => {
        localStorage.setItem("games", JSON.stringify(games))
    }, [games])

    function deleteHandler(id){
        const confirmed = window.confirm("Are you sure you want to delete this game?")
        if (confirmed) {
            setGames(games.filter((game) => game.id !== id))
        }
    }

    function handleSearchInput(event){
        setFilterText(event.target.value)
    }

    const sortedGames = [...games].sort((a, b) =>
        a.name.localeCompare(b.name)
    )

    const filteredGames = sortedGames.filter((game) => {
        const matchesText = game.name.toLowerCase().includes(filterText.toLowerCase())
        const matchesCategory = filterCategory === "" || game.category === filterCategory
        const matchesCondition = filterCondition === "" || game.condition === filterCondition
        return matchesText && matchesCategory && matchesCondition
    })

    return (
        <div className="database-page">
            <h2>Game Database</h2>
            <p className="database-count">{filteredGames.length} game{filteredGames.length !== 1 ? "s" : ""} found</p>

            <div className="database-filters">
                <SearchField handleInput={handleSearchInput} filterText={filterText} />

                <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="filter-select"
                >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                    ))}
                </select>

                <select
                    value={filterCondition}
                    onChange={(e) => setFilterCondition(e.target.value)}
                    className="filter-select"
                >
                    <option value="">All Conditions</option>
                    {conditions.map((cond) => (
                        <option key={cond} value={cond}>{cond.charAt(0).toUpperCase() + cond.slice(1)}</option>
                    ))}
                </select>
            </div>

            {filteredGames.length > 0 ? (
                <GameList games={filteredGames} deleteHandler={deleteHandler} />
            ) : (
                <p className="no-games">No games found. Try adjusting your filters or create a new game card.</p>
            )}
        </div>
    )
}
