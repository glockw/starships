import { createContext } from "react";
import useFetch from "../hooks/useFetch";

const StarshipContext = createContext();

const StarshipContextProvider = ({ children }) => {
  const { manufacturers, starships, loading, changeManufacturer } = useFetch();
  const providerValue = {
    manufacturers,
    starships,
    loading,
    changeManufacturer,
  };
  return (
    <StarshipContext.Provider value={providerValue}>
      {children}
    </StarshipContext.Provider>
  );
};

export { StarshipContext };

export default StarshipContextProvider;
