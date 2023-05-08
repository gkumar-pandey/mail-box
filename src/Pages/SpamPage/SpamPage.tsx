import React from "react";
import { useMail } from "../../Context";
import { EmailCard } from "../../Components";

const SpamPage = () => {
  const { mails } = useMail();

  return (
    <div>
      <div className="search-bar-container">
        <h1>Spam Mails</h1>
      </div>
      <div>
        {mails.spam.map((mail: any) => (
          <EmailCard key={mail.mId} {...mail} />
        ))}
      </div>
    </div>
  );
};

export default SpamPage;
