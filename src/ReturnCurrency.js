import React from "react";
import Coin from "./Coin";
const ReturnCurrency = ({ search, data }) => {
  const filteredCoins = data.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });
  console.log(filteredCoins);
  return (
    <>
      {filteredCoins.map((coin) => {
        return <Coin key={coin.id} coin={coin} />;
      })}
    </>
  );
};
export default ReturnCurrency;
