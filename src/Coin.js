const Coin = ({ coin }) => {
  const {
    name,
    price_change_percentage_24h,
    low_24h,
    high_24h,
    current_price,
    image,
  } = coin;
  return (
    <div>
      <img src={image} alt={`${name}`} />
      <h3>{name}</h3>
      <h5>{low_24h}</h5>
      <h5>{high_24h}</h5>
      <h5>{current_price}</h5>
      <h1>{price_change_percentage_24h}</h1>
    </div>
  );
};

export default Coin;
