import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useMail } from "../../Context";
import { useLocation } from "react-router-dom";

const EmailCard = (props: any) => {
  const { mId, subject, content, isStarred, unread } = props;

  const {
    starOnClickHandler,
    trashBtnHandler,
    spamBtnHandler,
    markAsReadBtnHandler,
    restoreFromTrash,
    restoreFromSpam
  } = useMail();

  const location = useLocation();

  return (
    <div
      className="card"
      style={{ backgroundColor: unread ? "#e0e0e0" : "red" }}
    >
      <div className="card-wrapper">
        <div className="email-subject">
          <h3>{subject}</h3>
          <div
            style={{
              fontSize: "1.3rem",
              cursor: "pointer"
            }}
            onClick={() => starOnClickHandler(mId)}
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
              <button onClick={() => restoreFromTrash(mId)}>Restore</button>
            ) : (
              <button onClick={() => trashBtnHandler(mId)}>Trash</button>
            )}

            <button onClick={() => markAsReadBtnHandler(mId)}>
              {!unread ? "Mark As Unread" : "Mark As Read"}
            </button>
            {location.pathname === "/spam" ? (
              <button onClick={() => restoreFromSpam(mId)}>Not Spam</button>
            ) : (
              <button onClick={() => spamBtnHandler(mId)}>
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
