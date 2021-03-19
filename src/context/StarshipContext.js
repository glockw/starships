import { createContext } from "react";
import useFetch from "../hooks/useFetch";

const StarshipContext = createContext();

const StarshipContextProvider = ({ children }) => {
  const { manufactures, starchips, loading } = useFetch();
  const providerValue = {
    manufactures,
    starchips,
    loading,
  };
  return (
    <StarshipContext.Provider value={providerValue}>
      {children}
    </StarshipContext.Provider>
  );
};

export { StarshipContext };

export default StarshipContextProvider;
