import React from "react";
import Coin from "./Coin";
import { useAPIData } from "../APIContextProvider";

const Coins = ({ search }) => {
  const { data, isLoading, isError } = useAPIData();
  console.log(data);
  const filteredCoins = data.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="coins">
      {isLoading && <h1>Loading data...</h1>}
      {isError && <h1>Error... Something went wrong</h1>}
      {filteredCoins.map((coin) => {
        return <Coin key={coin.id} coin={coin} />;
      })}
    </div>
  );
};
export default Coins;
