import React from "react";
import { useMail } from "../../Context";
import { EmailCard, Filters } from "../../Components";

const InboxPage = () => {
  const {
    mails: { inbox },
    filterInputs: { unreadFilter, starredFilter }
  } = useMail();

  const filteredMails = () => {
    let filteredData = [...inbox];

    if (unreadFilter) {
      filteredData = filteredData.filter((item: any) => item.unread);
    }

    if (starredFilter) {
      filteredData = filteredData.filter((item: any) => item.isStarred);
    }

    return filteredData;
  };

  return (
    <div>
      <div className="search-bar-container">
        <h1>Inbox</h1>
        <input placeholder="Search...." className="search" />
      </div>
      <div>
        <Filters />
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
