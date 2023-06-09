import React from "react";
import { useMail } from "../../Context";
import { EmailCard, Filters } from "../../Components";
import { filterActions } from "../../Context/MailContext/MailContext";

const InboxPage = () => {
  const {
    mails: { inbox },
    dispatchInputs,
    filterInputs: { unreadFilter, starredFilter, searchQuery }
  } = useMail();

  const filteredMails = () => {
    let filteredData = [...inbox];

    if (searchQuery) {
      filteredData = filteredData.filter((item: any) =>
        item.subject.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (unreadFilter) {
      filteredData = filteredData.filter((item: any) => item.unread);
    }

    if (starredFilter) {
      filteredData = filteredData.filter((item: any) => item.isStarred);
    }

    return filteredData;
  };

  const unreadMails = inbox.reduce(
    (acc: any, curr: any) => (curr.unread ? (acc += 1) : acc),
    0
  );

  return (
    <div>
      <div className="search-bar-container">
        <h1>Inbox</h1>
        <input
          placeholder="Search...."
          className="search"
          value={searchQuery}
          onChange={(e) =>
            dispatchInputs({
              type: filterActions.SEARCH,
              payload: e.target.value
            })
          }
        />
      </div>
      <div>
        <Filters />
        <h2 style={{ padding: "0 1rem", color: "#fff" }}>
          Unreads : {unreadMails}
        </h2>
      </div>
      <div>
        {filteredMails().map((mail: any) => (
          <EmailCard {...mail} key={mail.mId} />
        ))}
      </div>
    </div>
  );
};

export default InboxPage;
