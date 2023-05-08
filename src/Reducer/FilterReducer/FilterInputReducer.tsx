import { filterActions } from "../../Context/MailContext/MailContext";

const filterInputReducer = (state: any, action: any) => {
  switch (action.type) {
    case filterActions.FILTER_BY_UNREAD:
      return { ...state, unreadFilter: !state.unreadFilter };
    case filterActions.FILTER_BY_STARRED:
      return { ...state, starredFilter: !state.starredFilter };
    case filterActions.RESET:
      return {
        unreadFilter: false,
        starredFilter: false
      };
    default:
      return state;
  }
};

export default filterInputReducer;
