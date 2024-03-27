import React, { useContext, createContext } from "react";
import wrestlerData from "../../public/wrestler-data.json";
import { Wrestler } from "../classes/Wrestler";

const WrestlerContext = createContext(null);

const WrestlerContextProvider = ({ children, wrestlerIndex }) => {
  return (
    <WrestlerContext.Provider value={wrestlerIndex}>
      {children}
    </WrestlerContext.Provider>
  );
};

export const useWrestler = () => {
  const wrestlerIndex = useContext(WrestlerContext);
  const wrestler = new Wrestler(wrestlerData[wrestlerIndex]);

  return {
    wrestler,
  };
};

export default WrestlerContextProvider;
