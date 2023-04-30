import { createContext, useContext } from "react";

const MailContext = createContext<any | undefined>(undefined);

export const MailContextProvider = ({ children }: any) => {
  return <MailContext.Provider value={{}}>{children}</MailContext.Provider>;
};

export const useMail = () => useContext(MailContext);
