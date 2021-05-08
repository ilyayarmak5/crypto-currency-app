import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    const localTheme = null;
    localTheme && setTheme(localTheme);
  }, []);
  return [theme, toggleTheme];
};
