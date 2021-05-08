import Header from "./Header";
import RequestData from "./RequestData";
import SearchBar from "./SearchBar";
import { useState } from "react";

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
        <RequestData search={search} setSearch={setSearch} />
      </ThemeProvider>
    </div>
  );
}

export default App;
