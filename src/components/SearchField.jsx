export default function SearchField({ handleInput, filterText }){
    return (
        <input
            type="search"
            className="search-field"
            placeholder="Search for a game..."
            value={filterText}
            onChange={handleInput}
        />
    )
}
