import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useMail } from "../../Context";
import { Link, useLocation } from "react-router-dom";
import { actions } from "../../Context/MailContext/MailContext";
import { FaTrashAlt } from "react-icons/fa";
import { RiSpam2Fill } from "react-icons/ri";
import { IoMdMail, IoMdMailOpen } from "react-icons/io";

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
              fontSize: "1.6rem",
              cursor: "pointer",
              margin: "0 1rem"
            }}
            onClick={() =>
              dispatchMail({ type: actions.MARK_STAR, payload: mId })
            }
          >
            {isStarred ? <AiFillStar className="star" /> : <AiOutlineStar />}
          </div>
        </div>
        <div>
          <p>{content}</p>
        </div>
        <div className="email-card-btns">
          <Link to={`/email/${mId}`}>
            <button id="not-spam-btn">View Details</button>
          </Link>
          <div>
            {location.pathname === "/trash" ? (
              <button
                id="not-spam-btn"
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
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Delete"
                onClick={() =>
                  dispatchMail({ type: actions.ADD_TO_TRASH, payload: props })
                }
              >
                <FaTrashAlt style={{ color: "red", fontSize: "1rem" }} />
              </button>
            )}

            <button
              data-tooltip-id="my-tooltip"
              data-tooltip-content={!unread ? "Mark As Unread" : "Mark As Read"}
              onClick={() =>
                dispatchMail({ type: actions.MARK_AS_READ, payload: mId })
              }
            >
              {!unread ? (
                <>
                  <IoMdMailOpen style={{ fontSize: "1rem", color: "green" }} />
                </>
              ) : (
                <>
                  <IoMdMail style={{ fontSize: "1rem", color: "green" }} />
                </>
              )}
            </button>
            {location.pathname === "/spam" ? (
              <button
                id="not-spam-btn"
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
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Spam"
                onClick={() =>
                  dispatchMail({ type: actions.ADD_TO_SPAM, payload: props })
                }
              >
                <RiSpam2Fill style={{ fontSize: "1rem", color: "#CE5959" }} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
