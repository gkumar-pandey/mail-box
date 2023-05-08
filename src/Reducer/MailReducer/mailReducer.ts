import { actions } from "../../Context/MailContext/MailContext";
import { getFilterMailsById } from "../../Utils/getFilterMailsById";

export const mailReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_INBOX":
      return { ...state, inbox: action.payload };
    case actions.ADD_TO_TRASH:
      return {
        ...state,
        spam: getFilterMailsById(state.spam, action.payload.mId),
        inbox: getFilterMailsById(state.inbox, action.payload.mId),
        trash: [...state.trash, action.payload]
      };
    case actions.RESTORE_FROM_TRASH:
      return {
        ...state,
        inbox: [...state.inbox, action.payload],
        trash: getFilterMailsById(state.trash, action.payload.mId)
      };
    case actions.ADD_TO_SPAM:
      return {
        ...state,
        inbox: getFilterMailsById(state.inbox, action.payload.mId),
        spam: [...state.spam, action.payload]
      };
    case actions.RESTORE_FROM_SPAM:
      return {
        ...state,
        inbox: [...state.inbox, action.payload],
        spam: getFilterMailsById(state.spam, action.payload.mId)
      };
    case actions.MARK_STAR:
      return {
        ...state,
        inbox: state.inbox.reduce(
          (acc: any, curr: any) =>
            curr.mId === action.payload
              ? [...acc, { ...curr, isStarred: !curr.isStarred }]
              : [...acc, curr],
          []
        )
      };
    case actions.MARK_AS_READ:
      return {
        ...state,
        trash: state.trash.reduce(
          (acc: any, curr: any) =>
            curr.mId === action.payload
              ? [...acc, { ...curr, unread: !curr.unread }]
              : [...acc, curr],
          []
        ),
        spam: state.spam.reduce(
          (acc: any, curr: any) =>
            curr.mId === action.payload
              ? [...acc, { ...curr, unread: !curr.unread }]
              : [...acc, curr],
          []
        ),
        inbox: state.inbox.reduce(
          (acc: any, curr: any) =>
            curr.mId === action.payload
              ? [...acc, { ...curr, unread: !curr.unread }]
              : [...acc, curr],
          []
        )
      };
  }
};
