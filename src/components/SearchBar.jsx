const SearchBar = ({ setQuery }) => {
  return(
    <div className="w-64 border-2 border-blue-500 rounded-md ml-32 my-3">
      <input
        type="search"
        placeholder="Search"
        className="pl-2 border border-none outline-none"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
  )
}

export default SearchBar;