import { createContext, useContext } from "react";

const SpamContext = createContext<undefined | any>(undefined);

export const SpamContextProvider = ({ children }: any) => {
  return <SpamContext.Provider value={{}}>{children}</SpamContext.Provider>;
};

export const useSpam = () => useContext(SpamContext);
