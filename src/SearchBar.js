const SearchBar = ({ search, setSearch }) => {

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        className="search-bar"
      />
    </form>
  );
};

export default SearchBar;
