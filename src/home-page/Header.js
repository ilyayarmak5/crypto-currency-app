import { useEffect, useState } from "react";

const Header = () => {

  const [textIsColored, setTextIsColored] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setTextIsColored(!textIsColored);
    }, 2000);
  }, [textIsColored]);

  return (
    <h1 className={textIsColored ? "header header-colored" : "header"}>
      Currency tracker
    </h1>
  );
};

export default Header;
