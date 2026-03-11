import GameCard from "./GameCard"

export default function GameList({ games, deleteHandler }){
    return (
        <div className="game-grid">
            {games.map((game) => (
                <GameCard key={game.id} game={game} deleteHandler={deleteHandler} />
            ))}
        </div>
    )
}
