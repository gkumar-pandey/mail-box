import React from "react";
import "./filterStyles.css";
import { useMail } from "../../Context";
import { filterActions } from "../../Context/MailContext/MailContext";
import { FaFilter } from "react-icons/fa";

const Filters = () => {
  const { dispatchInputs } = useMail();
  return (
    <div className="filter">
      <fieldset>
        <legend>
          <span>
            <FaFilter style={{ fontSize: "1.2rem" }} />
          </span>{" "}
          Filter
        </legend>
        <div>
          <label>
            <input
              type="checkbox"
              value="unread"
              onChange={() =>
                dispatchInputs({ type: filterActions.FILTER_BY_UNREAD })
              }
            />
            Show Unread Mails
          </label>

          <label>
            <input
              type="checkbox"
              value="isStarred"
              onChange={() =>
                dispatchInputs({ type: filterActions.FILTER_BY_STARRED })
              }
            />
            Show Stared Mails
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default Filters;
