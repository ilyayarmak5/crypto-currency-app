import Header from "./home-page/Header";
import SearchBar from "./SearchBar";
import Coins from "./home-page/Coins";

import { useState } from "react";
import APIContextProvider from "./APIContextProvider";

// Dark Mode
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { useDarkMode } from "./styles/useDarkMode";
import ToggleTheme from "./ToggleTheme";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  const [search, setSearch] = useState("");
  const [theme, toggleTheme] = useDarkMode("light");

  return (
    <div className="container">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <ToggleTheme onToggle={toggleTheme}>Toggle Theme</ToggleTheme>
        <GlobalStyles />
        <Header />
        <SearchBar search={search} setSearch={setSearch} />
        <APIContextProvider>
          <Coins search={search} />
        </APIContextProvider>
      </ThemeProvider>
    </div>
  );
}

// <div className="coins">
//   {isLoading && <h1>Loading data...</h1>}
//   {isError && <h1>Error... Something went wrong</h1>}
//   <ReturnCurrency search={search} data={data} />
// </div>;

export default App;
