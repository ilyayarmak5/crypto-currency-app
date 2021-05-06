import RequestData from "./RequestData";
import SearchBar from "./SearchBar";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="container">
      <h1>Currency Tracker</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <RequestData search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;
