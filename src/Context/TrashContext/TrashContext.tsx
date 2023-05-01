import { createContext, useContext } from "react";

const TrashContext = createContext<any | undefined>(undefined);

export const TrashContextProvider = ({ children }: any) => {
  return <TrashContext.Provider value={{}}>{children}</TrashContext.Provider>;
};

export const useTrash = () => useContext(TrashContext);
