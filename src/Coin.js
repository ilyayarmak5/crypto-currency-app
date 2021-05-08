const Coin = ({ coin }) => {
  const {
    name,
    price_change_percentage_24h,
    low_24h,
    high_24h,
    current_price,
    image,
  } = coin;

  const roundUp = (num) => {
    return Math.round(num * 100) / 100;
  };
  return (
    <li className="coin">
      <img src={image} alt={`${name}`} />
      <h3>{name}</h3>
      <h4>Lowest Rate: {roundUp(low_24h)}$</h4>
      <h4>Highest Rate: {roundUp(high_24h)}$</h4>
      <h4>Current Rate: {roundUp(current_price)}$</h4>
      <h4
        className={price_change_percentage_24h > 0 ? "price-up" : "price-down"}
      >
        {roundUp(price_change_percentage_24h) + "%"}
      </h4>
    </li>
  );
};

export default Coin;
