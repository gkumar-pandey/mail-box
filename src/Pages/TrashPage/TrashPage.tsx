import React from "react";
import { useMail } from "../../Context";
import { EmailCard } from "../../Components";

const TrashPage = () => {
  const { mails } = useMail();

  return (
    <div>
      <div className="search-bar-container">
        <h1>Trash Mails</h1>
      </div>
      <div>
        {mails.trash.map((mail: any) => (
          <EmailCard key={mail.mId} {...mail} />
        ))}
      </div>
    </div>
  );
};

export default TrashPage;
