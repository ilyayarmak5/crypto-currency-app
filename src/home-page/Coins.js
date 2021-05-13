import React from "react";
import Coin from "./Coin";
import { useAPIData } from "../APIContextProvider";
import Fade from 'react-reveal/Fade';

const Coins = ({ search }) => {

  const { data, isLoading, isError } = useAPIData();
  const filteredCoins = data.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="coins">
      {isLoading && <h1>Loading data...</h1>}
      {isError && <h1>Error... Something went wrong</h1>}
      {filteredCoins.map((coin) => {
        return <Fade bottom key={coin.id}>
          <Coin coin={coin} />
        </Fade>
      })}
    </div>
  );
};
export default Coins;
