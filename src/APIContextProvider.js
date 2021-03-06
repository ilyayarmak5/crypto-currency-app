import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const APIContext = React.createContext();

export const useAPIData = () => {
  return useContext(APIContext);
};

const APIContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.data;
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((reqData) => {
        setData(reqData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <APIContext.Provider value={{ data, isLoading, isError }}>
      {children}
    </APIContext.Provider>
  );
};

export default APIContextProvider;
