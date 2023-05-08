import { createContext, useContext, useEffect, useReducer } from "react";
import { fakeFetch } from "../../Api/api";

import { filterInputReducer, mailReducer } from "../../Reducer";

const MailContext = createContext<any | undefined>(undefined);

export const actions = {
  ADD_TO_ALL_MAILS: "ADD_TO_ALL_MAILS",
  ADD_TO_INBOX: "ADD_TO_INBOX",
  ADD_TO_TRASH: "ADD_TO_TRASH",
  RESTORE_FROM_TRASH: "RESTORE_FROM_TRASH",
  ADD_TO_SPAM: "ADD_TO_SPAM",
  RESTORE_FROM_SPAM: "RESTORE_FROM_SPAM",
  DELETE_FROM_TRASH: "DELETE_FROM_TRASH",
  MARK_STAR: "MARK_STAR",
  MARK_AS_READ: "MARK_AS_READ"
};

export const filterActions = {
  FILTER_BY_UNREAD: "FILTER_BY_UNREAD",
  FILTER_BY_STARRED: "FILTER_BY_STARRED",
  SEARCH: "SEARCH",
  RESET: "RESET"
};

const initialState = {
  allMails: [],
  inbox: [],
  spam: [],
  trash: []
};

const filterInitialState = {
  unreadFilter: false,
  starredFilter: false,
  searchQuery: ""
};

export const MailContextProvider = ({ children }: any) => {
  const [mails, dispatchMail] = useReducer(mailReducer, initialState);
  const [filterInputs, dispatchInputs] = useReducer(
    filterInputReducer,
    filterInitialState
  );

  const getData = async () => {
    const url = "https://example.com/api/allemails";
    try {
      const res: any = await fakeFetch(url);
      dispatchMail({ type: actions.ADD_TO_ALL_MAILS, payload: res.data });
      dispatchMail({ type: actions.ADD_TO_INBOX, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MailContext.Provider
      value={{
        mails,
        dispatchMail,
        filterInputs,
        dispatchInputs
      }}
    >
      {children}
    </MailContext.Provider>
  );
};

export const useMail = () => useContext(MailContext);
