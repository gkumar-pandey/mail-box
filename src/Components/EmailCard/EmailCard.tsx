import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useMail } from "../../Context";
import { useLocation } from "react-router-dom";
import { actions } from "../../Context/MailContext/MailContext";

const EmailCard = (props: any) => {
  const { mId, subject, content, isStarred, unread } = props;

  const { dispatchMail } = useMail();

  const location = useLocation();

  return (
    <div
      className="card"
      style={{ backgroundColor: unread ? "#DAF5FF" : "#fff" }}
    >
      <div className="card-wrapper">
        <div className="email-subject">
          <h3>{subject}</h3>
          <div
            style={{
              fontSize: "1.3rem",
              cursor: "pointer"
            }}
            onClick={() =>
              dispatchMail({ type: actions.MARK_STAR, payload: mId })
            }
          >
            {isStarred ? <AiFillStar /> : <AiOutlineStar className="star" />}
          </div>
        </div>
        <div>
          <p>{content}</p>
        </div>
        <div className="email-card-btns">
          <div>view details</div>
          <div>
            {location.pathname === "/trash" ? (
              <button
                onClick={() =>
                  dispatchMail({
                    type: actions.RESTORE_FROM_TRASH,
                    payload: props
                  })
                }
              >
                Restore
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatchMail({ type: actions.ADD_TO_TRASH, payload: props })
                }
              >
                Trash
              </button>
            )}

            <button
              onClick={() =>
                dispatchMail({ type: actions.MARK_AS_READ, payload: mId })
              }
            >
              {!unread ? "Mark As Unread" : "Mark As Read"}
            </button>
            {location.pathname === "/spam" ? (
              <button
                onClick={() =>
                  dispatchMail({
                    type: actions.RESTORE_FROM_SPAM,
                    payload: props
                  })
                }
              >
                Not Spam
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatchMail({ type: actions.ADD_TO_SPAM, payload: props })
                }
              >
                Report to spam
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
