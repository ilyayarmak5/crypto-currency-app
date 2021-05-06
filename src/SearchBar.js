const SearchBar = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <div>
      <form>
        <input type="text" placeholder="Search..." onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
